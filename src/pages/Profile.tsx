
import { useAuth } from "@/contexts/AuthContext";
import { Navbar } from "@/components/Navbar";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { BookOpen, MessageCircle, CalendarClock } from "lucide-react";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // If not logged in, redirect to login
  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FFDEE2] dark:bg-[#1A202C] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <Card className="shadow-lg border-2 border-amber-300 bg-[#FDE1D3]/80 dark:bg-gray-800">
              <CardHeader className="flex flex-col md:flex-row md:items-center gap-6 pb-2">
                <Avatar className="h-24 w-24 rounded-full border-4 border-amber-300">
                  <img 
                    src={user.profileImage || "https://i.pravatar.cc/150?img=8"} 
                    alt={user.name} 
                    className="h-full w-full object-cover rounded-full"
                  />
                </Avatar>
                <div className="space-y-1">
                  <CardTitle className="text-3xl font-bold text-[#2D3A3A] dark:text-white">
                    {user.name}
                  </CardTitle>
                  <CardDescription className="text-lg text-[#2D3A3A] dark:text-gray-300">
                    {user.role === 'student' ? 'Student' : 'Tutor'}
                  </CardDescription>
                  <p className="text-[#2D3A3A] dark:text-gray-300">{user.email}</p>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow flex items-center gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                      <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-200" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#2D3A3A] dark:text-white">Courses</h3>
                      <p className="text-gray-500 dark:text-gray-300">{user.role === 'student' ? '4 Enrolled' : '3 Teaching'}</p>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow flex items-center gap-3">
                    <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                      <MessageCircle className="h-6 w-6 text-green-600 dark:text-green-200" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#2D3A3A] dark:text-white">Messages</h3>
                      <p className="text-gray-500 dark:text-gray-300">12 Unread</p>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow flex items-center gap-3">
                    <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                      <CalendarClock className="h-6 w-6 text-purple-600 dark:text-purple-200" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#2D3A3A] dark:text-white">Upcoming</h3>
                      <p className="text-gray-500 dark:text-gray-300">2 Sessions</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                  <h3 className="text-xl font-bold text-[#2D3A3A] dark:text-white mb-4">About Me</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {user.role === 'student' 
                      ? 'I am an enthusiastic student looking to expand my knowledge. I enjoy learning new subjects and connecting with great tutors.'
                      : 'Experienced tutor with a passion for teaching. I specialize in making complex subjects easy to understand and helping students achieve their academic goals.'}
                  </p>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-end gap-4 pt-4">
                <Button variant="outline" onClick={() => navigate('/')}>
                  Back to Home
                </Button>
                <Button variant="destructive" onClick={() => {
                  logout();
                  navigate('/login');
                }}>
                  Logout
                </Button>
              </CardFooter>
            </Card>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
