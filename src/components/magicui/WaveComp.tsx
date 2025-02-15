import { Waves } from "@/components/ui/waves-background";
import React from "react";

const WaveComp = (props: any) => {
  const { children, isDark } = props;

  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <div
      className="relative w-full md:h-[10rem] lg:h-[670px] bg-background/80 rounded-lg overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0">
        <Waves
          lineColor={isDark ? "hsl(0, 100%, 50%)" : "rgba(0, 0, 0, 0.3)"}
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.03}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
          mousePos={mousePos}
        />
      </div>

      <div className="relative z-10 p-8">{children}</div>
    </div>
  );
};

export default WaveComp;
