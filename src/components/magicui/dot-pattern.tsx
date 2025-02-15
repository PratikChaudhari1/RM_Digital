import { cn } from "@/lib/utils";

export const DotPattern = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 bg-[length:40px_40px] bg-center [background-image:radial-gradient(circle,currentColor_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]",
        className
      )}
      {...props}
    />
  );
};