
import React from "react";
import { Textarea } from "@/components/ui/textarea";

interface ProfileAboutProps {
  isEditing: boolean;
  aboutMe: string;
  setAboutMe: React.Dispatch<React.SetStateAction<string>>;
}

const ProfileAbout: React.FC<ProfileAboutProps> = ({
  isEditing,
  aboutMe,
  setAboutMe,
}) => {
  // No need to display this when not editing - we're using ProfileBio instead
  if (!isEditing) return null;
  
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold text-[#2D3A3A] dark:text-white mb-4">
        Edit About Me
      </h3>
      <Textarea
        value={aboutMe}
        onChange={(e) => setAboutMe(e.target.value)}
        className="w-full h-32 border-amber-300 bg-white/90 dark:bg-gray-900"
        placeholder="Tell us about yourself..."
      />
    </div>
  );
};

export default ProfileAbout;
