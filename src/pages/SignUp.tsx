import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type UserRole = "student" | "tutor";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "student" as UserRole,
    qualification: "",
    institution: "",
    mobile: "",
    email: "",
    location: "",
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (value: UserRole) => {
    setFormData((prev) => ({ ...prev, role: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a placeholder for actual authentication logic
    toast({
      title: "Account created successfully!",
      description: "Please log in to continue.",
    });
    navigate("/community");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg animate-fade-in">
          <h1 className="text-3xl font-bold text-center mb-8 text-primary">
            Create Account
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-3">
              <Label>Role</Label>
              <RadioGroup
                value={formData.role}
                onValueChange={handleRoleChange}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="student" id="student" />
                  <Label htmlFor="student">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="tutor" id="tutor" />
                  <Label htmlFor="tutor">Tutor</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="qualification">Qualification</Label>
              <Input
                id="qualification"
                name="qualification"
                type="text"
                value={formData.qualification}
                onChange={handleChange}
                required
                placeholder={formData.role === "student" ? "Current Class/Year" : "Highest Qualification"}
              />
            </div>

            <div>
              <Label htmlFor="institution">
                {formData.role === "student" ? "School/College Name" : "Institution"}
              </Label>
              <Input
                id="institution"
                name="institution"
                type="text"
                value={formData.institution}
                onChange={handleChange}
                required
                placeholder="Enter your institution name"
              />
            </div>

            <div>
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input
                id="mobile"
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                required
                placeholder="Enter your mobile number"
              />
            </div>

            <div>
              <Label htmlFor="email">Email (Optional)</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="Enter your location"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full transform transition-transform hover:scale-105 active:scale-95 bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl"
            >
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;