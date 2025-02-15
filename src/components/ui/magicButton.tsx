import { RainbowButton } from "./rainbow-button";

interface MagicButtonProps {
    children: React.ReactNode;
}

const MagicButton = ({ children }: MagicButtonProps) => {
    return <RainbowButton style={{ borderRadius:"16px", whiteSpace:"nowrap"}}>{children}</RainbowButton>;
}

export default MagicButton