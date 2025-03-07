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
import { Button } from "@/components/ui/button";
import { Pencil, Check, X } from "lucide-react";
import { useState } from "react";
const Profile = () => {
  const navigate = useNavigate();
  const {
    user
  } = useAuth();
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

  // Section-specific editing states
  const [isEditingHeader, setIsEditingHeader] = useState(false);
  const [isEditingAbout, setIsEditingAbout] = useState(false);
  const [isEditingStats, setIsEditingStats] = useState(false);
  const [isEditingLocation, setIsEditingLocation] = useState(false);
  const [isEditingSocial, setIsEditingSocial] = useState(false);
  const [isEditingSkills, setIsEditingSkills] = useState(false);
  const [isEditingLearningTime, setIsEditingLearningTime] = useState(false);
  const [isEditingCourses, setIsEditingCourses] = useState(false);
  const [isEditingTeachingHistory, setIsEditingTeachingHistory] = useState(false);
  const [isEditingContact, setIsEditingContact] = useState(false);
  if (!user) {
    navigate("/login");
    return null;
  }
  const saveAll = () => {
    // Reset all editing states
    setIsEditingHeader(false);
    setIsEditingAbout(false);
    setIsEditingStats(false);
    setIsEditingLocation(false);
    setIsEditingSocial(false);
    setIsEditingSkills(false);
    setIsEditingLearningTime(false);
    setIsEditingCourses(false);
    setIsEditingTeachingHistory(false);
    setIsEditingContact(false);

    // Save changes
    handleSaveProfile();
  };
  const renderSectionHeader = (title: string, isEditingSection: boolean, setIsEditingSection: (value: boolean) => void) => <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-bold text-[#2D3A3A] dark:text-white">{title}</h3>
      <Button variant="ghost" size="icon" onClick={() => setIsEditingSection(!isEditingSection)} className="h-8 w-8">
        {isEditingSection ? <X className="h-4 w-4" /> : <Pencil className="h-4 w-4" />}
      </Button>
    </div>;
  return <>
      <Navbar />
      <div className="min-h-screen bg-[#FFDEE2] dark:bg-[#1A202C] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Card className="shadow-lg border-2 border-amber-300 bg-[#FDE1D3]/80 dark:bg-gray-800 mb-6">
              <CardHeader>
                <ProfileHeader isEditing={isEditing} editedUser={editedUser} displayImage={displayImage} setEditedUser={setEditedUser} handleImageChange={handleImageChange} onEdit={() => setIsEditingHeader(!isEditingHeader)} isEditingHeader={isEditingHeader} />
              </CardHeader>
              
              <CardContent className="pt-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow py-[69px]">
                      {renderSectionHeader("About Me", isEditingAbout, setIsEditingAbout)}
                      <ProfileAbout isEditing={isEditingAbout} aboutMe={aboutMe} setAboutMe={setAboutMe} />
                    </div>
                  </div>
                  <div>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                      {renderSectionHeader("Contact Details", isEditingContact, setIsEditingContact)}
                      <ProfileContact user={user} isEditing={isEditingContact} editedUser={editedUser} setEditedUser={setEditedUser} />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                  {renderSectionHeader("Activity Stats", isEditingStats, setIsEditingStats)}
                  <ProfileStats user={user} isEditing={isEditingStats} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                    {renderSectionHeader("Location & Education", isEditingLocation, setIsEditingLocation)}
                    <ProfileLocation user={user} isEditing={isEditingLocation} editedUser={editedUser} setEditedUser={setEditedUser} />
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                    {renderSectionHeader("Social Media", isEditingSocial, setIsEditingSocial)}
                    <ProfileSocial user={user} isEditing={isEditingSocial} editedUser={editedUser} setEditedUser={setEditedUser} />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                    {renderSectionHeader("Skills & Proficiency", isEditingSkills, setIsEditingSkills)}
                    <ProfileSkills user={user} isEditing={isEditingSkills} />
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                    {renderSectionHeader("Learning Time", isEditingLearningTime, setIsEditingLearningTime)}
                    <ProfileLearningTime user={user} isEditing={isEditingLearningTime} />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                    {renderSectionHeader(user?.role === "student" ? "Enrolled Courses" : "Teaching Courses", isEditingCourses, setIsEditingCourses)}
                    <ProfileCourses user={user} isEditing={isEditingCourses} />
                  </div>
                  <ProfileRewards user={user} isEditing={false} />
                </div>
                
                {user?.role === "tutor" && <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                    {renderSectionHeader("Riwayat Pengajar", isEditingTeachingHistory, setIsEditingTeachingHistory)}
                    <ProfileTeachingHistory user={user} isEditing={isEditingTeachingHistory} />
                  </div>}
                
                {user.role === 'tutor' && <ProfileRatings user={user} isEditing={false} />}
              </CardContent>
              
              <CardFooter>
                <div className="flex justify-end gap-4 pt-4">
                  {isEditingHeader || isEditingAbout || isEditingStats || isEditingLocation || isEditingSocial || isEditingSkills || isEditingLearningTime || isEditingCourses || isEditingTeachingHistory || isEditingContact ? <Button variant="default" className="bg-green-600 hover:bg-green-700" onClick={saveAll}>
                      <Check className="h-4 w-4 mr-2" /> Save All Changes
                    </Button> : <>
                      <Button variant="outline" onClick={() => navigate('/')}>
                        Back to Home
                      </Button>
                      <Button variant="destructive" onClick={() => {
                    user.logout();
                    navigate('/login');
                  }}>
                        Logout
                      </Button>
                    </>}
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>;
};
export default Profile;