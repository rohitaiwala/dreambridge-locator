
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Lead Developer",
    image: "https://i.pravatar.cc/150?img=1",
    github: "https://github.com/alexj",
    linkedin: "https://linkedin.com/in/alexj"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=5",
    github: "https://github.com/sarahc",
    linkedin: "https://linkedin.com/in/sarahc"
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Backend Engineer",
    image: "https://i.pravatar.cc/150?img=8",
    github: "https://github.com/michaelr",
    linkedin: "https://linkedin.com/in/michaelr"
  },
  {
    id: 4,
    name: "Tara Williams",
    role: "AI Specialist",
    image: "https://i.pravatar.cc/150?img=4",
    github: "https://github.com/taraw",
    linkedin: "https://linkedin.com/in/taraw"
  }
];

export const DeveloperTeam = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The talented developers and designers behind StudentConnect working to create the best learning experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg dark:bg-gray-700">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 mb-4 border-2 border-primary">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{member.role}</p>
                  <div className="flex space-x-4">
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
