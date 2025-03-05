
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Search, Plus, List } from "lucide-react";

const Tasks = () => {
  return <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Find your tasks</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Card className="w-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-primary flex justify-center items-center gap-2">
                  <Search className="w-5 h-5" /> Find Tasks
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <p className="text-gray-600 mb-4 text-center">
                  Discover available tasks and assignments
                </p>
                <Link to="/find-tasks" className="text-secondary hover:text-secondary/80 font-medium transition-colors duration-300">
                  Click here
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col items-center">
            <Card className="w-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-primary flex justify-center items-center gap-2">
                  <Plus className="w-5 h-5" /> Add your Tasks
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <p className="text-gray-600 mb-4 text-center">
                  View and manage your current tasks
                </p>
                <Link to="/add-tasks" className="text-secondary hover:text-secondary/80 font-medium transition-colors duration-300">
                  Click here
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col items-center">
            <Card className="w-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-primary flex justify-center items-center gap-2">
                  <List className="w-5 h-5" /> Track Tasks
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <p className="text-gray-600 mb-4 text-center">
                  Monitor and track your task progress
                </p>
                <Link to="/track-tasks" className="text-secondary hover:text-secondary/80 font-medium transition-colors duration-300">
                  Click here
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>;
};
export default Tasks;
