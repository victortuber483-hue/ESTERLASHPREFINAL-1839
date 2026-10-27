import { GlitterBackground } from "../components/glitter-background";
import { FrameHero } from "../components/frame-hero";
import { WhatsAppButton } from "../components/whatsapp-button";
import { LightTransition } from "../components/light-transition";
import { Services } from "../components/services";
import { AboutEster } from "../components/about-ester";

function Index() {
  return (
    <main aria-label="Apresentação">
      <div className="hero-shell">
        <FrameHero />
        <LightTransition />
      </div>
      <div className="page-content">
        <GlitterBackground />
        <div className="page-content__inner">
          <Services />
          <AboutEster />
        </div>
      </div>
      <WhatsAppButton />
    </main>
  );
}

export default Index;
