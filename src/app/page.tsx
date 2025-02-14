import { Calculator } from "@/components/global/calculator";
import { GithubIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="py-20 px-4 w-full min-h-screen relative">
      <h1 className="text-center text-5xl font-bold text-primary italic">
        Am I coocked??
      </h1>
      <p className="text-center text-muted-foreground mt-8 text-xl max-w-2xl mx-auto">
        Haven't started studying yet? Enter the amount of time that's left until
        your exam and we will calculate if YOU ARE COOCKED (or not).
      </p>
      <Calculator />

      <footer className="absolute bottom-6 left-0 right-0 py-4 text-center text-muted-foreground">
        <div className="flex items-center justify-center gap-2">
          Made by
          <a
            href="https://github.com/JuricLeo"
            className="flex items-center gap-2 text-emerald-700"
          >
            <GithubIcon className="w-4 h-4" />
            <span>JuricLeo<span className="text-muted-foreground">,</span></span>
          </a>
          with <span className="mx-1">❤️</span> for stressed students
        </div>
      </footer>
    </main>
  );
}
