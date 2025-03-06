
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const TutorOnboarding = () => {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    education: "",
    specialization: "",
    experience: "",
    availability: "",
    teachingStyle: "",
    bio: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const nextStep = () => {
    if (step < 3) {
      setStep(prev => prev + 1);
    } else {
      completeOnboarding();
    }
  };
  
  const prevStep = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };
  
  const completeOnboarding = () => {
    // In a real app, you would send data to your API here
    console.log("Onboarding data:", formData);
    
    // Update user in context
    updateUser({ hasCompletedOnboarding: true });
    
    toast.success("Profile setup completed! Next step: Take your assessment test.");
    navigate("/tutor-test");
  };
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto shadow-lg p-6 border-2 border-primary/20">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-primary">Tutor Profile Setup</h1>
              <div className="text-sm text-muted-foreground">Step {step} of 3</div>
            </div>
            
            <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
              <div 
                className="bg-primary h-full transition-all duration-300 ease-in-out" 
                style={{ width: `${(step / 3) * 100}%` }} 
              />
            </div>
          </div>
          
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Educational Background
              </h2>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="education">Highest Education Level</Label>
                  <Select 
                    onValueChange={(value) => handleSelectChange("education", value)}
                    value={formData.education}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                      <SelectItem value="master">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="specialization">Specialization</Label>
                  <Input 
                    id="specialization"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    placeholder="e.g., Mathematics, Computer Science"
                  />
                </div>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Teaching Experience
              </h2>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Teaching Experience</Label>
                  <Select 
                    onValueChange={(value) => handleSelectChange("experience", value)}
                    value={formData.experience}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select years of experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">Less than 1 year</SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5+">5+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="availability">Availability</Label>
                  <Select 
                    onValueChange={(value) => handleSelectChange("availability", value)}
                    value={formData.availability}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekdays">Weekdays</SelectItem>
                      <SelectItem value="evenings">Evenings</SelectItem>
                      <SelectItem value="weekends">Weekends</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="teachingStyle">Teaching Style</Label>
                  <Select 
                    onValueChange={(value) => handleSelectChange("teachingStyle", value)}
                    value={formData.teachingStyle}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your teaching style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="interactive">Interactive</SelectItem>
                      <SelectItem value="lecture">Lecture-based</SelectItem>
                      <SelectItem value="problem-solving">Problem-solving</SelectItem>
                      <SelectItem value="discussion">Discussion-based</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Tutor Profile
              </h2>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio / About Me</Label>
                  <Textarea 
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    placeholder="Tell students about yourself, your teaching philosophy, and what makes you a great tutor..."
                    rows={6}
                  />
                </div>
              </div>
              
              <div className="rounded-lg bg-muted p-4 text-sm">
                <p className="font-medium">Next Steps:</p>
                <p className="mt-2">After completing your profile, you'll be directed to our assessment test to evaluate your subject knowledge. This assessment helps us match you with suitable students.</p>
              </div>
            </div>
          )}
          
          <div className="flex justify-between mt-8">
            <Button 
              variant="outline" 
              onClick={prevStep}
              disabled={step === 1}
            >
              Back
            </Button>
            
            <Button onClick={nextStep}>
              {step === 3 ? "Complete Setup" : "Continue"}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TutorOnboarding;
