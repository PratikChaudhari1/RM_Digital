import { WordFadeIn } from "@/components/ui/word-fade-in";

export function BlurFateText({ text, delay = 0.4, className = "" }: any) {
  return <WordFadeIn words={text} delay={delay} className={className} />;
}
