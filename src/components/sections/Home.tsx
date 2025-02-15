import { AuroraText } from "../magicui/aurora-text";
import { BlurFateText } from "../magicui/BlurFateText";
import { GradientText } from "../magicui/gradient-text";
import RetroGridDemo from "../magicui/RetroGrid";

const Home = () => {
  return (
    <RetroGridDemo>
      <div className="flex flex-col justify-center text-black mt-16 px-4 md:mt-32 md:px-8 lg:mt-40 lg:px-12">
        {/* Main Heading */}
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex flex-wrap justify-center items-center gap-2">
            <BlurFateText text="Digital Strategies for the" className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-6xl font-semibold" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter">
              <AuroraText>AI Age</AuroraText>
            </h1>
          </div>
        </div>

        {/* Subtext */}
        <div className="flex flex-col items-center justify-center gap-4 text-center mt-5 md:mt-10 relative">
          <GradientText>
            <h5 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl">
              Personalized Digital Marketing Solutions that Leverage AI
            </h5>
          </GradientText>
        </div>
      </div>
    </RetroGridDemo>
  );
};

export default Home;
