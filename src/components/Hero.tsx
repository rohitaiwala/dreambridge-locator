import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
export const Hero = () => {
  return <section className="bg-background py-16 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-12">
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient">
              Connect, Learn & Grow Together
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Join our community of students and tutors. Get help with your studies, share knowledge,
              and achieve your academic goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start my-[15px] px-0 py-[4px]">
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Get Started
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Find a Tutor
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 animate-float mt-8 md:mt-0">
            <img src="/lovable-uploads/ba62e7af-e96d-47fe-b76a-83dd65993d6b.png" alt="Classroom scene with students and teacher" className="rounded-lg shadow-2xl w-full max-w-lg mx-auto" />
          </div>
        </div>
      </div>
    </section>;
};