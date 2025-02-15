"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";

function About() {
  return (
    <div id="about" className="min-h-screen w-full px-20 py-12 md:py-20 lg:py-20 bg-background relative flex flex-col antialiased">
      <div className="max-w-6xl text-left">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-10">
          About R—M Digital
        </h1>
        <hr className="w-full mx-auto my-6 border-gray-500 pb-8" />
        <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed">
          Welcome to R—M Digital, where I empower businesses to navigate the evolving digital landscape with confidence. By integrating AI into your marketing efforts, we can uncover new opportunities, optimize performance, and deliver measurable results.
        </p>
        <p className="mt-10 text-gray-600 text-lg md:text-xl lg:text-2xl">
          This is an additional paragraph where you can add your own text. Just click “Edit Text” or double-click here to add your own content and make changes to the font. It’s a great place to tell a story about your business and let users know more about you.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export { About };
