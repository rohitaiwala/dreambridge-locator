
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface ProfileActionsProps {
  isEditing: boolean;
  handleSaveProfile: () => void;
}

const ProfileActions: React.FC<ProfileActionsProps> = ({
  isEditing,
  handleSaveProfile,
}) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <div className="flex justify-end gap-4 pt-4">
      {isEditing ? (
        <Button 
          variant="default" 
          className="bg-green-600 hover:bg-green-700" 
          onClick={handleSaveProfile}
        >
          <Check className="h-4 w-4 mr-2" /> Save Changes
        </Button>
      ) : (
        <>
          <Button variant="outline" onClick={() => navigate('/')}>
            Back to Home
          </Button>
          <Button variant="destructive" onClick={() => {
            logout();
            navigate('/login');
          }}>
            Logout
          </Button>
        </>
      )}
    </div>
  );
};

export default ProfileActions;
