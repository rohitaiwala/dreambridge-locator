import React from "react";
import { BookOpen, MessageCircle, CalendarClock } from "lucide-react";
import { User } from "@/contexts/AuthContext";
import { Input } from "@/components/ui/input";
interface ProfileStatsProps {
  user: User | null;
  isEditing?: boolean;
}
const ProfileStats: React.FC<ProfileStatsProps> = ({
  user,
  isEditing = false
}) => {
  // Default values for stats that could be editable
  const [courses, setCourses] = React.useState(user?.role === "student" ? "4 Enrolled" : "3 Teaching");
  const [messages, setMessages] = React.useState("12 Unread");
  const [upcoming, setUpcoming] = React.useState("2 Sessions");
  return;
};
export default ProfileStats;