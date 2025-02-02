import { Navbar } from "@/components/Navbar";

const Tutors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary animate-fade-in">
          Find Your Perfect Tutor
        </h1>
        {/* Tutor content will be implemented in future updates */}
        <div className="text-center text-gray-600">
          Tutor search functionality coming soon!
        </div>
      </div>
    </div>
  );
};

export default Tutors;