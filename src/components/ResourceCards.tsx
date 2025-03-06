import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
const resources = [{
  title: "Study Guides",
  description: "Comprehensive study materials for all subjects, from mathematics to literature.",
  imageUrl: "https://source.unsplash.com/random/300x300/?study",
  link: "study-guides"
}, {
  title: "Video Tutorials",
  description: "Visual learning resources with step-by-step guidance from expert educators.",
  imageUrl: "https://source.unsplash.com/random/300x300/?video",
  link: "video-tutorials"
}, {
  title: "Practice Tests",
  description: "Test your knowledge with our extensive collection of practice exams.",
  imageUrl: "https://source.unsplash.com/random/300x300/?exam",
  link: "practice-tests"
}, {
  title: "Research Papers",
  description: "Access the latest academic research papers and scholarly articles.",
  imageUrl: "https://source.unsplash.com/random/300x300/?research",
  link: "research-papers"
}, {
  title: "Interactive Lessons",
  description: "Engage with interactive content designed to make learning fun and effective.",
  imageUrl: "https://source.unsplash.com/random/300x300/?interactive",
  link: "interactive-lessons"
}, {
  title: "Educational Games",
  description: "Learn while having fun with our collection of educational games and activities.",
  imageUrl: "https://source.unsplash.com/random/300x300/?educational-game",
  link: "educational-games"
}];
export const ResourceCards = () => {
  const navigate = useNavigate();
  const navigateToResource = (resourceLink: string) => {
    navigate(`/resources/${resourceLink}`);
  };
  return <div className="space-y-16">
      
    </div>;
};