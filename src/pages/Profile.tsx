
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useProfileForm } from "@/hooks/useProfileForm";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileStats from "@/components/profile/ProfileStats";
import ProfileAbout from "@/components/profile/ProfileAbout";
import ProfileActions from "@/components/profile/ProfileActions";
import ProfileSkills from "@/components/profile/ProfileSkills";
import ProfileLearningTime from "@/components/profile/ProfileLearningTime";
import ProfileCourses from "@/components/profile/ProfileCourses";
import ProfileTeachingHistory from "@/components/profile/ProfileTeachingHistory";
import ProfileRewards from "@/components/profile/ProfileRewards";
import ProfileContact from "@/components/profile/ProfileContact";
import ProfileSocial from "@/components/profile/ProfileSocial";
import ProfileLocation from "@/components/profile/ProfileLocation";
import ProfileRatings from "@/components/profile/ProfileRatings";

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

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FFDEE2] dark:bg-[#1A202C] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Card className="shadow-lg border-2 border-amber-300 bg-[#FDE1D3]/80 dark:bg-gray-800 mb-6">
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <ProfileAbout 
                      isEditing={isEditing}
                      aboutMe={aboutMe}
                      setAboutMe={setAboutMe}
                    />
                  </div>
                  <div>
                    <ProfileContact 
                      user={user} 
                      isEditing={isEditing} 
                      editedUser={editedUser}
                      setEditedUser={setEditedUser}
                    />
                  </div>
                </div>
                
                <ProfileStats user={user} isEditing={isEditing} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ProfileLocation 
                    user={user} 
                    isEditing={isEditing}
                    editedUser={editedUser}
                    setEditedUser={setEditedUser}
                  />
                  <ProfileSocial 
                    user={user} 
                    isEditing={isEditing}
                    editedUser={editedUser}
                    setEditedUser={setEditedUser}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ProfileSkills user={user} isEditing={isEditing} />
                  <ProfileLearningTime user={user} isEditing={isEditing} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ProfileCourses user={user} isEditing={isEditing} />
                  <ProfileRewards user={user} isEditing={isEditing} />
                </div>
                
                <ProfileTeachingHistory user={user} isEditing={isEditing} />
                
                {user.role === 'tutor' && (
                  <ProfileRatings user={user} isEditing={isEditing} />
                )}
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
