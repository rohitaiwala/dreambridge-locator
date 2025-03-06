
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, Clock } from "lucide-react";

// Mock test questions
const MOCK_QUESTIONS = [
  {
    id: 1,
    question: "Which of the following is not a property of a pure function?",
    options: [
      "It returns the same result given the same arguments",
      "It modifies global state",
      "It doesn't cause any observable side effects",
      "It doesn't rely on external state"
    ],
    correctAnswer: 1 // Index of the correct answer (0-based)
  },
  {
    id: 2,
    question: "What is the formula for finding the area of a circle?",
    options: [
      "πr²",
      "2πr",
      "πd",
      "r²/π"
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "Which of the following is an example of Newton's Third Law of Motion?",
    options: [
      "An object in motion stays in motion",
      "When one body exerts a force on a second body, the second body simultaneously exerts a force on the first body",
      "Force equals mass times acceleration",
      "Energy can neither be created nor destroyed"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "What is the integral of 2x with respect to x?",
    options: [
      "x²",
      "x² + C",
      "2x²",
      "x² + 2C"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Which data structure follows the Last In First Out (LIFO) principle?",
    options: [
      "Queue",
      "Linked List",
      "Stack",
      "Tree"
    ],
    correctAnswer: 2
  },
  // Adding more questions to complete a total of 15
  {
    id: 6,
    question: "What is the main function of mitochondria in a cell?",
    options: [
      "Protein synthesis",
      "Energy production",
      "Waste removal",
      "Cell division"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "In which layer of the OSI model does TCP operate?",
    options: [
      "Application layer",
      "Network layer",
      "Data link layer",
      "Transport layer"
    ],
    correctAnswer: 3
  },
  {
    id: 8,
    question: "What is the chemical symbol for gold?",
    options: [
      "Go",
      "Gd",
      "Au",
      "Ag"
    ],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "Which of the following is not one of Shakespeare's plays?",
    options: [
      "Macbeth",
      "Hamlet",
      "The Canterbury Tales",
      "Romeo and Juliet"
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "What is the capital city of Australia?",
    options: [
      "Sydney",
      "Melbourne",
      "Canberra",
      "Perth"
    ],
    correctAnswer: 2
  },
  {
    id: 11,
    question: "Which of these is not a type of database join?",
    options: [
      "Inner join",
      "Outer join",
      "Diagonal join",
      "Cross join"
    ],
    correctAnswer: 2
  },
  {
    id: 12,
    question: "What is the largest planet in our solar system?",
    options: [
      "Earth",
      "Saturn",
      "Jupiter",
      "Neptune"
    ],
    correctAnswer: 2
  },
  {
    id: 13,
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyper Transfer Markup Language",
      "High Technology Modern Language",
      "Hypertext Management Logic"
    ],
    correctAnswer: 0
  },
  {
    id: 14,
    question: "Which of the following is not a programming paradigm?",
    options: [
      "Object-oriented",
      "Functional",
      "Procedural",
      "Differential"
    ],
    correctAnswer: 3
  },
  {
    id: 15,
    question: "What is the primary purpose of a constructor in Object-Oriented Programming?",
    options: [
      "To destroy objects when they're no longer needed",
      "To initialize new objects",
      "To define class methods",
      "To inherit properties from parent classes"
    ],
    correctAnswer: 1
  }
];

const TutorTest = () => {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(MOCK_QUESTIONS.length).fill(-1));
  const [selectedOption, setSelectedOption] = useState<number>(-1);
  const [testCompleted, setTestCompleted] = useState(false);
  const [score, setScore] = useState(0);
  
  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };
  
  const handleNextQuestion = () => {
    if (selectedOption === -1) {
      toast.error("Please select an answer");
      return;
    }
    
    // Save answer
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedOption;
    setAnswers(newAnswers);
    
    // Move to next question or complete test
    if (currentQuestion < MOCK_QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(-1);
    } else {
      completeTest(newAnswers);
    }
  };
  
  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedOption(answers[currentQuestion - 1]);
    }
  };
  
  const completeTest = (finalAnswers: number[]) => {
    // Calculate score
    let correctAnswers = 0;
    finalAnswers.forEach((answer, index) => {
      if (answer === MOCK_QUESTIONS[index].correctAnswer) {
        correctAnswers++;
      }
    });
    
    const finalScore = Math.round((correctAnswers / MOCK_QUESTIONS.length) * 100);
    setScore(finalScore);
    setTestCompleted(true);
    
    // Update user in context
    updateUser({ 
      hasCompletedTest: true,
      testScore: finalScore
    });
  };
  
  const handleFinish = () => {
    toast.success("Test completed! Your profile is now active.");
    navigate("/profile");
  };
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        {!testCompleted ? (
          <Card className="max-w-3xl mx-auto shadow-lg">
            <CardHeader className="border-b">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Tutor Assessment Test</CardTitle>
                  <CardDescription>Question {currentQuestion + 1} of {MOCK_QUESTIONS.length}</CardDescription>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">No time limit</span>
                </div>
              </div>
              <Progress value={(currentQuestion / MOCK_QUESTIONS.length) * 100} className="mt-4" />
            </CardHeader>
            
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    {MOCK_QUESTIONS[currentQuestion].question}
                  </h2>
                  
                  <RadioGroup value={selectedOption.toString()} className="space-y-3">
                    {MOCK_QUESTIONS[currentQuestion].options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem 
                          value={index.toString()} 
                          id={`option-${index}`} 
                          onClick={() => handleOptionSelect(index)}
                        />
                        <Label htmlFor={`option-${index}`} className="cursor-pointer py-2">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <div className="flex justify-between pt-4">
                  <Button 
                    variant="outline" 
                    onClick={handlePrevQuestion}
                    disabled={currentQuestion === 0}
                  >
                    Previous
                  </Button>
                  
                  <Button onClick={handleNextQuestion}>
                    {currentQuestion === MOCK_QUESTIONS.length - 1 ? "Complete Test" : "Next"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="max-w-3xl mx-auto shadow-lg text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="h-16 w-16 text-green-500" />
              </div>
              <CardTitle className="text-2xl">Assessment Completed!</CardTitle>
              <CardDescription>Thank you for completing the tutor assessment</CardDescription>
            </CardHeader>
            
            <CardContent className="pt-6 pb-8">
              <div className="space-y-6">
                <div>
                  <p className="text-4xl font-bold text-primary">{score}%</p>
                  <p className="text-muted-foreground mt-2">Your Score</p>
                </div>
                
                <div className="text-center space-y-2 max-w-md mx-auto">
                  <p>
                    {score >= 70 
                      ? "Congratulations! You passed the assessment." 
                      : "Thank you for taking the assessment."}
                  </p>
                  <p className="text-muted-foreground">
                    {score >= 70 
                      ? "Your profile is now active, and you can start receiving student requests."
                      : "We recommend reviewing the subject areas before retaking the test."}
                  </p>
                </div>
                
                <Button onClick={handleFinish} className="mt-4 mx-auto">
                  Continue to Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TutorTest;
