import BlurText from "@/components/common/BlurText";
import DocInput from "@/components/common/DocInput";
import { GradientText } from "@/components/common/GradientText";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <div className="flex flex-col items-center justify-center my-8 gap-2 w-full max-w-4xl">
        <GradientText
          className="md:text-5xl text-3xl font-bold text-center"
          text="Your CV, Smarter & Stronger"
        />
        <BlurText
          text="AI-powered CV reviewer that gives instant feedback, scores, and improvement tips to boost your chances."
          delay={150}
          animateBy="words"
          direction="top"
          className="md:text-lg text-md font-semibold max-w-2xl text-muted-foreground italic"
        />
      </div>

      <DocInput />
    </div>
  );
}
