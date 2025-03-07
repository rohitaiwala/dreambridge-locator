
import React from "react";
import { User } from "@/contexts/AuthContext";
import { Input } from "@/components/ui/input";
import { Mail, Phone, Shield } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ProfileContactProps {
  user: User | null;
  isEditing: boolean;
  editedUser: User | null;
  setEditedUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const ProfileContact: React.FC<ProfileContactProps> = ({
  user,
  isEditing,
  editedUser,
  setEditedUser,
}) => {
  // Default contact details
  const [phone, setPhone] = React.useState("(+62) 813-5555-7890");
  const [privacy, setPrivacy] = React.useState("public");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handlePrivacyChange = (value: string) => {
    setPrivacy(value);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Mail className="h-5 w-5 text-blue-500" />
        <div className="flex-1">
          <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
          {isEditing ? (
            <Input
              value={editedUser?.email}
              onChange={(e) => {
                if (editedUser) {
                  setEditedUser({
                    ...editedUser,
                    email: e.target.value,
                  });
                }
              }}
              className="mt-1 border-amber-300 bg-white/90 dark:bg-gray-900"
            />
          ) : (
            <p className="text-gray-700 dark:text-gray-300">{editedUser?.email}</p>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Phone className="h-5 w-5 text-green-500" />
        <div className="flex-1">
          <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
          {isEditing ? (
            <Input
              value={phone}
              onChange={handlePhoneChange}
              className="mt-1 border-amber-300 bg-white/90 dark:bg-gray-900"
            />
          ) : (
            <p className="text-gray-700 dark:text-gray-300">{phone}</p>
          )}
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <Shield className="h-5 w-5 text-purple-500 mt-1" />
        <div className="flex-1">
          <p className="text-sm text-gray-500 dark:text-gray-400">Privacy Setting</p>
          {isEditing ? (
            <Select value={privacy} onValueChange={handlePrivacyChange}>
              <SelectTrigger className="w-full mt-1 border-amber-300 bg-white/90 dark:bg-gray-900">
                <SelectValue placeholder="Select privacy level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">Public</SelectItem>
                <SelectItem value="contacts">Contacts Only</SelectItem>
                <SelectItem value="private">Private</SelectItem>
              </SelectContent>
            </Select>
          ) : (
            <p className="text-gray-700 dark:text-gray-300 capitalize">{privacy}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileContact;
