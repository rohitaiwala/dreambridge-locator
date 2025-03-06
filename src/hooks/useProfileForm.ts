
import { useState } from "react";
import { User, useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

export const useProfileForm = () => {
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

  return {
    user,
    editedUser,
    setEditedUser,
    isEditing,
    aboutMe,
    setAboutMe,
    handleEditToggle,
    handleSaveProfile,
    handleImageChange,
    displayImage,
    navigate,
    logout
  };
};
