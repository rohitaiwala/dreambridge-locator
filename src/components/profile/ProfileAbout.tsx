
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
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold text-[#2D3A3A] dark:text-white mb-4">
        {isEditing ? "Edit About Me" : "About Me"}
      </h3>
      {isEditing ? (
        <Textarea
          value={aboutMe}
          onChange={(e) => setAboutMe(e.target.value)}
          className="w-full h-32 border-amber-300 bg-white/90 dark:bg-gray-900"
          placeholder="Tell us about yourself..."
        />
      ) : (
        <p className="text-gray-700 dark:text-gray-300">{aboutMe}</p>
      )}
    </div>
  );
};

export default ProfileAbout;
