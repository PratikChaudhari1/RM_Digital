import { NeonGradientCard } from "../ui/neon-gradient-card";

export function NeoGradiant({ children }: any) {
  return (
    <NeonGradientCard className="w-full h-full flex items-center justify-center">
      {children}
    </NeonGradientCard>
  );
}
