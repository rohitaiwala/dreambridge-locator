
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const AddTasks = () => {
  const [taskForm, setTaskForm] = useState({
    title: "",
    subject: "",
    deadline: "",
    description: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTaskForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!taskForm.title || !taskForm.subject || !taskForm.deadline || !taskForm.description) {
      toast.error("Please fill all required fields");
      return;
    }
    
    // In a real app, this is where you'd send data to your backend
    console.log("Submitted task:", taskForm);
    toast.success("Task added successfully!");
    
    // Reset form
    setTaskForm({
      title: "",
      subject: "",
      deadline: "",
      description: ""
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Add New Task</h1>
        
        <Card className="max-w-2xl mx-auto p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Task Title *</Label>
              <Input 
                id="title"
                name="title"
                placeholder="Enter task title"
                value={taskForm.title}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Subject *</Label>
              <Input 
                id="subject"
                name="subject"
                placeholder="Enter subject (e.g., Mathematics, English)"
                value={taskForm.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="deadline">Deadline *</Label>
              <Input 
                id="deadline"
                name="deadline"
                type="date"
                value={taskForm.deadline}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea 
                id="description"
                name="description"
                placeholder="Provide details about the task..."
                rows={5}
                value={taskForm.description}
                onChange={handleChange}
                required
              />
            </div>
            
            <Button type="submit" className="w-full">Submit Task</Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddTasks;
