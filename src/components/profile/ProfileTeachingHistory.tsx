
import React from "react";
import { User } from "@/contexts/AuthContext";
import { Input } from "@/components/ui/input";

interface ProfileTeachingHistoryProps {
  user: User | null;
  isEditing?: boolean;
}

const ProfileTeachingHistory: React.FC<ProfileTeachingHistoryProps> = ({ user, isEditing = false }) => {
  // Only show this for tutors
  if (user?.role !== "tutor") return null;

  const [tutors, setTutors] = React.useState([
    { id: 1, name: "Rahman B", img: "https://i.pravatar.cc/150?img=11" },
    { id: 2, name: "Diana L", img: "https://i.pravatar.cc/150?img=5" },
    { id: 3, name: "Bastian V", img: "https://i.pravatar.cc/150?img=13" },
    { id: 4, name: "Ismail R", img: "https://i.pravatar.cc/150?img=17" }
  ]);

  return (
    <>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
        Menyelesaikan pelatihan dengan {tutors.length} pengajar
      </p>
      
      <div className="flex flex-wrap gap-4 justify-center">
        {tutors.map((tutor, index) => (
          <div key={tutor.id} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-300">
              <img src={tutor.img} alt={tutor.name} className="w-full h-full object-cover" />
            </div>
            {isEditing ? (
              <Input
                value={tutor.name}
                onChange={(e) => {
                  const updatedTutors = [...tutors];
                  updatedTutors[index] = { ...tutor, name: e.target.value };
                  setTutors(updatedTutors);
                }}
                className="text-xs mt-1 text-center w-20 h-6 border-amber-300 bg-white/90 dark:bg-gray-900"
              />
            ) : (
              <span className="text-xs mt-1 text-center text-gray-700 dark:text-gray-300">{tutor.name}</span>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfileTeachingHistory;
