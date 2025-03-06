
import React from "react";
import { BookOpen, MessageCircle, CalendarClock } from "lucide-react";
import { User } from "@/contexts/AuthContext";
import { Input } from "@/components/ui/input";

interface ProfileStatsProps {
  user: User | null;
  isEditing?: boolean;
}

const ProfileStats: React.FC<ProfileStatsProps> = ({ user, isEditing = false }) => {
  // Default values for stats that could be editable
  const [courses, setCourses] = React.useState(user?.role === "student" ? "4 Enrolled" : "3 Teaching");
  const [messages, setMessages] = React.useState("12 Unread");
  const [upcoming, setUpcoming] = React.useState("2 Sessions");

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow flex items-center gap-3">
        <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
          <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-200" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-[#2D3A3A] dark:text-white">Courses</h3>
          {isEditing ? (
            <Input 
              value={courses}
              onChange={(e) => setCourses(e.target.value)}
              className="text-sm h-7 border-amber-300 bg-white/90 dark:bg-gray-900"
            />
          ) : (
            <p className="text-gray-500 dark:text-gray-300">{courses}</p>
          )}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow flex items-center gap-3">
        <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
          <MessageCircle className="h-6 w-6 text-green-600 dark:text-green-200" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-[#2D3A3A] dark:text-white">Messages</h3>
          {isEditing ? (
            <Input 
              value={messages}
              onChange={(e) => setMessages(e.target.value)}
              className="text-sm h-7 border-amber-300 bg-white/90 dark:bg-gray-900"
            />
          ) : (
            <p className="text-gray-500 dark:text-gray-300">{messages}</p>
          )}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow flex items-center gap-3">
        <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
          <CalendarClock className="h-6 w-6 text-purple-600 dark:text-purple-200" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-[#2D3A3A] dark:text-white">Upcoming</h3>
          {isEditing ? (
            <Input 
              value={upcoming}
              onChange={(e) => setUpcoming(e.target.value)}
              className="text-sm h-7 border-amber-300 bg-white/90 dark:bg-gray-900"
            />
          ) : (
            <p className="text-gray-500 dark:text-gray-300">{upcoming}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileStats;
