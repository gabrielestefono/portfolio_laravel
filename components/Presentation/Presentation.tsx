import { Presentation } from "@/interfaces/Landing";
import TopPresentation from "./TopPresentation";
import InfoPresentation from "./InfoPresentation";

interface PresentationProps {
  presentation: Presentation;
}

export default function presentation({
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
