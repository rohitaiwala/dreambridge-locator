
import React, { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import { CardTitle, CardDescription } from "@/components/ui/card";
import { User } from "@/contexts/AuthContext";

interface ProfileHeaderProps {
  isEditing: boolean;
  editedUser: User | null;
  displayImage: string;
  setEditedUser: React.Dispatch<React.SetStateAction<User | null>>;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEdit: () => void;
  isEditingHeader: boolean;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  isEditing,
  editedUser,
  displayImage,
  setEditedUser,
  handleImageChange,
  onEdit,
  isEditingHeader,
}) => {
  return (
    <div className="flex flex-col items-center text-center gap-4 pb-4">
      <div className="relative">
        <Avatar className="h-32 w-32 rounded-full border-4 border-amber-300 mx-auto">
          <img
            src={displayImage}
            alt={editedUser?.name || "Profile"}
            className="h-full w-full object-cover rounded-full"
          />
        </Avatar>
        {isEditingHeader && (
          <label
            htmlFor="profile-image"
            className="absolute bottom-0 right-0 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md cursor-pointer"
          >
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
      
      <div className="space-y-2 w-full max-w-md">
        {isEditingHeader ? (
          <Input
            value={editedUser?.name}
            onChange={(e) =>
              setEditedUser(
                editedUser ? { ...editedUser, name: e.target.value } : null
              )
            }
            className="text-2xl font-bold border-amber-300 bg-white/90 dark:bg-gray-900 text-center"
          />
        ) : (
          <CardTitle className="text-3xl font-bold text-[#2D3A3A] dark:text-white">
            {editedUser?.name}
          </CardTitle>
        )}
        <CardDescription className="text-lg text-[#2D3A3A] dark:text-gray-300">
          {editedUser?.role === "student" ? "Student" : "Tutor"}
        </CardDescription>
        <p className="text-[#2D3A3A] dark:text-gray-300">{editedUser?.email}</p>
      </div>
      
      <Button
        variant="outline"
        size="sm"
        className="mt-2"
        onClick={onEdit}
      >
        {isEditingHeader ? "Save" : "Edit Profile"}
      </Button>
    </div>
  );
};

export default ProfileHeader;
