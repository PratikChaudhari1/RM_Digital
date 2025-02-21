"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { MagicCardDemo } from "../cards/MagicCard";
import Text from "../ui/Text";

function About() {
  const aboutData = [
    {
      title: "We Listen",
      description: "Your brand is unique, and your strategy should be too.",
    },
    {
      title: "We Create",
      description:
        "No cookie-cutter solutions—just tailored strategies that work.",
    },
    {
      title: "We Deliver",
      description: "Real results, backed by data, passion, and expertise.",
    },
  ];

  return (
    <div
      id="about"
      className="min-h-screen w-full px-6 sm:px-10 md:px-16 lg:px-20 py-12 md:py-20 lg:py-24 bg-background relative flex flex-col items-center text-center md:text-left antialiased"
    >
      <div className="">
        <Text
          text={"About Us"}
          textGradient={
            "bg-gradient-to-r from-[#c3b4ed] via-[#5b47ea] to-[#1688cf] bg-clip-text text-transparent font-medium drop-shadow-lg"
          }
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mt-10"
        >
          About Us
        </Text>
        <hr className="w-full mx-auto my-6 border-gray-500 pb-8" />
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
          More Than Marketing—We Build Brands That Last.
        </p>
        <p className="mt-6 text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl">
          We help businesses cut through the noise with a strong digital
          presence. We are your growth partners, strategists, and brand
          builders.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {aboutData.map((about, index) => (
            <MagicCardDemo key={index} {...about} />
          ))}
        </div>
        {/* <ul className="mt-6 text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl list-disc list-inside">
          <li>
            <strong>We Listen:</strong> Your brand is unique, and your strategy
            should be too.
          </li>
          <li>
            <strong>We Create:</strong> No cookie-cutter solutions—just tailored
            strategies that work.
          </li>
          <li>
            <strong>We Deliver:</strong> Real results, backed by data, passion,
            and expertise.
          </li>
        </ul> */}
      </div>
      <BackgroundBeams />
    </div>
  );
}

export { About };
