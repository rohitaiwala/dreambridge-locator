
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const resources = [
  {
    title: "Study Guides",
    description: "Comprehensive study materials for all subjects, from mathematics to literature.",
    imageUrl: "https://source.unsplash.com/random/300x300/?study",
    link: "#study-guides"
  },
  {
    title: "Video Tutorials",
    description: "Visual learning resources with step-by-step guidance from expert educators.",
    imageUrl: "https://source.unsplash.com/random/300x300/?video",
    link: "#video-tutorials"
  },
  {
    title: "Practice Tests",
    description: "Test your knowledge with our extensive collection of practice exams.",
    imageUrl: "https://source.unsplash.com/random/300x300/?exam",
    link: "#practice-tests"
  },
  {
    title: "Research Papers",
    description: "Access the latest academic research papers and scholarly articles.",
    imageUrl: "https://source.unsplash.com/random/300x300/?research",
    link: "#research-papers"
  },
  {
    title: "Interactive Lessons",
    description: "Engage with interactive content designed to make learning fun and effective.",
    imageUrl: "https://source.unsplash.com/random/300x300/?interactive",
    link: "#interactive-lessons"
  },
  {
    title: "Educational Games",
    description: "Learn while having fun with our collection of educational games and activities.",
    imageUrl: "https://source.unsplash.com/random/300x300/?educational-game",
    link: "#educational-games"
  }
];

export const ResourceCards = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <Card 
            key={index}
            className="group aspect-square overflow-hidden border-none relative bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900
              transform-gpu transition-all duration-500 ease-out
              hover:translate-y-[-8px]
              shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]
              hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]
              dark:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.4),0_4px_6px_-4px_rgba(0,0,0,0.4)]
              dark:hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.6),0_8px_10px_-6px_rgba(0,0,0,0.6)]
              rounded-xl"
          >
            <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 rounded-xl"></div>
            
            <div className="relative w-full h-1/2 overflow-hidden">
              <img 
                src={resource.imageUrl} 
                alt={resource.title} 
                className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
              <Button 
                variant="outline" 
                onClick={() => scrollToSection(resource.link.substring(1))}
                className="w-full transition-all duration-300 
                  bg-transparent hover:bg-primary/10 dark:hover:bg-primary/20 
                  hover:text-primary dark:hover:text-white
                  border-primary/20 hover:border-primary"
              >
                Explore
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Content sections that can be scrolled to */}
      {resources.map((resource, index) => {
        const sectionId = resource.link.substring(1);
        return (
          <section 
            key={index} 
            id={sectionId} 
            className={`min-h-screen flex flex-col items-center justify-center p-6 border-t border-gray-200 dark:border-gray-800 transition-all duration-500 ease-in-out ${
              activeSection === sectionId ? 'opacity-100' : 'opacity-0 pointer-events-none h-0 overflow-hidden'
            }`}
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">{resource.title}</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                This section will contain detailed information about {resource.title.toLowerCase()}.
                Content will be added in future updates.
              </p>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">
                  Content coming soon
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => setActiveSection(null)}
              className="mt-8 transition-all duration-300 
                bg-transparent hover:bg-primary/10 dark:hover:bg-primary/20 
                hover:text-primary dark:hover:text-white
                border-primary/20 hover:border-primary"
            >
              Back to Resources
            </Button>
          </section>
        );
      })}
    </div>
  );
};
