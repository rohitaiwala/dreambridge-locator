import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
              Empowering Students to Achieve Their Dreams
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8">
              Connect with tutors, find opportunities, and build your future with StudentConnect.
              Breaking financial barriers in education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 w-full sm:w-auto">
                Find a Tutor
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white/10 w-full sm:w-auto"
              >
                Become a Tutor
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-float mt-8 md:mt-0">
            <img
              src="/lovable-uploads/ba62e7af-e96d-47fe-b76a-83dd65993d6b.png"
              alt="Classroom scene with students and teacher"
              className="rounded-lg shadow-2xl w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};