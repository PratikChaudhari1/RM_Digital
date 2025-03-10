import AnimatedGridPattern from "./animated-grid-pattern";
import { cn } from "@/lib/utils";

const Animated = ({ children, width = "110vh" }: any) => {
  return (
    <div
      className={`relative flex h-[${width}] w-full items-center justify-center overflow-hidden rounded-lg border bg-[#f5f5f5]`}
    >
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={0.5}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 bg-[#f5f5f5]"
        )}
      />
      {children}
    </div>
  );
};

export default Animated;
