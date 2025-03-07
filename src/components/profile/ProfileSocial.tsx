import React from "react";
import { User } from "@/contexts/AuthContext";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Linkedin, Github } from "lucide-react";

interface ProfileSocialProps {
  user: User | null;
  isEditing: boolean;
  editedUser: User | null;
  setEditedUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const ProfileSocial: React.FC<ProfileSocialProps> = ({
  user,
  isEditing,
  editedUser,
  setEditedUser,
}) => {
  // Default social links
  const [socialLinks, setSocialLinks] = React.useState({
    facebook: "facebook.com/janetutor",
    twitter: "twitter.com/janetutor",
    instagram: "instagram.com/janetutor",
    linkedin: "linkedin.com/in/janetutor",
    github: "github.com/janetutor"
  });

  const handleSocialChange = (platform: keyof typeof socialLinks, value: string) => {
    setSocialLinks(prev => ({
      ...prev,
      [platform]: value
    }));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Facebook className="h-5 w-5 text-blue-600" />
        <div className="flex-1">
          {isEditing ? (
            <Input
              value={socialLinks.facebook}
              onChange={(e) => handleSocialChange('facebook', e.target.value)}
              className="border-amber-300 bg-white/90 dark:bg-gray-900"
              placeholder="Facebook URL"
            />
          ) : (
            <a 
              href={`https://${socialLinks.facebook}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              {socialLinks.facebook}
            </a>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Twitter className="h-5 w-5 text-sky-500" />
        <div className="flex-1">
          {isEditing ? (
            <Input
              value={socialLinks.twitter}
              onChange={(e) => handleSocialChange('twitter', e.target.value)}
              className="border-amber-300 bg-white/90 dark:bg-gray-900"
              placeholder="Twitter URL"
            />
          ) : (
            <a 
              href={`https://${socialLinks.twitter}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sky-500 hover:underline dark:text-sky-400"
            >
              {socialLinks.twitter}
            </a>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Instagram className="h-5 w-5 text-pink-600" />
        <div className="flex-1">
          {isEditing ? (
            <Input
              value={socialLinks.instagram}
              onChange={(e) => handleSocialChange('instagram', e.target.value)}
              className="border-amber-300 bg-white/90 dark:bg-gray-900"
              placeholder="Instagram URL"
            />
          ) : (
            <a 
              href={`https://${socialLinks.instagram}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-600 hover:underline dark:text-pink-400"
            >
              {socialLinks.instagram}
            </a>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Linkedin className="h-5 w-5 text-blue-800" />
        <div className="flex-1">
          {isEditing ? (
            <Input
              value={socialLinks.linkedin}
              onChange={(e) => handleSocialChange('linkedin', e.target.value)}
              className="border-amber-300 bg-white/90 dark:bg-gray-900"
              placeholder="LinkedIn URL"
            />
          ) : (
            <a 
              href={`https://${socialLinks.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-800 hover:underline dark:text-blue-300"
            >
              {socialLinks.linkedin}
            </a>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Github className="h-5 w-5 text-gray-800 dark:text-gray-200" />
        <div className="flex-1">
          {isEditing ? (
            <Input
              value={socialLinks.github}
              onChange={(e) => handleSocialChange('github', e.target.value)}
              className="border-amber-300 bg-white/90 dark:bg-gray-900"
              placeholder="GitHub URL"
            />
          ) : (
            <a 
              href={`https://${socialLinks.github}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-800 hover:underline dark:text-gray-200"
            >
              {socialLinks.github}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSocial;
