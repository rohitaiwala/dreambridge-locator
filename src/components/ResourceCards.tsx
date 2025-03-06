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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource, index) => <Card key={index} className="group aspect-square overflow-hidden border-none relative bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900
              transform-gpu transition-all duration-500 ease-out
              hover:translate-y-[-8px]
              shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]
              hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]
              dark:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.4),0_4px_6px_-4px_rgba(0,0,0,0.4)]
              dark:hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.6),0_8px_10px_-6px_rgba(0,0,0,0.6)]
              rounded-xl">
            
            
            <div className="relative w-full h-1/2 overflow-hidden">
              <img src={resource.imageUrl} alt={resource.title} className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110" />
              
            </div>
            
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold text-primary dark:text-primary-foreground transition-colors duration-300 group-hover:text-primary/80 dark:group-hover:text-primary-foreground/80">
                {resource.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="pb-4">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {resource.description}
              </p>
            </CardContent>
            
            <CardFooter className="pt-0">
              <Button variant="outline" onClick={() => navigateToResource(resource.link)} className="w-full transition-all duration-300 
                  bg-transparent hover:bg-primary/10 dark:hover:bg-primary/20 
                  hover:text-primary dark:hover:text-white
                  border-primary/20 hover:border-primary">
                Explore
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>)}
      </div>
    </div>;
};