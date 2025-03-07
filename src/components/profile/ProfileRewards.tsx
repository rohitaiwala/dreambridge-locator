
import React from "react";
import { User } from "@/contexts/AuthContext";
import { Award, Star, Clock, BookOpen, RotateCcw, Coins } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";

interface ProfileRewardsProps {
  user: User | null;
  isEditing?: boolean;
}

const ProfileRewards: React.FC<ProfileRewardsProps> = ({
  user,
  isEditing = false
}) => {
  const { toast } = useToast();
  const [coins, setCoins] = React.useState(250);
  const [isSpinning, setIsSpinning] = React.useState(false);
  const [canSpin, setCanSpin] = React.useState(true);
  const [rewardIcons, setRewardIcons] = React.useState([{
    icon: <Award className="h-6 w-6 text-amber-500" />,
    name: "Perfect Attendance",
    achieved: true
  }, {
    icon: <Star className="h-6 w-6 text-blue-500" />,
    name: "Top Performer",
    achieved: true
  }, {
    icon: <Clock className="h-6 w-6 text-green-500" />,
    name: "Early Bird",
    achieved: true
  }, {
    icon: <BookOpen className="h-6 w-6 text-purple-500" />,
    name: "Bookworm",
    achieved: false
  }]);

  const handleSpin = () => {
    if (!canSpin) {
      toast({
        title: "Spin limit reached",
        description: "You can spin again in 24 hours!",
      });
      return;
    }
    
    setIsSpinning(true);
    setCanSpin(false);
    
    // Simulate spinning with a random coin reward
    setTimeout(() => {
      const reward = Math.floor(Math.random() * 50) + 10;
      setCoins(prevCoins => prevCoins + reward);
      setIsSpinning(false);
      
      toast({
        title: "Congratulations!",
        description: `You've won ${reward} coins!`,
      });
      
      // Reset spin availability after 24 hours (in a real app)
      // For demo purposes, we'll set it to 10 seconds
      setTimeout(() => setCanSpin(true), 10000);
    }, 2000);
  };

  const handleRedeem = () => {
    toast({
      title: "Redeem coins",
      description: "Feature coming soon! You'll be able to redeem coins for rewards.",
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
      <h3 className="text-lg font-semibold mb-4">Rewards & Coins</h3>
      
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
          <div className="flex items-center">
            <Coins className="h-6 w-6 text-amber-500 mr-2" />
            <span className="font-medium">Your Coins:</span>
          </div>
          <span className="text-lg font-bold text-amber-600 dark:text-amber-400">{coins}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-2">
          <Button 
            onClick={handleSpin}
            disabled={isSpinning || !canSpin}
            className="relative overflow-hidden"
          >
            <RotateCcw className={`h-5 w-5 mr-2 ${isSpinning ? 'animate-spin' : ''}`} />
            Spin & Win
            {!canSpin && !isSpinning && (
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center text-xs">
                Try later
              </div>
            )}
          </Button>
          
          <Button 
            onClick={handleRedeem}
            variant="outline"
          >
            <Coins className="h-5 w-5 mr-2" />
            Redeem Coins
          </Button>
        </div>
        
        <div className="mt-4">
          <h4 className="font-medium mb-2">Achievements</h4>
          <div className="grid grid-cols-2 gap-3">
            {rewardIcons.map((reward, index) => (
              <Card key={index} className={`p-3 flex items-center ${reward.achieved ? 'bg-green-50 dark:bg-green-900/20 border-green-200' : 'bg-gray-50 dark:bg-gray-700/30 border-gray-200'}`}>
                <div className="mr-3">
                  {reward.icon}
                </div>
                <div>
                  <p className="text-sm font-medium">{reward.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {reward.achieved ? 'Achieved' : 'Locked'}
                  </p>
                </div>
                {isEditing && (
                  <Switch 
                    className="ml-auto"
                    checked={reward.achieved}
                    onCheckedChange={(checked) => {
                      const newRewards = [...rewardIcons];
                      newRewards[index].achieved = checked;
                      setRewardIcons(newRewards);
                    }}
                  />
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileRewards;
