import { WarpBackground } from "./warp-background";

export function WrapBack({children}: any) {
  return (
    <WarpBackground>
        {children}
    </WarpBackground>
  );
}
