"use client";

import DotPattern from "@/components/ui/dot-pattern-1";
import MagicButton from "../ui/magicButton";
import { useCallback } from "react";

export function DotPatternBox() {
  const handleStateRefresh = useCallback((id: string) => {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  }, []);
  return (
    <div className="mx-auto mb-10 max-w-6xl px-4 md:mb-16 xl:px-0">
      <div className="relative flex flex-col md:flex-row items-center border border-indigo-500 p-4 md:p-6 xl:p-10 rounded-xl overflow-hidden bg-gray-50 shadow-lg">
        {/* Dot Pattern */}
        <DotPattern width={3} height={3} />

        {/* Border Indicators */}
        <div className="absolute -left-1 -top-1 h-2 w-2 bg-red-500" />
        <div className="absolute -bottom-1 -left-1 h-2 w-2 bg-red-500" />
        <div className="absolute -right-1 -top-1 h-2 w-2 bg-red-500" />
        <div className="absolute -bottom-1 -right-1 h-2 w-2 bg-red-500" />

        {/* Content Section */}
        <div className="relative z-20 flex-1 text-center md:text-left">
          <div className="text-xl tracking-tighter md:text-3xl lg:text-4xl xl:text-5xl">
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <h1 className="font-medium text-xl md:text-4xl lg:text-3xl">
                Struggling to grow your business online? We’ve got you covered!
              </h1>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <p className="font-thin text-xl md:text-4xl lg:text-3xl">
                Our expert team specializes in:{" "}
                <strong>
                  SEO, Website Design & Development, Logo Design, Social Media
                  Management, Email Marketing, and High-Converting Meta Ads.
                </strong>
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <p className="font-thin text-xl md:text-4xl lg:text-3xl">
                Let’s craft a digital strategy that drives real results for your
                brand.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <h1 className="font-medium text-xl md:text-4xl lg:text-3xl">
                Ready to take your business to the next level? Your business
                deserves to stand out. Click below—let’s talk growth!
              </h1>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6 flex justify-center md:justify-start">
            <MagicButton onClick={() => handleStateRefresh("contact")}>
              Let's Talk Growth
            </MagicButton>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/3 mt-8 md:mt-0">
          <img
            src="https://static.wixstatic.com/media/c837a6_34c53107e8a7408a9b515b38fb86cd00~mv2.png/v1/fill/w_560,h_780,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/templatesdrive_closeup_of_a_shadowed_hand_holding_the_phone_pur_8b254692-9c23-405a-ba24-b3.png"
            alt="Descriptive Image"
            width={300}
            height={300}
            className="w-full h-auto rounded-xl object-cover opacity-100 z-50"
          />
        </div>
      </div>
    </div>
  );
}
