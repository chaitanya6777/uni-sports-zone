import { SportCard } from "@/components/SportCard";
import { Navigation } from "@/components/Navigation";
import { 
  Zap, 
  Target, 
  Dumbbell, 
  Trophy, 
  CircleDot, 
  Gamepad2,
  Activity
} from "lucide-react";
import heroImage from "@/assets/sports-hero.jpg";

const sports = [
  {
    title: "Badminton",
    description: "Fast-paced racket sport emphasizing agility, precision, and strategic play",
    icon: Zap,
    href: "/sport/badminton",
    gradient: "bg-gradient-to-r from-primary to-primary-light"
  },
  {
    title: "Volleyball", 
    description: "Team sport promoting communication, coordination, and athletic excellence",
    icon: Target,
    href: "/sport/volleyball",
    gradient: "bg-gradient-to-r from-accent to-accent-light"
  },
  {
    title: "Basketball",
    description: "Dynamic team sport combining strategy, skill, and competitive spirit",
    icon: Dumbbell,
    href: "/sport/basketball", 
    gradient: "bg-gradient-to-r from-primary to-accent"
  },
  {
    title: "Cricket",
    description: "Traditional sport requiring technique, patience, and mental strength",
    icon: Trophy,
    href: "/sport/cricket",
    gradient: "bg-gradient-to-r from-success to-primary"
  },
  {
    title: "Football",
    description: "The beautiful game that builds teamwork and athletic prowess",
    icon: CircleDot,
    href: "/sport/football",
    gradient: "bg-gradient-to-r from-accent to-success"
  },
  {
    title: "Table Tennis",
    description: "Quick reflexes and precision in this fast-paced indoor sport",
    icon: Gamepad2,
    href: "/sport/table-tennis",
    gradient: "bg-gradient-to-r from-primary-light to-accent"
  },
  {
    title: "Athletics",
    description: "Track and field events showcasing speed, strength, and endurance",
    icon: Activity,
    href: "/sport/athletics",
    gradient: "bg-gradient-to-r from-success to-accent-light"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Sports facilities" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-accent/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">
              Sports Excellence
            </h1>
            <p className="text-2xl opacity-90 drop-shadow">
              Discover Your Athletic Potential
            </p>
          </div>
        </div>
      </div>

      {/* Sports Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Sports Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of sports facilities and programs designed to nurture athletic talent and promote physical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sports.map((sport, index) => (
            <SportCard
              key={index}
              title={sport.title}
              description={sport.description}
              icon={sport.icon}
              href={sport.href}
              gradient={sport.gradient}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">350+</div>
              <div className="text-muted-foreground">Active Athletes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">7</div>
              <div className="text-muted-foreground">Sports Programs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-success mb-2">98</div>
              <div className="text-muted-foreground">Tournaments Won</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
