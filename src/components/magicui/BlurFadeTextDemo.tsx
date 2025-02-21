import { BlurFade } from "@/components/ui/blur-fade"

export function BlurFadeTextDemo() {
  return (
    <section id="header" className="flex flex-col gap-4  py-24 px-4 sm:px-6 lg:px-8">
      <BlurFade delay={0.25} inView>
        <h2 className="text-3xl font-medium tracking-tighter sm:text-5xl xl:text-6xl/none">
          Hello there 👋
        </h2>
      </BlurFade>
      <BlurFade delay={0.25 * 2} inView>
        <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
          Nice to meet you, Page will load in short time
        </span>
      </BlurFade>
    </section>
  )
}
