import React from "react";
import { User } from "@/contexts/AuthContext";
import { Clock, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
interface ProfileLearningTimeProps {
  user: User | null;
  isEditing?: boolean;
}
const ProfileLearningTime: React.FC<ProfileLearningTimeProps> = ({
  user,
  isEditing = false
}) => {
  // Different metrics based on user role
  const [timeMetrics, setTimeMetrics] = React.useState(user?.role === "student" ? {
    total: 180,
    unit: "jam",
    label: "Total Waktu Belajar"
  } : {
    total: 240,
    unit: "jam",
    label: "Total Waktu Mengajar"
  });
  return;
};
export default ProfileLearningTime;