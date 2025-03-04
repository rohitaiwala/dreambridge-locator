
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// This matches the resources data in ResourceCards.tsx
const resourceDetails = {
  "study-guides": {
    title: "Study Guides",
    description: "Comprehensive study materials for all subjects, from mathematics to literature.",
    imageUrl: "https://source.unsplash.com/random/1200x600/?study",
    content: "Our study guides are designed to help students master complex subjects with ease. Whether you're studying for an exam or looking to deepen your understanding of a specific topic, our guides provide clear explanations, helpful examples, and practice exercises."
  },
  "video-tutorials": {
    title: "Video Tutorials",
    description: "Visual learning resources with step-by-step guidance from expert educators.",
    imageUrl: "https://source.unsplash.com/random/1200x600/?video",
    content: "Our video tutorials offer visual demonstrations of complex concepts explained by experienced educators. Each video is carefully structured to build understanding progressively, with clear visuals and engaging presentation styles that make learning enjoyable."
  },
  "practice-tests": {
    title: "Practice Tests",
    description: "Test your knowledge with our extensive collection of practice exams.",
    imageUrl: "https://source.unsplash.com/random/1200x600/?exam",
    content: "Prepare for upcoming exams with our comprehensive collection of practice tests. These tests are designed to simulate actual exam conditions and cover all the key topics you need to master. Each test comes with detailed explanations for all answers."
  },
  "research-papers": {
    title: "Research Papers",
    description: "Access the latest academic research papers and scholarly articles.",
    imageUrl: "https://source.unsplash.com/random/1200x600/?research",
    content: "Stay updated with the latest research in your field of study. Our collection of research papers and scholarly articles spans across multiple disciplines and is regularly updated with new publications from leading academic journals and institutions."
  },
  "interactive-lessons": {
    title: "Interactive Lessons",
    description: "Engage with interactive content designed to make learning fun and effective.",
    imageUrl: "https://source.unsplash.com/random/1200x600/?interactive",
    content: "Our interactive lessons combine text, images, videos, and quizzes to create an engaging learning experience. These lessons are designed to adapt to your learning pace and style, providing personalized feedback and guidance."
  },
  "educational-games": {
    title: "Educational Games",
    description: "Learn while having fun with our collection of educational games and activities.",
    imageUrl: "https://source.unsplash.com/random/1200x600/?educational-game",
    content: "Make learning fun with our educational games. These games are designed to reinforce key concepts while keeping you engaged and motivated. From vocabulary builders to math challenges, our games cover a wide range of subjects and skill levels."
  }
};

export const ResourceDetail = () => {
  const { resourceId } = useParams<{ resourceId: string }>();
  const navigate = useNavigate();
  
  const resource = resourceId && resourceDetails[resourceId as keyof typeof resourceDetails];
  
  if (!resource) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Resource not found</h2>
        <Button onClick={() => navigate('/resources')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Resources
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="outline" 
        onClick={() => navigate('/resources')}
        className="mb-8 transition-all duration-300 
          bg-transparent hover:bg-primary/10 dark:hover:bg-primary/20 
          hover:text-primary dark:hover:text-white
          border-primary/20 hover:border-primary"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Resources
      </Button>

      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
        <div className="w-full h-64 md:h-96 overflow-hidden">
          <img 
            src={resource.imageUrl} 
            alt={resource.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-6 md:p-8">
          <h1 className="text-3xl font-bold text-primary mb-4">{resource.title}</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">{resource.description}</p>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Overview</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{resource.content}</p>
            
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mt-8">
              <p className="text-gray-500 dark:text-gray-400">
                Detailed content coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
