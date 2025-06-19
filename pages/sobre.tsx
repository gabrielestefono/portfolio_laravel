import AboutInner from "@/components/AboutInner/AboutInner";
import HeroSection from "@/components/HeroSection/HeroSection";
import LayoutBase from "@/components/layouts/LayoutBase";
import SobreMeta from "@/components/meta/SobreMeta";

export default function contato() {
  return (
    <LayoutBase metaTags={<SobreMeta />}>
      <HeroSection text="Sobre Mim" />
      <AboutInner />
    </LayoutBase>
  );
}
