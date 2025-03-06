
import React from "react";
import { User } from "@/contexts/AuthContext";
import { MapPin, Calendar, School } from "lucide-react";

interface ProfileBioProps {
  user: User | null;
}

const ProfileBio: React.FC<ProfileBioProps> = ({ user }) => {
  const userDetails = {
    dob: "28 Desember 2004",
    location: user?.role === "student" 
      ? "SMA Karya Siswa, Jakarta"
      : "Sarjana Teknik Informatika",
    address: "Jl. Lavender II, Kap. DLT, Tangerang"
  };

  const bio = user?.role === "student"
    ? "Hi saya masih belajar mengonggit! Aku Saya sedang menekuni web development dengan React, JavaScript, dan CSS photography. Selain itu saya juga fotografer dan designer musik. Beberapa skill dan hobi yang dapat saya jadikan value plus yang dapat saya manfaatkan untuk gitar bass dan keyboard."
    : "Saya adalah tutor berpengalaman dengan 5+ tahun mengajar matematika dan fisika. Lulusan S2 Teknik Informatika dengan passion mengajar dan membimbing siswa. Metode pengajaran saya fokus pada pemahaman konsep dan aplikasi praktis.";

  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold text-[#2D3A3A] dark:text-white mb-4">
        Tentang Saya
      </h3>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-700 dark:text-gray-300">{userDetails.dob}</span>
        </div>
        <div className="flex items-center gap-2">
          <School className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-700 dark:text-gray-300">{userDetails.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-700 dark:text-gray-300">{userDetails.address}</span>
        </div>
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 text-sm">
        {bio}
      </p>
    </div>
  );
};

export default ProfileBio;
