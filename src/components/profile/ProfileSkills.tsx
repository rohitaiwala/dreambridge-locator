import React from "react";
import { Progress } from "@/components/ui/progress";
import { User } from "@/contexts/AuthContext";
import { Input } from "@/components/ui/input";
interface ProfileSkillsProps {
  user: User | null;
  isEditing?: boolean;
}
const ProfileSkills: React.FC<ProfileSkillsProps> = ({
  user,
  isEditing = false
}) => {
  // Different skills based on user role
  const [skills, setSkills] = React.useState(user?.role === "student" ? [{
    name: "Disiplin",
    value: 85
  }, {
    name: "Kreatif",
    value: 75
  }, {
    name: "Komunikasi",
    value: 90
  }, {
    name: "Berpikir Kritis",
    value: 80
  }, {
    name: "Kerjasama",
    value: 88
  }] : [{
    name: "Pemecahan Masalah",
    value: 90
  }, {
    name: "Komunikasi",
    value: 95
  }, {
    name: "Kesabaran",
    value: 85
  }, {
    name: "Kreativitas",
    value: 80
  }, {
    name: "Adaptasi",
    value: 87
  }]);
  return;
};

// Helper to get color based on skill value
const getColorForValue = (value: number): string => {
  if (value >= 90) return '#10B981'; // Green
  if (value >= 80) return '#3B82F6'; // Blue
  if (value >= 70) return '#F59E0B'; // Yellow
  if (value >= 60) return '#F97316'; // Orange
  return '#EF4444'; // Red
};
export default ProfileSkills;