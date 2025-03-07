import React from "react";
import { BookOpen, MessageCircle, CalendarClock, Trophy, Clock } from "lucide-react";
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
  const [streak, setStreak] = React.useState("5 Days");
  const [projects, setProjects] = React.useState(user?.role === "student" ? "3 Completed" : "7 Hosted");
  return <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold text-[#2D3A3A] dark:text-white mb-4">
        Activity Stats
      </h3>
      
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {/* Streak Stat */}
        <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm flex items-center gap-3">
          <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
            <Trophy className="h-6 w-6 text-blue-600 dark:text-blue-200" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-[#2D3A3A] dark:text-white">Current Streak</h3>
            {isEditing ? <Input value={streak} onChange={e => setStreak(e.target.value)} className="text-sm h-7 border-amber-300 bg-white/90 dark:bg-gray-900" /> : <p className="text-gray-600 dark:text-gray-300">{streak}</p>}
          </div>
        </div>

        {/* Projects/Tutors Stat */}
        <div className="bg-orange-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm flex items-center gap-3">
          <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-full">
            <Clock className="h-6 w-6 text-orange-600 dark:text-orange-200" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-[#2D3A3A] dark:text-white">
              {user?.role === "student" ? "Projects" : "Tutoring Sessions"}
            </h3>
            {isEditing ? <Input value={projects} onChange={e => setProjects(e.target.value)} className="text-sm h-7 border-amber-300 bg-white/90 dark:bg-gray-900" /> : <p className="text-gray-600 dark:text-gray-300">{projects}</p>}
          </div>
        </div>
      </div>

      {/* Additional statistics visualization - Progress bar for completed activities */}
      <div className="mt-6">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {user?.role === "student" ? "Learning Progress" : "Teaching Hours Completed"}
          </span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">70%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 h-2.5 rounded-full" style={{
          width: '70%'
        }}></div>
        </div>
      </div>
    </div>;
};
export default ProfileStats;