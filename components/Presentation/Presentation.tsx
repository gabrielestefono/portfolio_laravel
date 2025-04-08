import { Presentation } from "@/types";
import TopPresentation from "./TopPresentation";
import InfoPresentation from "./InfoPresentation";

export default function presentation({
  presentationTop,
  presentationBottom,
}: Readonly<Presentation>) {
  return (
    <>
      <TopPresentation {...presentationTop} />
      {/* <InfoPresentation {...presentationBottom} /> */}
    </>
  );
}
