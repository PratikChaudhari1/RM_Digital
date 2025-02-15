import { MagicCard } from "../ui/magic-card";
import { Button } from "../ui/button";
import { LucideIcon } from "lucide-react";
import { useTheme } from "next-themes";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function MagicCardDemo({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  const { theme } = useTheme();

  return (
    <>
      <MagicCard
        className="relative flex cursor-pointer flex-col items-center justify-center rounded-lg p-6 shadow-lg"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <div className="mb-4">
          <Icon className="h-9 w-12 text-primary" />
        </div>
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <Button variant="link" className="p-0">
          Learn More →
        </Button>
      </MagicCard>
    </>
  );
}
