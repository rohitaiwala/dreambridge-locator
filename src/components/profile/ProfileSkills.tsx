
import React from "react";
import { Progress } from "@/components/ui/progress";
import { User } from "@/contexts/AuthContext";

interface ProfileSkillsProps {
  user: User | null;
}

const ProfileSkills: React.FC<ProfileSkillsProps> = ({ user }) => {
  // Different skills based on user role
  const skills = user?.role === "student" 
    ? [
        { name: "Disiplin", value: 85 },
        { name: "Kreatif", value: 75 },
        { name: "Komunikasi", value: 90 },
        { name: "Berpikir Kritis", value: 80 },
        { name: "Kerjasama", value: 88 }
      ]
    : [
        { name: "Pemecahan Masalah", value: 90 },
        { name: "Komunikasi", value: 95 },
        { name: "Kesabaran", value: 85 },
        { name: "Kreativitas", value: 80 },
        { name: "Adaptasi", value: 87 }
      ];

  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
      <div className="flex justify-between mb-4">
        <h3 className="text-xl font-bold text-[#2D3A3A] dark:text-white">
          Soft Skills
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
          ? "Berdasarkan nilai dan pengalaman belajar"
          : "Berdasarkan evaluasi dari siswa dan pengajaran"}
      </p>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
              <span className="text-gray-500 dark:text-gray-400">{skill.value}%</span>
            </div>
            <Progress value={skill.value} className="h-2" 
              style={{
                backgroundColor: '#e5e7eb',
                '--progress-background': getColorForValue(skill.value)
              } as React.CSSProperties}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper to get color based on skill value
const getColorForValue = (value: number): string => {
  if (value >= 90) return '#10B981'; // Green
  if (value >= 80) return '#3B82F6'; // Blue
  if (value >= 70) return '#F59E0B'; // Yellow
  if (value >= 60) return '#F97316'; // Orange
  return '#EF4444'; // Red
};

export default ProfileSkills;
