import { RainbowButton } from "./rainbow-button";

const MagicButton = ({ children, onClick }: any) => {
  return (
    <RainbowButton
      style={{ borderRadius: "16px", whiteSpace: "nowrap" }}
      onClick={onClick}
    >
      {children}
    </RainbowButton>
  );
};

export default MagicButton;
