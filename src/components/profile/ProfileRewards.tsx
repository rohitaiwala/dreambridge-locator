
import React from "react";
import { User } from "@/contexts/AuthContext";
import { Award, Star, Clock, BookOpen } from "lucide-react";

interface ProfileRewardsProps {
  user: User | null;
}

const ProfileRewards: React.FC<ProfileRewardsProps> = ({ user }) => {
  const rewardIcons = [
    { icon: <Award className="h-6 w-6 text-amber-500" />, achieved: true },
    { icon: <Star className="h-6 w-6 text-blue-500" />, achieved: true },
    { icon: <Clock className="h-6 w-6 text-green-500" />, achieved: true },
    { icon: <BookOpen className="h-6 w-6 text-purple-500" />, achieved: false }
  ];

  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
      <div className="flex justify-between mb-4">
        <h3 className="text-xl font-bold text-[#2D3A3A] dark:text-white">
          Reward
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
          ? "Reward yang didapatkan dari belajar"
          : "Reward yang didapatkan dari mengajar"}
      </p>
      
      <div className="grid grid-cols-4 gap-4">
        {rewardIcons.map((reward, index) => (
          <div 
            key={index} 
            className={`p-3 rounded-full flex items-center justify-center ${
              reward.achieved 
                ? "bg-amber-100 dark:bg-amber-900/30" 
                : "bg-gray-100 dark:bg-gray-800 opacity-40"
            }`}
          >
            {reward.icon}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-4 gap-4 mt-4">
        {rewardIcons.map((reward, index) => (
          <div 
            key={index} 
            className={`p-3 rounded-full flex items-center justify-center ${
              !reward.achieved 
                ? "bg-gray-100 dark:bg-gray-800 opacity-40" 
                : "bg-amber-100 dark:bg-amber-900/30"
            }`}
          >
            {reward.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileRewards;
