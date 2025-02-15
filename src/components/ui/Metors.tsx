import Meteors from "./meteors";

export function MeteorsWrapper({ children }: any) {
  return (
    <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden bg-transparent rounded-lg border">
      <Meteors number={30} />
      {children}
    </div>
  );
}
