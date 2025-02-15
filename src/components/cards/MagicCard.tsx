import { MagicCard } from "../ui/magic-card";
// import { Button } from "../ui/button";
import { LucideIcon } from "lucide-react";
import { useTheme } from "next-themes";

interface ServiceCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
}

export function MagicCardDemo({
  // icon: Icon,
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
        <div className="flex flex-1 flex-col justify-between gap-3">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        </div>
      </MagicCard>
    </>
  );
}
