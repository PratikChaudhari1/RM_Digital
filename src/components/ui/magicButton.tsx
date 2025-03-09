import { RainbowButton } from "./rainbow-button";

interface MagicButtonProps {
  children: React.ReactNode;
}

const MagicButton = ({ children, onClick }: any, props: any) => {
  return (
    <RainbowButton
      style={{ borderRadius: "16px", whiteSpace: "nowrap" }}
      onClick={onClick}
      {...props}
    >
      {children}
    </RainbowButton>
  );
};

export default MagicButton;
