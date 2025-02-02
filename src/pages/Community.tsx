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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-primary animate-fade-in">
            Join Our Student Community
          </h1>
          
          {!showChat ? (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-xl text-center mb-4">Select Your Class</h2>
              <Select onValueChange={handleClassSelect}>
                <SelectTrigger className="w-full">
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
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">
                  Community Chat for {selectedClass.includes("ug") 
                    ? `Undergraduate Year ${selectedClass.charAt(2)}` 
                    : `Class ${selectedClass}`}
                </h2>
                <div className="h-96 bg-gray-50 rounded-lg mb-4 p-4">
                  {/* Chat messages will be displayed here */}
                  <div className="text-center text-gray-500 mt-32">
                    Join the community to see messages
                  </div>
                </div>
                <Button 
                  onClick={handleJoinClick}
                  className="w-full bg-primary hover:bg-primary/90 text-white animate-pulse"
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