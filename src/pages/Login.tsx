
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Eye, EyeOff } from "lucide-react";
import { Navbar } from "@/components/Navbar";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await login(values.email, values.password);
      toast({
        title: "Welcome back!",
        description: `Successfully logged in`
      });
      navigate("/profile");
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Error",
        description: "Invalid email or password.",
        variant: "destructive"
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FFDEE2] dark:bg-[#1A202C] flex items-center justify-center">
        <div className="w-full max-w-md mx-auto px-6">
          <div className="bg-[#FDE1D3]/80 dark:bg-gray-800 rounded-3xl shadow-lg p-8 border-2 border-amber-300">
            <div className="text-center space-y-2 mb-6">
              <h1 className="text-3xl font-bold text-[#2D3A3A] dark:text-gray-100">LOGIN</h1>
              
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                <p><strong>Test Credentials:</strong></p>
                <p>Student: student@test.com / student123</p>
                <p>Tutor: tutor@test.com / tutor123</p>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField control={form.control} name="email" render={({ field }) => 
                  <FormItem>
                    <FormLabel className="text-[#2D3A3A] dark:text-gray-300 font-medium">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} className="rounded-xl border-amber-300 dark:border-gray-700 focus:border-amber-400 focus:ring-amber-400 bg-white dark:bg-gray-950" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                } />

                <FormField control={form.control} name="password" render={({ field }) => 
                  <FormItem>
                    <FormLabel className="text-[#2D3A3A] dark:text-gray-300 font-medium">Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Enter your password" 
                          {...field}
                          className="rounded-xl border-amber-300 dark:border-gray-700 focus:border-amber-400 focus:ring-amber-400 bg-white dark:bg-gray-950" 
                        />
                        <Button type="button" variant="ghost" size="icon" className="absolute right-0 top-0 h-full px-3 hover:bg-transparent" onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? <EyeOff className="h-4 w-4 text-gray-400 dark:text-gray-500" /> : <Eye className="h-4 w-4 text-gray-400 dark:text-gray-500" />}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                } />

                <Button type="submit" className="w-full text-white rounded-xl py-3 font-semibold mt-6 bg-sky-950 hover:bg-sky-800">
                  LOGIN
                </Button>

                <div className="text-center mt-4">
                  <span className="text-[#2D3A3A] dark:text-gray-400">Don't have an account? </span>
                  <Link to="/signup" className="text-[#206269] hover:underline font-semibold">
                    Sign Up Here!
                  </Link>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
