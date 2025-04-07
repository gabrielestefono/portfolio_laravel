import { PresentationBottom } from "@/types";
import estilo from "./InfoPresentation.module.scss";

export default function InfoPresentation({
  initialDate,
  projects,
  support,
}: Readonly<PresentationBottom>) {
  const today = new Date();
  const initialDateObj = new Date(initialDate);
  const dateDiff = today.getFullYear() - initialDateObj.getFullYear();
  return (
    <div className={estilo.infopresentation}>
      <div>
        <div>
          <div className={`${estilo.primaryIcon} ${estilo.icon1}`}></div>
          <div className={estilo.text}>
            <h3>
              {dateDiff} {dateDiff > 0 ? "anos" : "ano"}
            </h3>
            <p>Experiência</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className={`${estilo.primaryIcon} ${estilo.icon2}`}></div>
          <div className={estilo.text}>
            <h3>{projects}+ Projetos</h3>
            <p>Completos</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className={`${estilo.primaryIcon} ${estilo.icon3}`}></div>
          <div className={estilo.text}>
            <h3>{support}</h3>
            <p>Suporte</p>
          </div>
        </div>
      </div>
    </div>
  );
}
