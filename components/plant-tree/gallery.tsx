"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const trees = [
  {
    id: 1,
    image: "/tree1.jpg",
    location: "Amazon Rainforest",
    date: "2024-02-20",
    species: "Oak"
  },
  {
    id: 2,
    image: "/tree2.jpg",
    location: "Indonesian Forest",
    date: "2024-02-19",
    species: "Pine"
  },
  {
    id: 3,
    image: "/tree3.jpg",
    location: "African Savanna",
    date: "2024-02-18",
    species: "Acacia"
  }
];

export function TreeGallery() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Recently Planted Trees</h2>
          <p className="text-xl text-muted-foreground">
            See the impact of our community's contributions to reforestation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trees.map((tree) => (
            <Card key={tree.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-video relative">
                {/* Dynamically set the tree image */}
                <img src={tree.image} alt={`${tree.species} Tree`} className="object-cover w-full h-full" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{tree.location}</span>
                  </div>
                  <Badge variant="secondary">{tree.species}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Planted on {new Date(tree.date).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
