
import React from "react";
import { User } from "@/contexts/AuthContext";
import { Clock, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ProfileLearningTimeProps {
  user: User | null;
  isEditing?: boolean;
}

const ProfileLearningTime: React.FC<ProfileLearningTimeProps> = ({ user, isEditing = false }) => {
  // Different metrics based on user role
  const [timeMetrics, setTimeMetrics] = React.useState(
    user?.role === "student" 
      ? { total: 180, unit: "jam", label: "Total Waktu Belajar" }
      : { total: 240, unit: "jam", label: "Total Waktu Mengajar" }
  );

  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
      <div className="flex justify-between mb-4">
        <h3 className="text-xl font-bold text-[#2D3A3A] dark:text-white">
          {user?.role === "student" ? "Waktu Belajar" : "Waktu Mengajar"}
        </h3>
        <button className="text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
        {user?.role === "student" 
          ? "Waktu yang sudah dihabiskan untuk belajar"
          : "Waktu yang sudah dihabiskan untuk mengajar"}
      </p>
      
      <div className="flex justify-center">
        <div className="relative w-40 h-40">
          {/* Circle progress background */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="#edf2f7" 
              strokeWidth="10"
            />
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="#F97316" 
              strokeWidth="10"
              strokeDasharray="283"
              strokeDashoffset="70"
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xs text-gray-500 dark:text-gray-400">Total</span>
            {isEditing ? (
              <Input
                type="number"
                value={timeMetrics.total}
                onChange={(e) => setTimeMetrics({...timeMetrics, total: parseInt(e.target.value) || 0})}
                className="text-center text-xl w-20 h-8 border-amber-300 bg-white/90 dark:bg-gray-900"
              />
            ) : (
              <span className="text-3xl font-bold">{timeMetrics.total}</span>
            )}
            <span className="text-sm text-gray-500 dark:text-gray-400">{timeMetrics.unit}</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-around mt-4">
        <div className="flex items-center text-sm text-gray-500">
          <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
          <span>Tatap Muka</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
          <span>Daring</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileLearningTime;
