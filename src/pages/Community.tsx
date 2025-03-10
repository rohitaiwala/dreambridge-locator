import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const Community = () => {
  const [showChat, setShowChat] = useState(false);
  const [selectedClass, setSelectedClass] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  // Simulated auth check - replace with your actual auth logic
  const isUserRegistered = () => {
    const user = localStorage.getItem("user");
    return !!user;
  };

  const handleClassSelect = (value: string) => {
    setSelectedClass(value);
    toast({
      title: "Class Selected",
      description: "You can now join the chat room!"
    });
  };

  const handleJoinClick = () => {
    if (!selectedClass) {
      toast({
        title: "Select a Class",
        description: "Please select your class before joining the chat room.",
        variant: "destructive"
      });
      return;
    }
    
    // Navigate to the join community page
    navigate("/join-community");
  };

  const classOptions = [{
    value: "11",
    label: "Class 11"
  }, {
    value: "12",
    label: "Class 12"
  }, {
    value: "ug1",
    label: "Undergraduate Year 1"
  }, {
    value: "ug2",
    label: "Undergraduate Year 2"
  }, {
    value: "ug3",
    label: "Undergraduate Year 3"
  }, {
    value: "ug4",
    label: "Undergraduate Year 4"
  }];
  const quotes = ["Empowering students with the knowledge and resources to unlock their true potential, no matter their board or background.", "Uniting passionate students by providing a platform where knowledge, opportunities, and guidance are easily accessible.", "Building a community where passion and skills are the primary drivers of success, not the board they belong to."];

  return <div className="min-h-screen" style={{
    backgroundColor: "#212A31"
  }}>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-[#D3D9D4] animate-fade-in">
            Join Our Student Community
          </h1>
          
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-xl text-center mb-4 text-[#D3D9D4]">Select Your Class</h2>
            <img src="/lovable-uploads/71d5625b-25db-42fe-9881-ff743972d880.png" alt="Student Community Illustration" className="w-full max-w-md mx-auto rounded-lg shadow-lg" loading="lazy" width="400" height="300" />
            <div className="grid gap-4 mb-6">
              {quotes.map((quote, index) => <div key={index} style={{
              backgroundColor: "#2E3944",
              borderColor: "#124E66"
            }} className="p-4 rounded-lg shadow-sm border bg-[#063737]/[0.92]">
                  <p className="italic text-[#D3D9D4] text-xl text-center font-normal">{quote}</p>
                </div>)}
            </div>
            <Select onValueChange={handleClassSelect}>
              <SelectTrigger className="w-full bg-[#2E3944] text-[#D3D9D4] border-[#124E66]">
                <SelectValue placeholder="Select your class" />
              </SelectTrigger>
              <SelectContent>
                {classOptions.map(option => <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>)}
              </SelectContent>
            </Select>
            <Button onClick={handleJoinClick} className={`w-full text-[#D3D9D4] ${!selectedClass ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#124E66]'}`} style={{
            backgroundColor: "#124E66"
          }} disabled={!selectedClass}>
              {selectedClass ? 'Join Chat Room' : 'Please Select a Class First'}
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default Community;
