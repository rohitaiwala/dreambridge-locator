import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { ImagePlus, Send, ArrowLeft } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
  type: 'text' | 'image';
  content: string;
}

const ChatRoom = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const { classId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when new messages are added
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: "You", // Replace with actual user name from auth
      timestamp: new Date(),
      type: 'text',
      content: newMessage
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const message: Message = {
          id: Date.now().toString(),
          text: "Sent an image",
          sender: "You", // Replace with actual user name from auth
          timestamp: new Date(),
          type: 'image',
          content: e.target?.result as string
        };
        setMessages([...messages, message]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleExit = () => {
    navigate("/community");
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#212A31" }}>
      <Navbar />
      <div className="container mx-auto px-4 py-4">
        <div className="max-w-2xl mx-auto bg-[#2E3944] rounded-lg shadow-xl">
          <div className="p-4 border-b border-[#124E66] flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleExit}
              className="text-[#D3D9D4]"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h2 className="text-xl font-semibold text-[#D3D9D4] ml-4">
              {classId?.includes("ug") 
                ? `Undergraduate Year ${classId.charAt(2)}` 
                : `Class ${classId}`} Chat Room
            </h2>
          </div>

          <ScrollArea 
            ref={scrollAreaRef}
            className="h-[60vh] p-4"
          >
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex flex-col ${
                    message.sender === "You" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      message.sender === "You"
                        ? "bg-[#124E66]"
                        : "bg-[#2E3944]"
                    }`}
                  >
                    <div className="text-sm text-[#748D92] mb-1">
                      {message.sender}
                    </div>
                    {message.type === 'image' ? (
                      <img
                        src={message.content}
                        alt="Shared image"
                        className="max-w-full rounded"
                      />
                    ) : (
                      <p className="text-[#D3D9D4]">{message.content}</p>
                    )}
                    <div className="text-xs text-[#748D92] mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-4 border-t border-[#124E66]">
            <div className="flex gap-2">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleImageUpload}
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => fileInputRef.current?.click()}
                className="text-[#D3D9D4]"
              >
                <ImagePlus className="h-5 w-5" />
              </Button>
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-[#2E3944] text-[#D3D9D4] border-[#124E66]"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
              />
              <Button
                onClick={handleSendMessage}
                className="bg-[#124E66] text-[#D3D9D4]"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;