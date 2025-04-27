import Link from "next/link";
import styles from "./Frontend.module.scss";
import { ArrowLeftIcon } from "lucide-react";

export default function Frontend() {
  return (
    <div className={styles.frontend}>
      {/* Header */}
      <div>
        <div>
          <div>
            <Link href="/estude-comigo">
              <ArrowLeftIcon size={20} className="mr-2" />
              Voltar para tópicos
            </Link>
          </div>
          <h1>Frontend</h1>
        </div>
      </div>
    </div>
  );
}
