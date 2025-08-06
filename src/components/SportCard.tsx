import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { LucideIcon } from "lucide-react";

interface SportCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  gradient: string;
}

export function SportCard({ title, description, icon: Icon, href, gradient }: SportCardProps) {
  return (
    <Link to={href} className="group block">
      <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 overflow-hidden">
        <div className={`h-3 ${gradient}`} />
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
              <Icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
            </div>
          </div>
          <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
            {description}
          </p>
          <div className="mt-4 flex items-center text-primary group-hover:text-accent transition-colors duration-300">
            <span className="text-sm font-medium">Learn more</span>
            <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}