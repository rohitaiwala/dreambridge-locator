
import { BookOpen, Users, Award, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: BookOpen,
    title: "Offline Tutoring",
    description: "Connect with qualified tutors in your area for personalized learning experiences.",
    link: "/tutors"
  },
  {
    icon: Users,
    title: "Student Community",
    description: "Join the largest student community for support, guidance, and networking.",
    link: "/community"
  },
  {
    icon: Award,
    title: "Task Marketplace",
    description: "Find opportunities to earn while learning through our task marketplace.",
    link: "/tasks"
  },
  {
    icon: Target,
    title: "Career Guidance",
    description: "Get personalized career recommendations and guidance for your future.",
    link: "/resources"
  },
];

export const Features = () => {
  return (
    <div className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-primary dark:text-white">
          Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg 
              shadow-[0_5px_15px_rgba(0,0,0,0.1)] 
              dark:shadow-[0_5px_15px_rgba(0,0,0,0.3)]
              transform-gpu transition-all duration-300 
              hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.15),0_8px_10px_-6px_rgba(0,0,0,0.1)] 
              dark:hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.4),0_8px_10px_-6px_rgba(0,0,0,0.2)]
              hover:translate-y-[-5px] hover:bg-white/95 dark:hover:bg-gray-700/95"
            >
              <div className="w-12 h-12 bg-primary/10 dark:bg-primary/5 rounded-full flex items-center justify-center mb-4 mx-auto transform transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="w-6 h-6 text-primary dark:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4">{feature.description}</p>
              <div className="flex justify-center">
                <Link to={feature.link}>
                  <Button variant="outline" size="sm" className="mt-2 flex items-center gap-2 
                  transition-all duration-300 hover:bg-primary/10 dark:hover:bg-primary/20 
                  hover:text-primary dark:hover:text-white">
                    Click here
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
