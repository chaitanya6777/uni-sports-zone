import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Mail, Phone, User, MapPin, Trophy, Camera, Info, Building } from "lucide-react";
import { SportData } from "@/types/sport";

interface SportTabsProps {
  sportData: SportData;
}

export function SportTabs({ sportData }: SportTabsProps) {
  return (
    <Tabs defaultValue="about" className="w-full">
      <TabsList className="grid w-full grid-cols-5 mb-8">
        <TabsTrigger value="about" className="flex items-center gap-2">
          <Info className="h-4 w-4" />
          About
        </TabsTrigger>
        <TabsTrigger value="facilities" className="flex items-center gap-2">
          <Building className="h-4 w-4" />
          Facilities
        </TabsTrigger>
        <TabsTrigger value="achievements" className="flex items-center gap-2">
          <Trophy className="h-4 w-4" />
          Achievements
        </TabsTrigger>
        <TabsTrigger value="contact" className="flex items-center gap-2">
          <User className="h-4 w-4" />
          Contact
        </TabsTrigger>
        <TabsTrigger value="gallery" className="flex items-center gap-2">
          <Camera className="h-4 w-4" />
          Gallery
        </TabsTrigger>
      </TabsList>

      <TabsContent value="about" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              About {sportData.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{sportData.about}</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                <div className="text-2xl font-bold text-primary">{sportData.stats.players}</div>
                <div className="text-sm text-muted-foreground">Active Players</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg">
                <div className="text-2xl font-bold text-accent">{sportData.stats.teams}</div>
                <div className="text-sm text-muted-foreground">Teams</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-success/10 to-primary/10 rounded-lg">
                <div className="text-2xl font-bold text-success">{sportData.stats.tournaments}</div>
                <div className="text-sm text-muted-foreground">Tournaments Won</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="facilities" className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sportData.facilities.map((facility, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" />
                  {facility.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{facility.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {facility.location}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {facility.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary">{feature}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="achievements" className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sportData.achievements.map((achievement, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    <div className="text-sm text-muted-foreground">{achievement.year}</div>
                  </div>
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{achievement.description}</p>
                <Badge className="mt-3" variant={achievement.level === 'National' ? 'default' : achievement.level === 'State' ? 'secondary' : 'outline'}>
                  {achievement.level}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="contact" className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sportData.contacts.map((contact, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  {contact.name}
                </CardTitle>
                <Badge variant="outline">{contact.role}</Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                    {contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a href={`tel:${contact.phone}`} className="text-primary hover:underline">
                    {contact.phone}
                  </a>
                </div>
                {contact.office && (
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{contact.office}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="gallery" className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sportData.gallery.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Camera className="h-12 w-12 text-muted-foreground" />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                <div className="text-xs text-muted-foreground mt-2">{item.date}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}