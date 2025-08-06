import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Home, Trophy } from "lucide-react";

export function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Trophy className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sports Institute
            </span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Button 
              variant={location.pathname === "/" ? "default" : "ghost"} 
              size="sm" 
              asChild
            >
              <Link to="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}