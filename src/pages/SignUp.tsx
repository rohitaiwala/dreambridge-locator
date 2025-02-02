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
    password: "",
    confirmPassword: "",
  });
  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  // Generate random 6-digit captcha on component mount
  useState(() => {
    const randomCaptcha = Math.floor(100000 + Math.random() * 900000).toString();
    setCaptcha(randomCaptcha);
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (value: UserRole) => {
    setFormData((prev) => ({ ...prev, role: value }));
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

    if (userCaptcha !== captcha) {
      toast({
        title: "Error",
        description: "Invalid CAPTCHA!",
        variant: "destructive",
      });
      return;
    }

    // This is a placeholder for actual authentication logic
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

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter password (min 6 characters)"
                minLength={6}
              />
            </div>

            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Confirm your password"
                minLength={6}
              />
            </div>

            <div>
              <Label>Security Check</Label>
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-gray-100 p-2 rounded font-mono text-lg">
                  {captcha}
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    const newCaptcha = Math.floor(100000 + Math.random() * 900000).toString();
                    setCaptcha(newCaptcha);
                  }}
                >
                  Refresh
                </Button>
              </div>
              <Input
                type="text"
                value={userCaptcha}
                onChange={(e) => setUserCaptcha(e.target.value)}
                required
                placeholder="Enter the code above"
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