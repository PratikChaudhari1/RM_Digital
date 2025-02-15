import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-background p-6 shadow-md transition-all hover:shadow-lg">
      <div className="mb-4">
        <Icon className="h-12 w-12 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Button variant="link" className="p-0">
        Learn More →
      </Button>
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity",
        "bg-gradient-to-r from-primary/10 to-transparent"
      )} />
    </div>
  );
}