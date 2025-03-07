
import React from "react";
import { Progress } from "@/components/ui/progress";
import { User } from "@/contexts/AuthContext";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  value: number;
}

interface ProfileSkillsProps {
  user: User | null;
  isEditing?: boolean;
}

const ProfileSkills: React.FC<ProfileSkillsProps> = ({
  user,
  isEditing = false
}) => {
  // Different skills based on user role
  const [skills, setSkills] = React.useState<Skill[]>(user?.role === "student" ? [{
    name: "Disiplin",
    value: 85
  }, {
    name: "Kreatif",
    value: 75
  }, {
    name: "Komunikasi",
    value: 90
  }, {
    name: "Berpikir Kritis",
    value: 80
  }, {
    name: "Kerjasama",
    value: 88
  }] : [{
    name: "Pemecahan Masalah",
    value: 90
  }, {
    name: "Komunikasi",
    value: 95
  }, {
    name: "Kesabaran",
    value: 85
  }, {
    name: "Kreativitas",
    value: 80
  }, {
    name: "Adaptasi",
    value: 87
  }]);

  const handleSkillChange = (index: number, field: keyof Skill, value: string | number) => {
    if (isEditing) {
      const newSkills = [...skills];
      if (field === 'name' && typeof value === 'string') {
        newSkills[index].name = value;
      } else if (field === 'value' && typeof value === 'number') {
        newSkills[index].value = value;
      }
      setSkills(newSkills);
    }
  };

  const handleAddSkill = () => {
    if (isEditing) {
      setSkills([...skills, { name: "New Skill", value: 50 }]);
    }
  };

  const handleRemoveSkill = (index: number) => {
    if (isEditing) {
      const newSkills = [...skills];
      newSkills.splice(index, 1);
      setSkills(newSkills);
    }
  };

  return (
    <div className="space-y-4">
      {isEditing && (
        <button 
          onClick={handleAddSkill}
          className="text-sm bg-green-100 hover:bg-green-200 text-green-700 px-2 py-1 rounded"
        >
          + Add Skill
        </button>
      )}
      
      {skills.map((skill, index) => (
        <div key={index} className="space-y-2">
          <div className="flex items-center justify-between">
            {isEditing ? (
              <Input
                value={skill.name}
                onChange={(e) => handleSkillChange(index, 'name', e.target.value)}
                className="w-32 mr-2"
              />
            ) : (
              <span className="font-medium">{skill.name}</span>
            )}
            <div className="flex items-center">
              {isEditing ? (
                <>
                  <Input
                    type="number"
                    min="0"
                    max="100"
                    value={skill.value}
                    onChange={(e) => handleSkillChange(index, 'value', parseInt(e.target.value))}
                    className="w-16 mr-2"
                  />
                  <button
                    onClick={() => handleRemoveSkill(index)}
                    className="text-red-500 hover:text-red-700 ml-2"
                  >
                    ×
                  </button>
                </>
              ) : (
                <span className="text-sm font-medium" style={{ color: getColorForValue(skill.value) }}>
                  {skill.value}%
                </span>
              )}
            </div>
          </div>
          <Progress
            value={skill.value}
            className="h-2"
            style={{ 
              '--progress-background': getColorForValue(skill.value)
            } as React.CSSProperties}
          />
        </div>
      ))}
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
