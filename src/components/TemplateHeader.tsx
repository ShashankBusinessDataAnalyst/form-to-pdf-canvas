import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

interface TemplateHeaderProps {
  templateName: string;
}

export const TemplateHeader: React.FC<TemplateHeaderProps> = ({ templateName }) => {
  const navigate = useNavigate();
  
  return (
    <header className="fixed top-0 left-0 right-0 h-[60px] bg-background shadow-sm z-50 flex items-center justify-between px-6">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/")} 
        className="gap-2 hover:bg-accent"
      >
        <Home className="h-4 w-4" />
        Home
      </Button>
      <span className="text-sm text-muted-foreground">
        Current Template: <span className="font-medium text-foreground">{templateName}</span>
      </span>
    </header>
  );
};
