import { AuroraText } from "../magicui/aurora-text";
import { BlurFateText } from "../magicui/BlurFateText";
import { GradientText } from "../magicui/gradient-text";
import DotPattern from "../ui/dot-pattern-1";

const Home = () => {
  return (
    <div className="relative py-16 md:py-0 bg-[#f5f5f5]">
      <DotPattern className="text-primary/500" />
      <div className="flex flex-col justify-center items-center text-black  pt-16 px-6 md:pt-32 md:px-10 lg:px-16">
        {/* Main Heading */}
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <BlurFateText
            text="Your Brand Deserves More Than Just Marketing—It Deserves a Strategy That Wins."
            className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-medium max-w-4xl"
          />
          <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-gradient">
            <AuroraText>RL Marketing Hub</AuroraText>
          </h1>
        </div>

        {/* Subtext */}
        <div className="flex flex-col items-center justify-center gap-4 text-center mt-8 md:mb-12 max-w-2xl">
          <GradientText>
            <h5 className="text-lg sm:text-lg md:text-lg lg:text-xl xl:text-lg font-medium leading-relaxed">
              At RL Marketing Hub, we craft data-driven digital strategies that
              make your brand stand out, build trust, and drive real business
              growth.
            </h5>
          </GradientText>
        </div>
      </div>
    </div>
  );
};

export default Home;
