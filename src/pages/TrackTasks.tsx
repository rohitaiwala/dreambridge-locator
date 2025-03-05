
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar, Clock, Check, Edit, Trash } from "lucide-react";
import { useState } from "react";

const TrackTasks = () => {
  // Mock data for user's tasks
  const [userTasks, setUserTasks] = useState([
    { id: 1, title: "Physics Assignment", subject: "Physics", deadline: "2023-06-25", progress: 75, status: "In Progress" },
    { id: 2, title: "Literature Essay", subject: "English", deadline: "2023-06-18", progress: 30, status: "In Progress" },
    { id: 3, title: "Biology Project", subject: "Biology", deadline: "2023-06-10", progress: 100, status: "Completed" },
  ]);

  const handleCompleteTask = (taskId: number) => {
    setUserTasks(tasks => 
      tasks.map(task => 
        task.id === taskId ? { ...task, progress: 100, status: "Completed" } : task
      )
    );
  };

  const handleDeleteTask = (taskId: number) => {
    setUserTasks(tasks => tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Track Your Tasks</h1>
        
        <div className="mb-8">
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
            <div className="bg-blue-100 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800">Total Tasks</h3>
              <p className="text-2xl font-bold text-primary">{userTasks.length}</p>
            </div>
            <div className="bg-yellow-100 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800">In Progress</h3>
              <p className="text-2xl font-bold text-amber-600">
                {userTasks.filter(task => task.status === "In Progress").length}
              </p>
            </div>
            <div className="bg-green-100 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800">Completed</h3>
              <p className="text-2xl font-bold text-green-600">
                {userTasks.filter(task => task.status === "Completed").length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          {userTasks.map(task => (
            <Card key={task.id} className="p-5">
              <div className="md:flex md:justify-between md:items-center">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-primary">{task.title}</h3>
                  <p className="text-gray-600">{task.subject}</p>
                  <div className="flex items-center text-sm text-gray-600 mt-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Due: {task.deadline}</span>
                  </div>
                </div>
                
                <div className="md:text-right">
                  <div className="mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      task.status === "Completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {task.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <Clock className="w-4 h-4 mr-1 text-gray-500" />
                    <span className="text-sm text-gray-600 mr-2">Progress:</span>
                    <div className="w-32">
                      <Progress value={task.progress} className="h-2" />
                    </div>
                    <span className="ml-2 text-sm font-medium">{task.progress}%</span>
                  </div>
                  
                  <div className="flex space-x-2 justify-end mt-3">
                    {task.status !== "Completed" && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex items-center gap-1"
                        onClick={() => handleCompleteTask(task.id)}
                      >
                        <Check className="w-4 h-4" /> Mark Complete
                      </Button>
                    )}
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <Edit className="w-4 h-4" /> Edit
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex items-center gap-1 text-destructive hover:bg-destructive/10"
                      onClick={() => handleDeleteTask(task.id)}
                    >
                      <Trash className="w-4 h-4" /> Delete
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
          
          {userTasks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">You don't have any tasks yet.</p>
              <Button className="mt-4" asChild>
                <a href="/add-tasks">Add Your First Task</a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackTasks;
