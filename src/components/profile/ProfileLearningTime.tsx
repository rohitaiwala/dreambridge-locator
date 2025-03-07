
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

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
      <h3 className="text-lg font-semibold mb-4">Learning Time</h3>
      
      <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <div className="flex items-center">
          <Clock className="h-10 w-10 text-blue-500 mr-3" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{timeMetrics.label}</p>
            <div className="flex items-baseline">
              {isEditing ? (
                <Input
                  type="number"
                  value={timeMetrics.total}
                  onChange={(e) => setTimeMetrics({
                    ...timeMetrics,
                    total: parseInt(e.target.value) || 0
                  })}
                  className="w-20 mr-2"
                />
              ) : (
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{timeMetrics.total}</span>
              )}
              <span className="ml-1 text-gray-500 dark:text-gray-400">{timeMetrics.unit}</span>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Calendar className="h-8 w-8 text-blue-500 mx-auto mb-1" />
          <p className="text-xs text-gray-500 dark:text-gray-400">Last week</p>
          <p className="font-semibold">+12 {timeMetrics.unit}</p>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-gray-50 dark:bg-gray-700/30 p-3 rounded-lg">
            <p className="text-xs text-gray-500 dark:text-gray-400">Daily Average</p>
            <p className="text-lg font-semibold">2.5 {timeMetrics.unit}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/30 p-3 rounded-lg">
            <p className="text-xs text-gray-500 dark:text-gray-400">Weekly Goal</p>
            <p className="text-lg font-semibold">15 {timeMetrics.unit}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/30 p-3 rounded-lg">
            <p className="text-xs text-gray-500 dark:text-gray-400">Consistency</p>
            <p className="text-lg font-semibold">86%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLearningTime;
