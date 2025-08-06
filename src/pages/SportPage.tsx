import { useParams, Navigate, Link } from "react-router-dom";
import { SportTabs } from "@/components/SportTabs";
import { sportsData } from "@/data/sportsData";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function SportPage() {
  const { sport } = useParams<{ sport: string }>();
  
  if (!sport || !sportsData[sport]) {
    return <Navigate to="/" replace />;
  }

  const sportData = sportsData[sport];

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-64 bg-gradient-to-r from-primary via-primary-light to-accent flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative text-center text-white">
          <h1 className="text-5xl font-bold mb-4">{sportData.name}</h1>
          <p className="text-xl opacity-90">Excellence in Sports</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="ghost" asChild className="hover:bg-primary/10">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Sports
            </Link>
          </Button>
        </div>

        <SportTabs sportData={sportData} />
      </div>
    </div>
  );
}