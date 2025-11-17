import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Snowflake, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface TemplateNavigationProps {
  currentTemplate?: "cold" | "hot";
}

export const TemplateNavigation = ({ currentTemplate }: TemplateNavigationProps) => {
  return (
    <nav className="bg-card border-b border-border px-6 py-4 print:hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <Home className="h-4 w-4" />
              Home
            </Button>
          </Link>
          <div className="h-6 w-px bg-border" />
          <Link to="/shannon-cold">
            <Button
              variant={currentTemplate === "cold" ? "default" : "ghost"}
              size="sm"
              className={cn("gap-2", currentTemplate === "cold" && "pointer-events-none")}
            >
              <Snowflake className="h-4 w-4" />
              Shannon Cold
            </Button>
          </Link>
          <Link to="/shannon-hot">
            <Button
              variant={currentTemplate === "hot" ? "default" : "ghost"}
              size="sm"
              className={cn("gap-2", currentTemplate === "hot" && "pointer-events-none")}
            >
              <Flame className="h-4 w-4" />
              Shannon Hot
            </Button>
          </Link>
        </div>
        {currentTemplate && (
          <div className="text-sm text-muted-foreground">
            Current Template: <span className="font-semibold text-foreground">
              Shannon {currentTemplate === "cold" ? "Cold" : "Hot"}
            </span>
          </div>
        )}
      </div>
    </nav>
  );
};
