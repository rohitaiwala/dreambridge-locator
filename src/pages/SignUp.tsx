import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { Navbar } from "@/components/Navbar";
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match!",
        variant: "destructive"
      });
      return;
    }
    if (formData.password.length < 6) {
      toast({
        title: "Error",
        description: "Password must be at least 6 characters long!",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Account created successfully!",
      description: "Please log in to continue."
    });
    navigate("/login");
  };
  return <>
      <Navbar />
      <div className="min-h-screen bg-[#FFDEE2] dark:bg-[#1A202C] flex items-center justify-center">
        <div className="w-full max-w-md mx-auto px-6">
          <div className="bg-[#FDE1D3]/80 dark:bg-gray-800 rounded-3xl shadow-lg p-8 border-2 border-amber-300 mx-0 my-[20px]">
            <h1 className="text-3xl font-bold text-center mb-6 text-[#2D3A3A] dark:text-gray-100">
              SIGN UP
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#2D3A3A] dark:text-gray-300 font-medium">
                  Name
                </Label>
                <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required placeholder="Enter your full name" className="rounded-xl border-amber-300 dark:border-gray-700 focus:border-amber-400 focus:ring-amber-400 bg-white dark:bg-gray-950" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#2D3A3A] dark:text-gray-300 font-medium">
                  Email
                </Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email" className="rounded-xl border-amber-300 dark:border-gray-700 focus:border-amber-400 focus:ring-amber-400 bg-white dark:bg-gray-950" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#2D3A3A] dark:text-gray-300 font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Input id="password" name="password" type={showPassword ? "text" : "password"} value={formData.password} onChange={handleChange} required placeholder="Enter your password" className="rounded-xl border-amber-300 dark:border-gray-700 focus:border-amber-400 focus:ring-amber-400 bg-white dark:bg-gray-950" />
                  <Button type="button" variant="ghost" size="icon" className="absolute right-0 top-0 h-full px-3 hover:bg-transparent" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff className="h-4 w-4 text-gray-400 dark:text-gray-500" /> : <Eye className="h-4 w-4 text-gray-400 dark:text-gray-500" />}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-[#2D3A3A] dark:text-gray-300 font-medium">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Input id="confirmPassword" name="confirmPassword" type={showConfirmPassword ? "text" : "password"} value={formData.confirmPassword} onChange={handleChange} required placeholder="Confirm your password" className="rounded-xl border-amber-300 dark:border-gray-700 focus:border-amber-400 focus:ring-amber-400 bg-white dark:bg-gray-950" />
                  <Button type="button" variant="ghost" size="icon" className="absolute right-0 top-0 h-full px-3 hover:bg-transparent" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <EyeOff className="h-4 w-4 text-gray-400 dark:text-gray-500" /> : <Eye className="h-4 w-4 text-gray-400 dark:text-gray-500" />}
                  </Button>
                </div>
              </div>

              <Button type="submit" className="w-full py-3 rounded-xl text-white font-semibold mt-4 bg-sky-950 hover:bg-sky-800">
                SIGN UP
              </Button>

              <div className="text-center mt-4">
                <span className="text-[#2D3A3A] dark:text-gray-400">Have an Account? </span>
                <Link to="/login" className="text-[#206269] hover:underline font-semibold">
                  Login Here!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>;
};
export default SignUp;