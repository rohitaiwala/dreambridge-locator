
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useAuth } from "@/contexts/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Search, Plus, Users } from "lucide-react";

const searchSchema = z.object({
  searchQuery: z.string().min(2, "Search term must be at least 2 characters"),
});

const createGroupSchema = z.object({
  name: z.string().min(3, "Group name must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  classId: z.string().min(1, "Please select a class"),
  groupId: z.string().min(3, "Group ID must be at least 3 characters")
    .regex(/^[a-z0-9-]+$/, "Group ID can only contain lowercase letters, numbers and hyphens"),
});

const JoinCommunity = () => {
  const [activeTab, setActiveTab] = useState("search");
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isAuthenticated } = useAuth();

  const searchForm = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      searchQuery: "",
    },
  });

  const createForm = useForm<z.infer<typeof createGroupSchema>>({
    resolver: zodResolver(createGroupSchema),
    defaultValues: {
      name: "",
      description: "",
      classId: "",
      groupId: "",
    },
  });

  const onSearchSubmit = (values: z.infer<typeof searchSchema>) => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please login to join communities",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }

    toast({
      title: "Searching Communities",
      description: `Searching for "${values.searchQuery}"...`,
    });
    
    // In a real app, this would call an API to search for communities
    // For now, we'll just simulate navigating to a chat room
    navigate(`/chatroom`);
  };

  const onCreateSubmit = (values: z.infer<typeof createGroupSchema>) => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please login to create communities",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }

    toast({
      title: "Community Created",
      description: `"${values.name}" has been created successfully!`,
    });
    
    // In a real app, this would call an API to create the community
    // For now, we'll just simulate navigating to the new chat room
    navigate(`/chatroom`);
  };

  const classOptions = [
    { value: "11", label: "Class 11" },
    { value: "12", label: "Class 12" },
    { value: "ug1", label: "Undergraduate Year 1" },
    { value: "ug2", label: "Undergraduate Year 2" },
    { value: "ug3", label: "Undergraduate Year 3" },
    { value: "ug4", label: "Undergraduate Year 4" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#212A31" }}>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-[#2E3944] rounded-lg shadow-xl p-6">
          <h1 className="text-3xl font-bold text-center mb-8 text-[#D3D9D4]">
            Join or Create Communities
          </h1>

          <Tabs defaultValue="search" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="search" className="text-[#D3D9D4]">
                <Search className="mr-2 h-4 w-4" />
                Find Community
              </TabsTrigger>
              <TabsTrigger value="create" className="text-[#D3D9D4]">
                <Plus className="mr-2 h-4 w-4" />
                Create Community
              </TabsTrigger>
            </TabsList>

            <TabsContent value="search" className="space-y-4">
              <div className="bg-[#1D252B] p-4 rounded-lg mb-6 text-[#D3D9D4] flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <p>Search for communities by name or ID</p>
              </div>

              <Form {...searchForm}>
                <form onSubmit={searchForm.handleSubmit(onSearchSubmit)} className="space-y-4">
                  <FormField
                    control={searchForm.control}
                    name="searchQuery"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#D3D9D4]">Community Name or ID</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter community name or ID..." 
                            className="bg-[#1D252B] text-[#D3D9D4] border-[#124E66]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-[#124E66] text-[#D3D9D4] hover:bg-[#0D3F52]"
                  >
                    <Search className="mr-2 h-4 w-4" />
                    Search Communities
                  </Button>
                </form>
              </Form>
            </TabsContent>

            <TabsContent value="create" className="space-y-4">
              <div className="bg-[#1D252B] p-4 rounded-lg mb-6 text-[#D3D9D4] flex items-center">
                <Plus className="h-5 w-5 mr-2" />
                <p>Create your own community</p>
              </div>

              <Form {...createForm}>
                <form onSubmit={createForm.handleSubmit(onCreateSubmit)} className="space-y-4">
                  <FormField
                    control={createForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#D3D9D4]">Community Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter community name..." 
                            className="bg-[#1D252B] text-[#D3D9D4] border-[#124E66]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={createForm.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#D3D9D4]">Description</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Describe your community..." 
                            className="bg-[#1D252B] text-[#D3D9D4] border-[#124E66]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={createForm.control}
                    name="classId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#D3D9D4]">Class</FormLabel>
                        <FormControl>
                          <select 
                            className="w-full h-10 rounded-md border border-[#124E66] bg-[#1D252B] text-[#D3D9D4] px-3 py-2"
                            {...field}
                          >
                            <option value="">Select a class</option>
                            {classOptions.map(option => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={createForm.control}
                    name="groupId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#D3D9D4]">Community ID</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Create a unique ID (lowercase, numbers, hyphens)" 
                            className="bg-[#1D252B] text-[#D3D9D4] border-[#124E66]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#124E66] text-[#D3D9D4] hover:bg-[#0D3F52]"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Create Community
                  </Button>
                </form>
              </Form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
