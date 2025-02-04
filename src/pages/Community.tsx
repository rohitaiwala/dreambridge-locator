import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

const Community = () => {
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [showChat, setShowChat] = useState(false);
  const navigate = useNavigate();
  
  const isLoggedIn = false; // This should be replaced with actual auth state

  const handleClassSelect = (value: string) => {
    setSelectedClass(value);
    setShowChat(true);
  };

  const handleJoinClick = () => {
    if (!isLoggedIn) {
      navigate("/signup");
      return;
    }
    console.log("Joining community for class:", selectedClass);
    // Add join community logic here
  };

  const quotes = [
    "Empowering students with the knowledge and resources to unlock their true potential, no matter their board or background.",
    "Uniting passionate students by providing a platform where knowledge, opportunities, and guidance are easily accessible.",
    "Building a community where passion and skills are the primary drivers of success, not the board they belong to."
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#212A31" }}>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-[#D3D9D4] animate-fade-in">
            Join Our Student Community
          </h1>
          
          {!showChat ? (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-xl text-center mb-4 text-[#748D92]">Select Your Class</h2>
              <img 
                src="/lovable-uploads/71d5625b-25db-42fe-9881-ff743972d880.png"
                alt="Student Community Illustration"
                className="w-full rounded-lg shadow-lg mb-6 animate-fade-in"
              />
              <div className="space-y-4 mb-6">
                {quotes.map((quote, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg shadow-sm border"
                    style={{ backgroundColor: "#2E3944", borderColor: "#124E66" }}
                  >
                    <p className="text-sm italic text-[#748D92]">"{quote}"</p>
                  </div>
                ))}
              </div>
              <Select onValueChange={handleClassSelect}>
                <SelectTrigger className="w-full bg-[#2E3944] text-[#D3D9D4] border-[#124E66]">
                  <SelectValue placeholder="Select your class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9">Class 9</SelectItem>
                  <SelectItem value="10">Class 10</SelectItem>
                  <SelectItem value="11">Class 11</SelectItem>
                  <SelectItem value="12">Class 12</SelectItem>
                  <SelectItem value="ug1">Undergraduate Year 1</SelectItem>
                  <SelectItem value="ug2">Undergraduate Year 2</SelectItem>
                  <SelectItem value="ug3">Undergraduate Year 3</SelectItem>
                  <SelectItem value="ug4">Undergraduate Year 4</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ) : (
            <div className="space-y-6 animate-fade-in">
              <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: "#2E3944" }}>
                <h2 className="text-xl font-semibold mb-4 text-[#D3D9D4]">
                  Community Chat for {selectedClass.includes("ug") 
                    ? `Undergraduate Year ${selectedClass.charAt(2)}` 
                    : `Class ${selectedClass}`}
                </h2>
                <Button 
                  onClick={handleJoinClick}
                  className="w-full hover:bg-[#124E66] text-[#D3D9D4] animate-pulse"
                  style={{ backgroundColor: "#124E66" }}
                >
                  Join Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Community;