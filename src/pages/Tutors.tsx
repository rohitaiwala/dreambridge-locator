
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { Search, Upload, GraduationCap, BookOpen, MapPin, DollarSign, Users } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

const tutorSearchSchema = z.object({
  class: z.string().min(1, "Class is required"),
  subject: z.string().min(1, "Subject is required"),
  location: z.string().min(1, "Location is required"),
  feeRange: z.string().min(1, "Fee range is required"),
  questionImage: z.instanceof(FileList).optional().refine(
    (files) => !files || files.length === 0 || Array.from(files).every(file => file.type.startsWith('image/')), 
    "Please upload only image files"
  )
});

type TutorSearchForm = z.infer<typeof tutorSearchSchema>;

const Tutors = () => {
  const [searchResults, setSearchResults] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const form = useForm<TutorSearchForm>({
    resolver: zodResolver(tutorSearchSchema),
    defaultValues: {
      class: "",
      subject: "",
      location: "",
      feeRange: "",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: TutorSearchForm) => {
    setIsLoading(true);
    // Simulate API call
    try {
      console.log("Search form data:", data);
      // In a real app, you would make an API call here
      setTimeout(() => {
        setSearchResults(true);
        setIsLoading(false);
        toast({
          title: "Search completed",
          description: "We found tutors matching your criteria!",
        });
      }, 1500);
    } catch (error) {
      console.error("Error searching for tutors:", error);
      setIsLoading(false);
      toast({
        title: "Error",
        description: "Failed to search for tutors. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary animate-fade-in">
          Find Your Perfect Tutor
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-fade-in">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Search className="h-5 w-5 text-primary" />
              Search for Tutors
            </h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="class"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1">
                          <GraduationCap className="h-4 w-4" /> Class/Grade
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select class or grade" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="elementary">Elementary School</SelectItem>
                            <SelectItem value="middle">Middle School</SelectItem>
                            <SelectItem value="high">High School</SelectItem>
                            <SelectItem value="college">College</SelectItem>
                            <SelectItem value="university">University</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" /> Subject
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="math">Mathematics</SelectItem>
                            <SelectItem value="physics">Physics</SelectItem>
                            <SelectItem value="chemistry">Chemistry</SelectItem>
                            <SelectItem value="biology">Biology</SelectItem>
                            <SelectItem value="english">English</SelectItem>
                            <SelectItem value="history">History</SelectItem>
                            <SelectItem value="computer_science">Computer Science</SelectItem>
                            <SelectItem value="foreign_language">Foreign Language</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" /> Location
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select location" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="online">Online</SelectItem>
                            <SelectItem value="in_person">In-person</SelectItem>
                            <SelectItem value="hybrid">Hybrid</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="feeRange"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" /> Fee Range
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select fee range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="0-25">$0-$25/hr</SelectItem>
                            <SelectItem value="25-50">$25-$50/hr</SelectItem>
                            <SelectItem value="50-75">$50-$75/hr</SelectItem>
                            <SelectItem value="75-100">$75-$100/hr</SelectItem>
                            <SelectItem value="100+">$100+/hr</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="questionImage"
                  render={({ field: { onChange, value, ...field } }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-1">
                        <Upload className="h-4 w-4" /> Upload Your Toughest Questions (Optional)
                      </FormLabel>
                      <FormControl>
                        <div className="flex flex-col space-y-2">
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              onChange(e.target.files);
                              handleImageChange(e);
                            }}
                            {...field}
                            className="cursor-pointer"
                          />
                          {previewUrl && (
                            <div className="mt-2 relative">
                              <img 
                                src={previewUrl} 
                                alt="Question preview" 
                                className="max-h-40 rounded-md object-contain border" 
                              />
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className="absolute top-2 right-2"
                                onClick={() => setPreviewUrl(null)}
                              >
                                Remove
                              </Button>
                            </div>
                          )}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Searching..." : "Find Tutors"}
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-fade-in">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              {searchResults ? "Available Tutors" : "Tutor Eligibility"}
            </h2>
            
            {searchResults ? (
              <div className="space-y-4">
                {/* Sample tutor cards - in a real app, these would be dynamically generated */}
                <div className="border rounded-lg p-4 hover:border-primary transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Sarah Johnson</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Mathematics | High School</p>
                      <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mt-1">
                        <MapPin className="h-3 w-3" /> Online
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                        <DollarSign className="h-3 w-3" /> $35/hr
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Contact</Button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4 hover:border-primary transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">David Chen</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Physics | College</p>
                      <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mt-1">
                        <MapPin className="h-3 w-3" /> Hybrid
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                        <DollarSign className="h-3 w-3" /> $45/hr
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Contact</Button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4 hover:border-primary transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Michelle Rodriguez</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Chemistry | University</p>
                      <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mt-1">
                        <MapPin className="h-3 w-3" /> In-person
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                        <DollarSign className="h-3 w-3" /> $60/hr
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Contact</Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-4 py-8">
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <p className="mb-4">Fill out the search form to find tutors that match your needs.</p>
                  <p>Our platform helps you connect with qualified tutors based on:</p>
                  <ul className="list-disc text-left ml-8 mt-2">
                    <li>Educational level (elementary to university)</li>
                    <li>Subject expertise</li>
                    <li>Preferred tutoring method (online/in-person)</li>
                    <li>Budget constraints</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-4">
                  You can also upload images of specific questions you need help with
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutors;
