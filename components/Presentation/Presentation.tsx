import { Presentation as PresentationInterface } from "@/interfaces/Landing";
import TopPresentation from "./TopPresentation";
import InfoPresentation from "./InfoPresentation";

interface PresentationProps {
  presentation: PresentationInterface;
}

export default function Presentation({
  presentation,
}: Readonly<PresentationProps>) {
  const { presentationBottom, presentationTop } = presentation;

  return (
    <>
      <TopPresentation presentationTop={presentationTop} />
      <InfoPresentation presentationBottom={presentationBottom} />
    </>
  );
}
