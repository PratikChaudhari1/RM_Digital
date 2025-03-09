import { RainbowButton } from "./rainbow-button";

interface MagicButtonProps {
  children: React.ReactNode;
}

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
