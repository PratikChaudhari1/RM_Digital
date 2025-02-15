import { useTheme } from "next-themes";
import { MagicCard } from "../ui/magic-card";

const CaseStudiesCard = ({ icon: Icon, title, description }: any) => {
  const { theme } = useTheme();
  return (
    <MagicCard
      className="relative flex cursor-pointer flex-col items-center justify-center rounded-lg p-6 shadow-lg"
      gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
    >
      <Icon className="h-8 w-8 text-primary mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </MagicCard>
  );
};

export default CaseStudiesCard;
