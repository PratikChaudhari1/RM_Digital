import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

interface CaseStudyProps {
  title: string;
  description: string;
  tags: string[];
  results: string;
  imageUrl: string;
}

export function CaseStudyCard({ title, description, tags, results, imageUrl }: CaseStudyProps) {
  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
      <div className="absolute right-4 top-4 z-10">
        <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <p className="font-medium text-primary">Results: {results}</p>
      </CardContent>
    </Card>
  );
};