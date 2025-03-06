
import React from "react";
import { User } from "@/contexts/AuthContext";
import { ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ProfileCoursesProps {
  user: User | null;
  isEditing?: boolean;
}

const ProfileCourses: React.FC<ProfileCoursesProps> = ({ user, isEditing = false }) => {
  // Course data based on user role
  const [courses, setCourses] = React.useState(
    user?.role === "student" 
      ? [
          { id: 1, name: "Matematika", startDate: "1 Maret 2023", endDate: "5 Mei 2023" },
          { id: 2, name: "Bahasa Jepang", startDate: "14 Maret 2023", endDate: "16 Juni 2023" },
          { id: 3, name: "Bahasa Inggris", startDate: "8 Februari 2023", endDate: "6 April 2023" }
        ]
      : [
          { id: 1, name: "Aljabar Linear", startDate: "5 Maret 2023", endDate: "20 Mei 2023" },
          { id: 2, name: "Kalkulus", startDate: "10 Maret 2023", endDate: "15 Juni 2023" },
          { id: 3, name: "Statistika", startDate: "12 Februari 2023", endDate: "10 April 2023" }
        ]
  );

  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
      <div className="flex justify-between mb-4">
        <h3 className="text-xl font-bold text-[#2D3A3A] dark:text-white">
          Sedang Berlangsung
        </h3>
        <button className="text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
        {user?.role === "student" 
          ? "Sekarang, 3 kursus sedang aktif untuk Anda"
          : "Sekarang, 3 kelas sedang Anda ajar"}
      </p>
      
      <div className="space-y-2">
        {courses.map((course, index) => (
          <div key={course.id} className="border-l-4 border-blue-500 bg-gray-50 dark:bg-gray-800 p-3 rounded-r hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <div>
                {isEditing ? (
                  <Input
                    value={`Kursus ${course.name}`}
                    onChange={(e) => {
                      const newName = e.target.value.replace('Kursus ', '');
                      const updatedCourses = [...courses];
                      updatedCourses[index] = { ...course, name: newName };
                      setCourses(updatedCourses);
                    }}
                    className="text-sm h-7 w-full border-amber-300 bg-white/90 dark:bg-gray-900"
                  />
                ) : (
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Kursus {course.name}</h4>
                )}
                {isEditing ? (
                  <div className="flex gap-2 mt-1">
                    <Input
                      value={course.startDate}
                      onChange={(e) => {
                        const updatedCourses = [...courses];
                        updatedCourses[index] = { ...course, startDate: e.target.value };
                        setCourses(updatedCourses);
                      }}
                      className="text-xs h-6 border-amber-300 bg-white/90 dark:bg-gray-900"
                    />
                    <Input
                      value={course.endDate}
                      onChange={(e) => {
                        const updatedCourses = [...courses];
                        updatedCourses[index] = { ...course, endDate: e.target.value };
                        setCourses(updatedCourses);
                      }}
                      className="text-xs h-6 border-amber-300 bg-white/90 dark:bg-gray-900"
                    />
                  </div>
                ) : (
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {course.startDate} - {course.endDate}
                  </p>
                )}
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCourses;
