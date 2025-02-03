import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Captcha } from "@/components/ui/captcha";

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
    password: "",
    confirmPassword: "",
  });
  const [userCaptcha, setUserCaptcha] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match!",
        variant: "destructive",
      });
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: "Error",
        description: "Password must be at least 6 characters long!",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Account created successfully!",
      description: "Please log in to continue.",
    });
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-8 text-primary">
            Create Account
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { label: "Full Name", name: "name", type: "text", placeholder: "Enter your full name" },
              { label: "Qualification", name: "qualification", type: "text", placeholder: formData.role === "student" ? "Current Class/Year" : "Highest Qualification" },
              { label: formData.role === "student" ? "School/College Name" : "Institution", name: "institution", type: "text", placeholder: "Enter your institution name" },
              { label: "Mobile Number", name: "mobile", type: "tel", placeholder: "Enter your mobile number" },
              { label: "Email (Optional)", name: "email", type: "email", placeholder: "Enter your email", required: false },
              { label: "Location", name: "location", type: "text", placeholder: "Enter your location" },
              { label: "Password", name: "password", type: "password", placeholder: "Enter password (min 6 characters)" },
              { label: "Confirm Password", name: "confirmPassword", type: "password", placeholder: "Confirm your password" },
            ].map((field) => (
              <div key={field.name}>
                <Label htmlFor={field.name}>{field.label}</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                  required={field.required !== false}
                  placeholder={field.placeholder}
                />
              </div>
            ))}

            <div className="space-y-3">
              <Label>Role</Label>
              <RadioGroup
                value={formData.role}
                onValueChange={(value: UserRole) => setFormData(prev => ({ ...prev, role: value }))}
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

            <Captcha value={userCaptcha} onChange={setUserCaptcha} />

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