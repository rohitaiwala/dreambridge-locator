
import React from "react";
import { User } from "@/contexts/AuthContext";
import { ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ProfileCoursesProps {
  user: User | null;
  isEditing?: boolean;
}

const ProfileCourses: React.FC<ProfileCoursesProps> = ({
  user,
  isEditing = false
}) => {
  // Course data based on user role
  const [courses, setCourses] = React.useState(user?.role === "student" ? [{
    id: 1,
    name: "Matematika",
    startDate: "1 Maret 2023",
    endDate: "5 Mei 2023"
  }, {
    id: 2,
    name: "Bahasa Jepang",
    startDate: "14 Maret 2023",
    endDate: "16 Juni 2023"
  }, {
    id: 3,
    name: "Bahasa Inggris",
    startDate: "8 Februari 2023",
    endDate: "6 April 2023"
  }] : [{
    id: 1,
    name: "Aljabar Linear",
    startDate: "5 Maret 2023",
    endDate: "20 Mei 2023"
  }, {
    id: 2,
    name: "Kalkulus",
    startDate: "10 Maret 2023",
    endDate: "15 Juni 2023"
  }, {
    id: 3,
    name: "Statistika",
    startDate: "12 Februari 2023",
    endDate: "10 April 2023"
  }]);

  const handleCourseChange = (index: number, field: 'name' | 'startDate' | 'endDate', value: string) => {
    if (isEditing) {
      const newCourses = [...courses];
      newCourses[index][field] = value;
      setCourses(newCourses);
    }
  };

  return (
    <div className="space-y-3">
      {courses.map((course, index) => (
        <div key={course.id} className="flex flex-col bg-orange-50 dark:bg-gray-700 p-3 rounded-md">
          <div className="flex justify-between items-center">
            {isEditing ? (
              <Input
                value={course.name}
                onChange={(e) => handleCourseChange(index, 'name', e.target.value)}
                className="w-full mb-2"
              />
            ) : (
              <h4 className="font-medium text-orange-700 dark:text-orange-300">{course.name}</h4>
            )}
            {!isEditing && <ChevronRight className="h-4 w-4 text-orange-500" />}
          </div>
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-1">
            <div>
              {isEditing ? (
                <Input
                  value={course.startDate}
                  onChange={(e) => handleCourseChange(index, 'startDate', e.target.value)}
                  className="w-28 text-xs"
                />
              ) : (
                <span>Start: {course.startDate}</span>
              )}
            </div>
            <div>
              {isEditing ? (
                <Input
                  value={course.endDate}
                  onChange={(e) => handleCourseChange(index, 'endDate', e.target.value)}
                  className="w-28 text-xs"
                />
              ) : (
                <span>End: {course.endDate}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileCourses;
