
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import { BookOpen, Clock, Upload, User, Check, X, MessageCircle, ExternalLink } from "lucide-react";
import { Camera } from "lucide-react";

// Mock student requests
const MOCK_REQUESTS = [
  {
    id: "req1",
    studentName: "Alex Johnson",
    subject: "Mathematics",
    topic: "Calculus - Integration by Parts",
    deadline: "2023-06-15",
    description: "I need help understanding integration by parts for my calculus homework. I'm struggling with the formula and when to apply it.",
    status: "pending",
    createdAt: "2023-06-10T14:30:00Z"
  },
  {
    id: "req2",
    studentName: "Sarah Lee",
    subject: "Physics",
    topic: "Newton's Laws of Motion",
    deadline: "2023-06-18",
    description: "I'm preparing for my physics exam and need help with problems related to Newton's laws of motion, particularly the second law.",
    status: "pending",
    createdAt: "2023-06-11T09:15:00Z"
  },
  {
    id: "req3",
    studentName: "Michael Chen",
    subject: "Computer Science",
    topic: "Data Structures - Binary Trees",
    deadline: "2023-06-20",
    description: "I need help implementing a balanced binary search tree for my data structures assignment.",
    status: "pending",
    createdAt: "2023-06-12T16:45:00Z"
  }
];

// Mock accepted requests
const MOCK_ACCEPTED_REQUESTS = [
  {
    id: "acc1",
    studentName: "Emily Wilson",
    subject: "Chemistry",
    topic: "Organic Chemistry - Alkenes and Alkynes",
    deadline: "2023-06-08",
    description: "Need help understanding the reactions of alkenes and alkynes for my organic chemistry class.",
    status: "accepted",
    createdAt: "2023-06-05T11:20:00Z",
    acceptedAt: "2023-06-06T09:30:00Z"
  }
];

// Mock past requests
const MOCK_PAST_REQUESTS = [
  {
    id: "past1",
    studentName: "David Brown",
    subject: "English Literature",
    topic: "Shakespeare's Hamlet Analysis",
    deadline: "2023-05-25",
    description: "Needed help analyzing key themes and characters in Shakespeare's Hamlet for my literature essay.",
    status: "completed",
    createdAt: "2023-05-20T13:10:00Z",
    acceptedAt: "2023-05-21T10:45:00Z",
    completedAt: "2023-05-24T16:30:00Z"
  },
  {
    id: "past2",
    studentName: "Jessica Martinez",
    subject: "Biology",
    topic: "Cell Division - Mitosis and Meiosis",
    deadline: "2023-05-18",
    description: "Needed help understanding the differences between mitosis and meiosis processes for my biology exam.",
    status: "completed", 
    createdAt: "2023-05-15T09:30:00Z",
    acceptedAt: "2023-05-16T14:20:00Z",
    completedAt: "2023-05-17T11:45:00Z"
  }
];

const ClassRequests = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("new");
  const [responseForm, setResponseForm] = useState({
    answer: "",
    videoLink: ""
  });
  const [respondingTo, setRespondingTo] = useState<string | null>(null);
  const [responseImages, setResponseImages] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  
  const [pendingRequests, setPendingRequests] = useState(MOCK_REQUESTS);
  const [acceptedRequests, setAcceptedRequests] = useState(MOCK_ACCEPTED_REQUESTS);
  const [pastRequests, setPastRequests] = useState(MOCK_PAST_REQUESTS);
  
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
            setResponseImages(prev => [...prev, event.target.result as string]);
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
    setResponseImages(prevImages => prevImages.filter((_, i) => i !== index));
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setResponseForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleRespond = (requestId: string) => {
    setRespondingTo(requestId);
    setResponseForm({
      answer: "",
      videoLink: ""
    });
    setResponseImages([]);
  };
  
  const handleCancelResponse = () => {
    setRespondingTo(null);
    setResponseForm({
      answer: "",
      videoLink: ""
    });
    setResponseImages([]);
  };
  
  const handleSubmitResponse = () => {
    if (!responseForm.answer) {
      toast.error("Please provide an answer to the request");
      return;
    }
    
    // In a real app, you would send data to your backend
    console.log("Submitting response:", {
      requestId: respondingTo,
      ...responseForm,
      images: responseImages
    });
    
    // Update UI
    const updatedPending = pendingRequests.filter(req => req.id !== respondingTo);
    const acceptedRequest = pendingRequests.find(req => req.id === respondingTo);
    
    if (acceptedRequest) {
      setAcceptedRequests(prev => [
        ...prev,
        {
          ...acceptedRequest,
          status: "accepted",
          acceptedAt: new Date().toISOString()
        }
      ]);
    }
    
    setPendingRequests(updatedPending);
    setRespondingTo(null);
    setResponseForm({
      answer: "",
      videoLink: ""
    });
    setResponseImages([]);
    
    toast.success("Response submitted successfully!");
  };
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Class Requests</h1>
        
        <Tabs defaultValue="new" className="max-w-5xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="new">
              New Requests <span className="ml-2 bg-primary/20 text-primary px-2 py-0.5 rounded-full text-xs">{pendingRequests.length}</span>
            </TabsTrigger>
            <TabsTrigger value="active">
              Active <span className="ml-2 bg-primary/20 text-primary px-2 py-0.5 rounded-full text-xs">{acceptedRequests.length}</span>
            </TabsTrigger>
            <TabsTrigger value="past">
              Past Requests <span className="ml-2 bg-primary/20 text-primary px-2 py-0.5 rounded-full text-xs">{pastRequests.length}</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="new" className="space-y-6">
            {respondingTo ? (
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Respond to Request</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="answer">Your Answer</Label>
                    <Textarea 
                      id="answer"
                      name="answer"
                      value={responseForm.answer}
                      onChange={handleChange}
                      placeholder="Provide a detailed answer to the student's question..."
                      className="mt-1"
                      rows={6}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="videoLink">YouTube Tutorial Link (Optional)</Label>
                    <Input
                      id="videoLink"
                      name="videoLink"
                      value={responseForm.videoLink}
                      onChange={handleChange}
                      placeholder="e.g., https://youtu.be/example"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="images">Upload Images (Optional)</Label>
                    <div className="flex items-center gap-2 mt-1">
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
                    
                    {isUploading && <p className="text-sm text-muted-foreground mt-2">Uploading...</p>}
                    
                    {responseImages.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-medium mb-2">Attached Images ({responseImages.length})</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          {responseImages.map((image, index) => (
                            <div key={index} className="relative group">
                              <img 
                                src={image} 
                                alt={`Solution image ${index + 1}`} 
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
                  
                  <div className="flex justify-end gap-4 pt-4">
                    <Button variant="outline" onClick={handleCancelResponse}>
                      Cancel
                    </Button>
                    <Button onClick={handleSubmitResponse}>
                      Submit Response
                    </Button>
                  </div>
                </div>
              </Card>
            ) : (
              <>
                {pendingRequests.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No new requests at the moment.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {pendingRequests.map(request => (
                      <Card key={request.id} className="p-6">
                        <div className="flex justify-between flex-col sm:flex-row mb-4">
                          <div>
                            <h3 className="text-lg font-semibold">{request.subject} - {request.topic}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                              <User className="h-4 w-4" />
                              <span>{request.studentName}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 mt-4 sm:mt-0">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              <span>Deadline: {formatDate(request.deadline)}</span>
                            </div>
                            <Button onClick={() => handleRespond(request.id)}>
                              Respond
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm mb-4">{request.description}</p>
                      </Card>
                    ))}
                  </div>
                )}
              </>
            )}
          </TabsContent>
          
          <TabsContent value="active" className="space-y-6">
            {acceptedRequests.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No active requests at the moment.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {acceptedRequests.map(request => (
                  <Card key={request.id} className="p-6">
                    <div className="flex justify-between flex-col sm:flex-row mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{request.subject} - {request.topic}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <User className="h-4 w-4" />
                          <span>{request.studentName}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mt-4 sm:mt-0">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>Deadline: {formatDate(request.deadline)}</span>
                        </div>
                        <Button>
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Chat
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm mb-4">{request.description}</p>
                    <div className="flex justify-between items-center text-sm text-muted-foreground bg-muted/50 p-3 rounded-md">
                      <span>Accepted on {formatDate(request.acceptedAt)}</span>
                      <span className="flex items-center text-green-600 gap-1">
                        <Check className="h-4 w-4" />
                        Active
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="past" className="space-y-6">
            {pastRequests.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No past requests.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {pastRequests.map(request => (
                  <Card key={request.id} className="p-6">
                    <div className="flex justify-between flex-col sm:flex-row mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{request.subject} - {request.topic}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <User className="h-4 w-4" />
                          <span>{request.studentName}</span>
                        </div>
                      </div>
                      <div className="mt-4 sm:mt-0">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>Completed: {formatDate(request.completedAt)}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm mb-4">{request.description}</p>
                    <div className="flex justify-between items-center text-sm text-muted-foreground bg-muted/50 p-3 rounded-md">
                      <span>Accepted on {formatDate(request.acceptedAt)}</span>
                      <span className="flex items-center text-blue-600 gap-1">
                        <ExternalLink className="h-4 w-4" />
                        View Details
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
        
        {activeTab === "new" && pendingRequests.length > 0 && !respondingTo && (
          <div className="max-w-5xl mx-auto mt-8 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-center text-muted-foreground">
              You have {pendingRequests.length} out of 10 weekly requests available. Requests are refreshed every Monday.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassRequests;
