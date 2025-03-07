import React from "react";
import { User } from "@/contexts/AuthContext";
import { Award, Star, Clock, BookOpen } from "lucide-react";
import { Switch } from "@/components/ui/switch";
interface ProfileRewardsProps {
  user: User | null;
  isEditing?: boolean;
}
const ProfileRewards: React.FC<ProfileRewardsProps> = ({
  user,
  isEditing = false
}) => {
  const [rewardIcons, setRewardIcons] = React.useState([{
    icon: <Award className="h-6 w-6 text-amber-500" />,
    achieved: true
  }, {
    icon: <Star className="h-6 w-6 text-blue-500" />,
    achieved: true
  }, {
    icon: <Clock className="h-6 w-6 text-green-500" />,
    achieved: true
  }, {
    icon: <BookOpen className="h-6 w-6 text-purple-500" />,
    achieved: false
  }]);
  return;
};
export default ProfileRewards;