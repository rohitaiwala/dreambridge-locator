import { useState, useEffect } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";

interface CaptchaProps {
  value: string;
  onChange: (value: string) => void;
}

export function Captcha({ value, onChange }: CaptchaProps) {
  const [captcha, setCaptcha] = useState("");

  const generateCaptcha = () => {
    const newCaptcha = Math.floor(100000 + Math.random() * 900000).toString();
    setCaptcha(newCaptcha);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div>
      <Label>Security Check</Label>
      <div className="flex items-center gap-4 mb-2">
        <div className="bg-gray-100 p-2 rounded font-mono text-lg">
          {captcha}
        </div>
        <Button
          type="button"
          variant="outline"
          onClick={generateCaptcha}
        >
          Refresh
        </Button>
      </div>
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        placeholder="Enter the code above"
      />
    </div>
  );
}