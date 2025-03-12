import { RetroGrid } from "../ui/retro-grid";

const RetroGridDemo = ({ children }: any) => {
  return (
    <div className="relative flex h-[70vh] w-full flex-col items-center overflow-hidden rounded-lg border bg-[#f5f5f5]">
      {children}
      <RetroGrid />
    </div>
  );
};

export default RetroGridDemo;
