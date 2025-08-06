import { SportData } from "@/types/sport";

export const sportsData: Record<string, SportData> = {
  badminton: {
    name: "Badminton",
    about: "Our badminton program fosters athletic excellence and strategic thinking. With state-of-the-art courts and expert coaching, we develop players from beginners to competitive athletes. The sport emphasizes agility, precision, and mental toughness, making it one of our most popular programs.",
    stats: {
      players: 45,
      teams: 6,
      tournaments: 12
    },
    facilities: [
      {
        name: "Indoor Badminton Court A",
        description: "Professional-grade court with competition lighting and ventilation",
        location: "Sports Complex - Ground Floor",
        features: ["Wooden flooring", "Professional nets", "LED lighting", "Air conditioning"]
      },
      {
        name: "Indoor Badminton Court B",
        description: "Training court perfect for practice sessions and skill development",
        location: "Sports Complex - Ground Floor",
        features: ["Synthetic flooring", "Standard nets", "Natural lighting", "Equipment storage"]
      }
    ],
    achievements: [
      {
        title: "Inter-College Badminton Championship",
        year: "2024",
        description: "First place in both men's and women's doubles categories",
        level: "State"
      },
      {
        title: "Regional Youth Tournament",
        year: "2023",
        description: "Multiple medals in singles and doubles events",
        level: "Regional"
      },
      {
        title: "National University Games",
        year: "2023",
        description: "Qualified for quarter-finals in team events",
        level: "National"
      }
    ],
    contacts: [
      {
        name: "Dr. Priya Sharma",
        role: "Head Coach",
        email: "priya.sharma@institute.edu",
        phone: "+91 98765 43210",
        office: "Sports Complex - Room 101"
      },
      {
        name: "Arjun Kumar",
        role: "Assistant Coach",
        email: "arjun.kumar@institute.edu",
        phone: "+91 98765 43211"
      }
    ],
    gallery: [
      {
        title: "Championship Victory 2024",
        description: "Team celebrating state championship win",
        date: "March 2024",
        type: "image"
      },
      {
        title: "Training Session Highlights",
        description: "Intensive training session with new recruits",
        date: "February 2024",
        type: "video"
      },
      {
        title: "Tournament Action",
        description: "Intense match moments from regional tournament",
        date: "January 2024",
        type: "image"
      }
    ]
  },
  volleyball: {
    name: "Volleyball",
    about: "Our volleyball program emphasizes teamwork, communication, and athletic prowess. With both indoor and beach volleyball options, players develop versatile skills while building lasting friendships. The program has produced several players who've gone on to compete at national levels.",
    stats: {
      players: 38,
      teams: 4,
      tournaments: 8
    },
    facilities: [
      {
        name: "Indoor Volleyball Court",
        description: "Full-size court with professional standards for competitive play",
        location: "Main Gymnasium",
        features: ["Wooden flooring", "Professional net system", "Spectator seating", "Sound system"]
      },
      {
        name: "Beach Volleyball Court",
        description: "Outdoor sand court for beach volleyball training and recreation",
        location: "Outdoor Sports Area",
        features: ["Fine sand surface", "Regulation net", "Flood lighting", "Nearby changing rooms"]
      }
    ],
    achievements: [
      {
        title: "University Volleyball League Champions",
        year: "2024",
        description: "Undefeated season in the inter-university league",
        level: "State"
      },
      {
        title: "National Collegiate Volleyball",
        year: "2023",
        description: "Reached semi-finals in national tournament",
        level: "National"
      }
    ],
    contacts: [
      {
        name: "Coach Sarah Williams",
        role: "Head Coach",
        email: "sarah.williams@institute.edu",
        phone: "+91 98765 43212",
        office: "Gymnasium - Office 2"
      }
    ],
    gallery: [
      {
        title: "League Champions 2024",
        description: "Victory celebration after championship match",
        date: "April 2024",
        type: "image"
      },
      {
        title: "Beach Training Camp",
        description: "Summer training camp highlights",
        date: "May 2024",
        type: "video"
      }
    ]
  },
  basketball: {
    name: "Basketball",
    about: "Basketball at our institute combines athletic excellence with strategic gameplay. Our program focuses on fundamental skills, team dynamics, and competitive spirit. Players learn discipline, leadership, and the importance of teamwork both on and off the court.",
    stats: {
      players: 52,
      teams: 5,
      tournaments: 15
    },
    facilities: [
      {
        name: "Main Basketball Court",
        description: "Full-size court meeting international standards",
        location: "Central Sports Hall",
        features: ["Hardwood flooring", "Electronic scoreboard", "Retractable seating", "Professional lighting"]
      },
      {
        name: "Practice Court",
        description: "Secondary court for training and scrimmages",
        location: "Central Sports Hall",
        features: ["Synthetic flooring", "Standard hoops", "Wall mirrors", "Equipment storage"]
      }
    ],
    achievements: [
      {
        title: "State Basketball Championship",
        year: "2024",
        description: "Dominated the state-level inter-college tournament",
        level: "State"
      },
      {
        title: "National Basketball Tournament",
        year: "2023",
        description: "Top 8 finish in national collegiate championship",
        level: "National"
      }
    ],
    contacts: [
      {
        name: "Coach Michael Johnson",
        role: "Head Coach",
        email: "michael.johnson@institute.edu",
        phone: "+91 98765 43213",
        office: "Sports Hall - Office 1"
      }
    ],
    gallery: [
      {
        title: "State Championship Final",
        description: "Thrilling final match highlights",
        date: "March 2024",
        type: "video"
      },
      {
        title: "Team Photo 2024",
        description: "Official team photo for the 2024 season",
        date: "January 2024",
        type: "image"
      }
    ]
  },
  cricket: {
    name: "Cricket",
    about: "Cricket is the pride of our sports program, with a rich tradition of producing talented players. Our comprehensive program covers all aspects of the game, from technical skills to mental conditioning. We have excellent facilities and a coaching staff with professional experience.",
    stats: {
      players: 65,
      teams: 8,
      tournaments: 20
    },
    facilities: [
      {
        name: "Main Cricket Ground",
        description: "Full-size ground with natural grass pitch and professional facilities",
        location: "Sports Complex - Outdoor",
        features: ["Natural turf", "Pavilion", "Floodlights", "Practice nets", "Scoreboard"]
      },
      {
        name: "Indoor Practice Facility",
        description: "All-weather training facility with multiple practice nets",
        location: "Sports Complex - Indoor",
        features: ["Synthetic pitch", "Bowling machines", "Video analysis", "Gym equipment"]
      }
    ],
    achievements: [
      {
        title: "Inter-University Cricket Championship",
        year: "2024",
        description: "Winners of the prestigious inter-university tournament",
        level: "National"
      },
      {
        title: "State Cricket League",
        year: "2023",
        description: "Champions of the state-level cricket league",
        level: "State"
      }
    ],
    contacts: [
      {
        name: "Rajesh Tendulkar",
        role: "Head Coach",
        email: "rajesh.tendulkar@institute.edu",
        phone: "+91 98765 43214",
        office: "Cricket Pavilion - Coach Room"
      }
    ],
    gallery: [
      {
        title: "Championship Celebration",
        description: "Team lifting the inter-university trophy",
        date: "April 2024",
        type: "image"
      },
      {
        title: "Training Highlights",
        description: "Intensive training session footage",
        date: "March 2024",
        type: "video"
      }
    ]
  },
  football: {
    name: "Football",
    about: "Football at our institute represents passion, dedication, and team spirit. Our program develops well-rounded athletes who understand the beautiful game. With modern facilities and experienced coaching, we nurture talent from grassroots to competitive levels.",
    stats: {
      players: 42,
      teams: 4,
      tournaments: 10
    },
    facilities: [
      {
        name: "Football Stadium",
        description: "FIFA-standard field with professional amenities",
        location: "Main Sports Complex",
        features: ["Natural grass", "Floodlighting", "Spectator stands", "Changing rooms", "Medical room"]
      },
      {
        name: "Training Ground",
        description: "Additional field for practice and junior teams",
        location: "Secondary Complex",
        features: ["Artificial turf", "Goal posts", "Equipment storage", "Dugouts"]
      }
    ],
    achievements: [
      {
        title: "University Football Championship",
        year: "2024",
        description: "Unbeaten run to claim the university championship",
        level: "State"
      },
      {
        title: "Regional Football Tournament",
        year: "2023",
        description: "Runners-up in regional championship",
        level: "Regional"
      }
    ],
    contacts: [
      {
        name: "Carlos Rodriguez",
        role: "Head Coach",
        email: "carlos.rodriguez@institute.edu",
        phone: "+91 98765 43215",
        office: "Stadium - Coach Office"
      }
    ],
    gallery: [
      {
        title: "Championship Match",
        description: "Final match highlights from university championship",
        date: "May 2024",
        type: "video"
      },
      {
        title: "Team Training",
        description: "Preparation session before big match",
        date: "April 2024",
        type: "image"
      }
    ]
  },
  "table-tennis": {
    name: "Table Tennis",
    about: "Table tennis combines speed, precision, and strategic thinking. Our program caters to all skill levels, from recreational players to serious competitors. The fast-paced nature of the sport develops quick reflexes and mental agility.",
    stats: {
      players: 35,
      teams: 4,
      tournaments: 18
    },
    facilities: [
      {
        name: "Table Tennis Hall",
        description: "Dedicated hall with multiple professional tables",
        location: "Recreation Center",
        features: ["8 professional tables", "Proper lighting", "Non-slip flooring", "Equipment rack"]
      }
    ],
    achievements: [
      {
        title: "State Table Tennis Championship",
        year: "2024",
        description: "Gold medals in singles and doubles categories",
        level: "State"
      },
      {
        title: "Inter-College Tournament",
        year: "2023",
        description: "Team championship winners",
        level: "Regional"
      }
    ],
    contacts: [
      {
        name: "Li Wei Chen",
        role: "Head Coach",
        email: "li.chen@institute.edu",
        phone: "+91 98765 43216",
        office: "Recreation Center - Room 15"
      }
    ],
    gallery: [
      {
        title: "State Championship Victory",
        description: "Medal ceremony after state championship",
        date: "February 2024",
        type: "image"
      },
      {
        title: "Training Techniques",
        description: "Advanced training methods demonstration",
        date: "January 2024",
        type: "video"
      }
    ]
  },
  athletics: {
    name: "Athletics",
    about: "Athletics forms the foundation of all sports at our institute. Our track and field program develops speed, strength, endurance, and technique across multiple disciplines. We provide comprehensive training for sprints, distance running, jumping, and throwing events.",
    stats: {
      players: 75,
      teams: 10,
      tournaments: 25
    },
    facilities: [
      {
        name: "Athletic Track",
        description: "400m synthetic track with 8 lanes meeting international standards",
        location: "Main Athletic Complex",
        features: ["Synthetic surface", "8-lane track", "Field event areas", "Electronic timing", "Warm-up area"]
      },
      {
        name: "Field Event Areas",
        description: "Dedicated areas for jumping and throwing events",
        location: "Athletic Complex",
        features: ["Long jump pit", "High jump area", "Shot put circle", "Javelin runway", "Hammer throw cage"]
      }
    ],
    achievements: [
      {
        title: "National Athletics Championship",
        year: "2024",
        description: "Multiple medals in track and field events",
        level: "National"
      },
      {
        title: "State Athletics Meet",
        year: "2024",
        description: "Team champions with record-breaking performances",
        level: "State"
      }
    ],
    contacts: [
      {
        name: "David Thompson",
        role: "Head Coach - Track Events",
        email: "david.thompson@institute.edu",
        phone: "+91 98765 43217",
        office: "Athletic Complex - Office A"
      },
      {
        name: "Maria Santos",
        role: "Field Events Coach",
        email: "maria.santos@institute.edu",
        phone: "+91 98765 43218",
        office: "Athletic Complex - Office B"
      }
    ],
    gallery: [
      {
        title: "National Championship",
        description: "Athletes competing at national level",
        date: "June 2024",
        type: "image"
      },
      {
        title: "Record Breaking Performance",
        description: "New institute record in 400m dash",
        date: "May 2024",
        type: "video"
      }
    ]
  }
};