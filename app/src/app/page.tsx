import {
  Hero,
  WhyAnthropic,
  EasternEurope,
  TrackRecord,
  Skills,
  ClaudeEffect,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="relative">
      {/* Navigation - fixed */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-sm font-medium text-foreground/80 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border">
            Kamil Grabowski
          </div>
          <a
            href="https://calendar.app.google/xYRrCojKoJ3Ret1P6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* Sections */}
      <Hero />
      <WhyAnthropic />
      <EasternEurope />
      <TrackRecord />
      <Skills />
      <ClaudeEffect />
      <Contact />
    </main>
  );
}
