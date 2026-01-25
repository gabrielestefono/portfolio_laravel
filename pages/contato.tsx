import ContactMe from "@/components/ContactMe/ContactMe";
import HeroSection from "@/components/HeroSection/HeroSection";
import LayoutBase from "@/components/layouts/LayoutBase";
import ContactMeta from "@/components/meta/ContactMeta";
import Separator from "@/components/Separator";

export default function contato() {
  return (
    <LayoutBase metaTags={<ContactMeta />}>
      <HeroSection text="Contato" />
      <Separator titulo="Contate-me" />
      <ContactMe espaco={true} />
    </LayoutBase>
  );
}
