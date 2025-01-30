import { BookOpen, Users, Award, Target } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Offline Tutoring",
    description: "Connect with qualified tutors in your area for personalized learning experiences.",
  },
  {
    icon: Users,
    title: "Student Community",
    description: "Join the largest student community for support, guidance, and networking.",
  },
  {
    icon: Award,
    title: "Task Marketplace",
    description: "Find opportunities to earn while learning through our task marketplace.",
  },
  {
    icon: Target,
    title: "Career Guidance",
    description: "Get personalized career recommendations and guidance for your future.",
  },
];

export const Features = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};