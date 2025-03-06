
import React from "react";
import { User } from "@/contexts/AuthContext";

interface ProfileTeachingHistoryProps {
  user: User | null;
}

const ProfileTeachingHistory: React.FC<ProfileTeachingHistoryProps> = ({ user }) => {
  // Only show this for tutors
  if (user?.role !== "tutor") return null;

  const tutors = [
    { id: 1, name: "Rahman B", img: "https://i.pravatar.cc/150?img=11" },
    { id: 2, name: "Diana L", img: "https://i.pravatar.cc/150?img=5" },
    { id: 3, name: "Bastian V", img: "https://i.pravatar.cc/150?img=13" },
    { id: 4, name: "Ismail R", img: "https://i.pravatar.cc/150?img=17" }
  ];

  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
      <div className="flex justify-between mb-4">
        <h3 className="text-xl font-bold text-[#2D3A3A] dark:text-white">
          Riwayat Pengajar
        </h3>
        <button className="text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
        Menyelesaikan pelatihan dengan 8 pengajar
      </p>
      
      <div className="flex flex-wrap gap-4 justify-center">
        {tutors.map((tutor) => (
          <div key={tutor.id} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-300">
              <img src={tutor.img} alt={tutor.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-xs mt-1 text-center text-gray-700 dark:text-gray-300">{tutor.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileTeachingHistory;
