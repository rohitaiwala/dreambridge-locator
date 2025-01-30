import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Students to Achieve Their Dreams
            </h1>
            <p className="text-xl mb-8">
              Connect with tutors, find opportunities, and build your future with StudentConnect.
              Breaking financial barriers in education.
            </p>
            <div className="flex space-x-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Find a Tutor
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Become a Tutor
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-float">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Students studying"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};