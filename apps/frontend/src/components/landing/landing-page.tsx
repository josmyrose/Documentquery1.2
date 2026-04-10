import { Footer } from "./footer";
import { HeroSection } from "./hero-section";
import { Navbar } from "./navbar";
import { ParticleBackground } from "./particle-background";
import { ToolsSection } from "./tools-section";
import { WorkspacePreview } from "./workspace-preview";

type LandingPageProps = {
  isAuthenticated?: boolean;
};

export function LandingPage({ isAuthenticated = false }: LandingPageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(96,165,250,0.12),transparent_30%),radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_35%)]" />
      <div className="absolute inset-0 bg-black/35" />

      <ParticleBackground />
      <Navbar isAuthenticated={isAuthenticated} />
      <HeroSection isAuthenticated={isAuthenticated} />
      <ToolsSection />
      <WorkspacePreview />
      <Footer />
    </main>
  );
}