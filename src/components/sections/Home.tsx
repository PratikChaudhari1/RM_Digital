import { AuroraText } from "../magicui/aurora-text";
import { BlurFateText } from "../magicui/BlurFateText";
import { GradientText } from "../magicui/gradient-text";
import RetroGridDemo from "../magicui/RetroGrid";

const Home = () => {
  return (
    <RetroGridDemo>
      <div className="relative py-16 md:py-0 bg-[#f5f5f5]">
        {/* <DotPattern className="text-primary/500" /> */}
        <div className="flex flex-col justify-center items-center text-black  pt-16 px-6 md:pt-32 md:px-10 lg:px-16">
          {/* Main Heading */}
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <BlurFateText
              text="Your Brand Deserves More Than Just Marketing—It Deserves a Strategy That Wins."
              className="text-xl sm:text-xl md:text-3xl lg:text-2xl xl:text-2xl font-medium max-w-2xl"
            />
            <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-medium tracking-tight text-gradient">
              <AuroraText>RL Marketing Hub</AuroraText>
            </h1>
          </div>

          {/* Subtext */}
          <div className="flex flex-col items-start justify-start gap-4 text-center mt-24 md:mt-8 md:mb-12 max-w-2xl">
            <GradientText>
              <h5 className="absolute left-1/2 transform -translate-x-1/2 top-[45vh] md:top-72  w-[100vw] px-4 md:w-[50vw] text-lg sm:text-lg md:text-lg lg:text-xl xl:text-lg font-medium leading-relaxed">
                At RL Marketing Hub, we craft data-driven digital strategies
                that make your brand stand out, build trust, and drive real
                business growth.
              </h5>
            </GradientText>
          </div>
        </div>
      </div>
    </RetroGridDemo>
  );
};

export default Home;
