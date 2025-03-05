
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Calendar, BookOpen } from "lucide-react";
import { useState } from "react";

const FindTasks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock data for available tasks
  const availableTasks = [
    { id: 1, title: "Math Homework Help", subject: "Mathematics", deadline: "2023-06-15", description: "Need help with calculus problems" },
    { id: 2, title: "History Essay Review", subject: "History", deadline: "2023-06-18", description: "5-page essay on World War II" },
    { id: 3, title: "Chemistry Lab Report", subject: "Chemistry", deadline: "2023-06-20", description: "Analysis of recent lab experiment" },
  ];

  const filteredTasks = availableTasks.filter(task => 
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Find Available Tasks</h1>
        
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center space-x-2">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by subject, title, or description..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button>Search</Button>
          </div>
        </div>

        {filteredTasks.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredTasks.map(task => (
              <Card key={task.id} className="p-4 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">{task.title}</h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <BookOpen className="w-4 h-4 mr-1" />
                  <span>{task.subject}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Due: {task.deadline}</span>
                </div>
                <p className="text-gray-700 mb-4">{task.description}</p>
                <Button size="sm" className="w-full">Apply for this task</Button>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No tasks found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindTasks;
