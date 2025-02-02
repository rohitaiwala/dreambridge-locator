import { Navbar } from "@/components/Navbar";

const Tasks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary animate-fade-in">
          Your Study Tasks
        </h1>
        {/* Tasks content will be implemented in future updates */}
        <div className="text-center text-gray-600">
          Task management features coming soon!
        </div>
      </div>
    </div>
  );
};

export default Tasks;