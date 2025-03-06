
import React, { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pencil, X, Camera } from "lucide-react";
import { CardTitle, CardDescription } from "@/components/ui/card";
import { User } from "@/contexts/AuthContext";

interface ProfileHeaderProps {
  isEditing: boolean;
  editedUser: User | null;
  displayImage: string;
  handleEditToggle: () => void;
  setEditedUser: React.Dispatch<React.SetStateAction<User | null>>;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  isEditing,
  editedUser,
  displayImage,
  handleEditToggle,
  setEditedUser,
  handleImageChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-6 pb-2">
      <div className="relative">
        <Avatar className="h-24 w-24 rounded-full border-4 border-amber-300">
          <img
            src={displayImage}
            alt={editedUser?.name || "Profile"}
            className="h-full w-full object-cover rounded-full"
          />
        </Avatar>
        {isEditing && (
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
      <div className="space-y-1 flex-1">
        {isEditing ? (
          <Input
            value={editedUser?.name}
            onChange={(e) =>
              setEditedUser(
                editedUser ? { ...editedUser, name: e.target.value } : null
              )
            }
            className="text-2xl font-bold border-amber-300 bg-white/90 dark:bg-gray-900"
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
        size="icon"
        className="self-start"
        onClick={handleEditToggle}
      >
        {isEditing ? <X className="h-4 w-4" /> : <Pencil className="h-4 w-4" />}
      </Button>
    </div>
  );
};

export default ProfileHeader;
