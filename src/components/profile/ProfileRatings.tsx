
import React from "react";
import { User } from "@/contexts/AuthContext";
import { Star, MessageSquare } from "lucide-react";

interface ProfileRatingsProps {
  user: User | null;
  isEditing: boolean;
}

const ProfileRatings: React.FC<ProfileRatingsProps> = ({
  user,
  isEditing
}) => {
  const ratings = [
    {
      id: 1,
      studentName: "Alex T.",
      studentImage: "https://i.pravatar.cc/150?img=33",
      rating: 5,
      comment: "Excellent tutor! Very patient and explains concepts clearly.",
      date: "May 15, 2023"
    },
    {
      id: 2,
      studentName: "Sarah K.",
      studentImage: "https://i.pravatar.cc/150?img=29",
      rating: 4,
      comment: "Great teaching methods, helped me improve my grade significantly.",
      date: "April 3, 2023"
    },
    {
      id: 3,
      studentName: "Michael J.",
      studentImage: "https://i.pravatar.cc/150?img=53",
      rating: 5,
      comment: "Amazing tutor who goes above and beyond. Really connects the material to real-world applications.",
      date: "March 22, 2023"
    }
  ];

  // Only show for tutors
  if (user?.role !== "tutor") return null;

  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold text-[#2D3A3A] dark:text-white mb-4">
        Student Ratings & Reviews
      </h3>
      
      <div className="space-y-6">
        {ratings.map((rating) => (
          <div key={rating.id} className="border-b border-gray-200 dark:border-gray-600 pb-4 last:border-0 last:pb-0">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img 
                    src={rating.studentImage} 
                    alt={rating.studentName} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium text-[#2D3A3A] dark:text-white">
                  {rating.studentName}
                </span>
              </div>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-4 w-4 ${
                      i < rating.rating 
                        ? "text-yellow-400 fill-yellow-400" 
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                  {rating.date}
                </span>
              </div>
            </div>
            <div className="flex items-start gap-2 ml-12">
              <MessageSquare className="h-4 w-4 text-gray-400 mt-1" />
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {rating.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileRatings;
