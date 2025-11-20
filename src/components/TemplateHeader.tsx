import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import williamsLogo from "@/assets/williams-logo.png";

interface TemplateHeaderProps {
  templateName: string;
}

export const TemplateHeader: React.FC<TemplateHeaderProps> = ({ templateName }) => {
  const navigate = useNavigate();
  
  return (
    <header className="fixed top-0 left-0 right-0 border-b border-border bg-card z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img src={williamsLogo} alt="Williams Refrigeration" className="h-12" />
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")} 
              className="gap-2 hover:bg-accent"
            >
              <Home className="h-4 w-4" />
              Home
            </Button>
          </div>
          <span className="text-sm text-muted-foreground">
            Current Template: <span className="font-medium text-foreground">{templateName}</span>
          </span>
        </div>
      </div>
    </header>
  );
};
