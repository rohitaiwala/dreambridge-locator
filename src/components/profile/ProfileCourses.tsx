import React from "react";
import { User } from "@/contexts/AuthContext";
import { ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
interface ProfileCoursesProps {
  user: User | null;
  isEditing?: boolean;
}
const ProfileCourses: React.FC<ProfileCoursesProps> = ({
  user,
  isEditing = false
}) => {
  // Course data based on user role
  const [courses, setCourses] = React.useState(user?.role === "student" ? [{
    id: 1,
    name: "Matematika",
    startDate: "1 Maret 2023",
    endDate: "5 Mei 2023"
  }, {
    id: 2,
    name: "Bahasa Jepang",
    startDate: "14 Maret 2023",
    endDate: "16 Juni 2023"
  }, {
    id: 3,
    name: "Bahasa Inggris",
    startDate: "8 Februari 2023",
    endDate: "6 April 2023"
  }] : [{
    id: 1,
    name: "Aljabar Linear",
    startDate: "5 Maret 2023",
    endDate: "20 Mei 2023"
  }, {
    id: 2,
    name: "Kalkulus",
    startDate: "10 Maret 2023",
    endDate: "15 Juni 2023"
  }, {
    id: 3,
    name: "Statistika",
    startDate: "12 Februari 2023",
    endDate: "10 April 2023"
  }]);
  return;
};
export default ProfileCourses;