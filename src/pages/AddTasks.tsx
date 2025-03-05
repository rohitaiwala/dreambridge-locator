
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Camera, X } from "lucide-react";

const AddTasks = () => {
  const [taskForm, setTaskForm] = useState({
    title: "",
    subject: "",
    deadline: "",
    description: ""
  });
  
  const [taskImages, setTaskImages] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTaskForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    setIsUploading(true);
    
    // Convert each file to a data URL
    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        
        reader.onload = (event) => {
          if (event.target && event.target.result) {
            setTaskImages(prev => [...prev, event.target.result as string]);
          }
        };
        
        reader.readAsDataURL(file);
      } else {
        toast.error("Only image files are allowed");
      }
    });
    
    setIsUploading(false);
    e.target.value = ''; // Reset input after upload
  };

  const removeImage = (index: number) => {
    setTaskImages(prevImages => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!taskForm.title || !taskForm.subject || !taskForm.deadline || !taskForm.description) {
      toast.error("Please fill all required fields");
      return;
    }
    
    // In a real app, this is where you'd send data to your backend
    console.log("Submitted task:", { ...taskForm, images: taskImages });
    toast.success("Task added successfully!");
    
    // Reset form
    setTaskForm({
      title: "",
      subject: "",
      deadline: "",
      description: ""
    });
    setTaskImages([]);
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
            
            <div className="space-y-2">
              <Label htmlFor="images">Upload Images (optional)</Label>
              <div className="flex items-center gap-2">
                <label 
                  htmlFor="images" 
                  className="flex items-center gap-2 py-2 px-4 border border-input rounded-md cursor-pointer hover:bg-accent transition-colors"
                >
                  <Camera size={20} /> Choose Images
                </label>
                <Input 
                  id="images"
                  name="images"
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>
              
              {isUploading && <p className="text-sm text-muted-foreground">Uploading...</p>}
              
              {taskImages.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium mb-2">Attached Images ({taskImages.length})</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {taskImages.map((image, index) => (
                      <div key={index} className="relative group">
                        <img 
                          src={image} 
                          alt={`Task attachment ${index + 1}`} 
                          className="h-24 w-full object-cover rounded-md border"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-destructive text-white rounded-full p-1 shadow-md opacity-80 hover:opacity-100 transition-opacity"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Button type="submit" className="w-full">Submit Task</Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddTasks;
