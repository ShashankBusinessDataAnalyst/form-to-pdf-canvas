import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Snowflake, Flame } from "lucide-react";
import { cn } from "@/lib/utils";
interface TemplateNavigationProps {
  currentTemplate?: "cold" | "hot";
}
export const TemplateNavigation = ({
  currentTemplate
}: TemplateNavigationProps) => {
  return <nav className="bg-card border-b border-border px-6 py-4 print:hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <Home className="h-4 w-4" />
              Home
            </Button>
          </Link>
          <div className="h-6 w-4 bg-border" />
          
          <Link to="/shannon-hot">
            
          </Link>
        </div>
        {currentTemplate && <div className="text-sm text-muted-foreground">
            Current Template: <span className="font-semibold text-foreground">
              Shannon {currentTemplate === "cold" ? "Cold" : "Hot"}
            </span>
          </div>}
      </div>
    </nav>;
};