import SparklesText from "./sparkles-text";

const Text = ({ text, className, textGradient }: any) => {
  return (
    <SparklesText
      text={text}
      className={className}
      textGradient={textGradient}
    />
  );
};

export default Text;
