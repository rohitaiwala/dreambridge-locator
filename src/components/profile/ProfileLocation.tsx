
import React from "react";
import { User } from "@/contexts/AuthContext";
import { Input } from "@/components/ui/input";
import { MapPin, Building, GraduationCap } from "lucide-react";

interface ProfileLocationProps {
  user: User | null;
  isEditing: boolean;
  editedUser: User | null;
  setEditedUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const ProfileLocation: React.FC<ProfileLocationProps> = ({
  user,
  isEditing,
  editedUser,
  setEditedUser,
}) => {
  // Default location details
  const [location, setLocation] = React.useState({
    address: "123 Education Street",
    city: "Learning City",
    educational: user?.role === "student" ? "High School Grade 11" : "University of Knowledge"
  });

  const handleLocationChange = (field: keyof typeof location, value: string) => {
    setLocation(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold text-[#2D3A3A] dark:text-white mb-4">
        Location & Education
      </h3>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-red-500" />
          <div className="flex-1">
            <p className="text-sm text-gray-500 dark:text-gray-400">Address</p>
            {isEditing ? (
              <Input
                value={location.address}
                onChange={(e) => handleLocationChange('address', e.target.value)}
                className="mt-1 border-amber-300 bg-white/90 dark:bg-gray-900"
              />
            ) : (
              <p className="text-gray-700 dark:text-gray-300">{location.address}</p>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Building className="h-5 w-5 text-amber-500" />
          <div className="flex-1">
            <p className="text-sm text-gray-500 dark:text-gray-400">City</p>
            {isEditing ? (
              <Input
                value={location.city}
                onChange={(e) => handleLocationChange('city', e.target.value)}
                className="mt-1 border-amber-300 bg-white/90 dark:bg-gray-900"
              />
            ) : (
              <p className="text-gray-700 dark:text-gray-300">{location.city}</p>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <GraduationCap className="h-5 w-5 text-indigo-500" />
          <div className="flex-1">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {user?.role === "student" ? "Current Education" : "Educational Background"}
            </p>
            {isEditing ? (
              <Input
                value={location.educational}
                onChange={(e) => handleLocationChange('educational', e.target.value)}
                className="mt-1 border-amber-300 bg-white/90 dark:bg-gray-900"
              />
            ) : (
              <p className="text-gray-700 dark:text-gray-300">{location.educational}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLocation;
