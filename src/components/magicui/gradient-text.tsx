import { cn } from "@/lib/utils";

/**
 * GradientText Component
 * 
 * A utility component for rendering text with a customizable gradient background.
 * 
 * @param {React.ReactNode} children - The text or elements to be wrapped with the gradient effect.
 * @param {string} [from="from-primary"] - Tailwind class for the starting gradient color.
 * @param {string} [to="to-blue-600"] - Tailwind class for the ending gradient color.
 * @param {boolean} [animate=true] - Whether to animate the gradient effect.
 * @param {string} [className] - Additional Tailwind classes for custom styling.
 * @param {React.HTMLAttributes<HTMLSpanElement>} props - Additional props to be passed to the span element.
 * 
 * @returns {JSX.Element} A span element with a gradient text effect.
 */
interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  from?: string;
  to?: string;
  animate?: boolean;
}

export function GradientText({
  children,
  from = "from-primary",
  to = "to-blue-600",
  animate = true,
  className,
  ...props
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent", // Core gradient styles
        from, // Starting gradient color
        to, // Ending gradient color
        animate && "animate-text-gradient bg-[200%_auto] transition-all duration-1000 ease-linear infinite", // Smooth and infinite animation styles
        className // Additional custom classes
      )}
      {...props} // Spread additional props
    >
      {children}
    </span>
  );
}
