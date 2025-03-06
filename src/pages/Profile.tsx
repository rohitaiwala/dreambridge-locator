
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useProfileForm } from "@/hooks/useProfileForm";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileStats from "@/components/profile/ProfileStats";
import ProfileAbout from "@/components/profile/ProfileAbout";
import ProfileActions from "@/components/profile/ProfileActions";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    editedUser,
    setEditedUser,
    isEditing,
    aboutMe,
    setAboutMe,
    handleEditToggle,
    handleSaveProfile,
    handleImageChange,
    displayImage
  } = useProfileForm();

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
              <CardHeader>
                <ProfileHeader
                  isEditing={isEditing}
                  editedUser={editedUser}
                  displayImage={displayImage}
                  handleEditToggle={handleEditToggle}
                  setEditedUser={setEditedUser}
                  handleImageChange={handleImageChange}
                />
              </CardHeader>
              
              <CardContent className="pt-6 space-y-6">
                <ProfileStats user={user} />
                <ProfileAbout 
                  isEditing={isEditing}
                  aboutMe={aboutMe}
                  setAboutMe={setAboutMe}
                />
              </CardContent>
              
              <CardFooter>
                <ProfileActions 
                  isEditing={isEditing}
                  handleSaveProfile={handleSaveProfile}
                />
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
