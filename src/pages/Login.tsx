import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";

const Login = () => {
  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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
      title: "Login successful!",
      description: "Welcome back!",
    });
    navigate("/community");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg animate-fade-in">
          <h1 className="text-3xl font-bold text-center mb-8 text-primary">
            Login
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
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
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
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
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;