
import { useState } from "react";
import { useAuth, User } from "@/contexts/AuthContext";
import { Navbar } from "@/components/Navbar";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { BookOpen, MessageCircle, CalendarClock, Pencil, X, Check, Camera } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Edit states
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<User | null>(user);
  const [aboutMe, setAboutMe] = useState<string>(
    user?.role === 'student' 
      ? 'I am an enthusiastic student looking to expand my knowledge. I enjoy learning new subjects and connecting with great tutors.'
      : 'Experienced tutor with a passion for teaching. I specialize in making complex subjects easy to understand and helping students achieve their academic goals.'
  );
  const [tempImage, setTempImage] = useState<string | null>(null);

  // If not logged in, redirect to login
  if (!user) {
    navigate("/login");
    return null;
  }

  const handleEditToggle = () => {
    if (isEditing) {
      // Cancel editing, reset to original values
      setEditedUser(user);
      setTempImage(null);
      setAboutMe(
        user?.role === 'student' 
          ? 'I am an enthusiastic student looking to expand my knowledge. I enjoy learning new subjects and connecting with great tutors.'
          : 'Experienced tutor with a passion for teaching. I specialize in making complex subjects easy to understand and helping students achieve their academic goals.'
      );
    }
    setIsEditing(!isEditing);
  };

  const handleSaveProfile = () => {
    if (editedUser) {
      // In a real app, this would send the data to an API
      // For now, we'll just show a success message
      toast({
        title: "Profile updated!",
        description: "Your profile has been successfully updated."
      });
      setIsEditing(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempImage(reader.result as string);
        if (editedUser) {
          setEditedUser({
            ...editedUser,
            profileImage: reader.result as string
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const displayImage = tempImage || editedUser?.profileImage || "https://i.pravatar.cc/150?img=8";

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FFDEE2] dark:bg-[#1A202C] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <Card className="shadow-lg border-2 border-amber-300 bg-[#FDE1D3]/80 dark:bg-gray-800">
              <CardHeader className="flex flex-col md:flex-row md:items-center gap-6 pb-2">
                <div className="relative">
                  <Avatar className="h-24 w-24 rounded-full border-4 border-amber-300">
                    <img 
                      src={displayImage} 
                      alt={editedUser?.name || 'Profile'} 
                      className="h-full w-full object-cover rounded-full"
                    />
                  </Avatar>
                  {isEditing && (
                    <label htmlFor="profile-image" className="absolute bottom-0 right-0 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md cursor-pointer">
                      <Camera className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                      <input 
                        type="file" 
                        id="profile-image" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={handleImageChange} 
                      />
                    </label>
                  )}
                </div>
                <div className="space-y-1 flex-1">
                  {isEditing ? (
                    <Input 
                      value={editedUser?.name} 
                      onChange={(e) => setEditedUser(editedUser ? {...editedUser, name: e.target.value} : null)}
                      className="text-2xl font-bold border-amber-300 bg-white/90 dark:bg-gray-900"
                    />
                  ) : (
                    <CardTitle className="text-3xl font-bold text-[#2D3A3A] dark:text-white">
                      {editedUser?.name}
                    </CardTitle>
                  )}
                  <CardDescription className="text-lg text-[#2D3A3A] dark:text-gray-300">
                    {editedUser?.role === 'student' ? 'Student' : 'Tutor'}
                  </CardDescription>
                  <p className="text-[#2D3A3A] dark:text-gray-300">{editedUser?.email}</p>
                </div>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="self-start" 
                  onClick={handleEditToggle}
                >
                  {isEditing ? <X className="h-4 w-4" /> : <Pencil className="h-4 w-4" />}
                </Button>
              </CardHeader>
              
              <CardContent className="pt-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow flex items-center gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                      <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-200" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#2D3A3A] dark:text-white">Courses</h3>
                      <p className="text-gray-500 dark:text-gray-300">{editedUser?.role === 'student' ? '4 Enrolled' : '3 Teaching'}</p>
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
                  {isEditing ? (
                    <Textarea
                      value={aboutMe}
                      onChange={(e) => setAboutMe(e.target.value)}
                      className="w-full h-32 border-amber-300 bg-white/90 dark:bg-gray-900"
                      placeholder="Tell us about yourself..."
                    />
                  ) : (
                    <p className="text-gray-600 dark:text-gray-300">
                      {aboutMe}
                    </p>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-end gap-4 pt-4">
                {isEditing ? (
                  <Button variant="default" className="bg-green-600 hover:bg-green-700" onClick={handleSaveProfile}>
                    <Check className="h-4 w-4 mr-2" /> Save Changes
                  </Button>
                ) : (
                  <>
                    <Button variant="outline" onClick={() => navigate('/')}>
                      Back to Home
                    </Button>
                    <Button variant="destructive" onClick={() => {
                      logout();
                      navigate('/login');
                    }}>
                      Logout
                    </Button>
                  </>
                )}
              </CardFooter>
            </Card>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
