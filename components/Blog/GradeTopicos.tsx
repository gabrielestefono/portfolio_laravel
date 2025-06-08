import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import styles from "./GradeTopicos.module.scss";
import { Category } from "@/interfaces/Estude-comigo";

export default function GradeTopicos({
  topicos,
}: Readonly<{ topicos: Category[] }>) {
  const [hoveredTopic, setHoveredTopic] = useState<string | null>(null);
  return (
    <div className={styles.motion}>
      {topicos.map((topico) => (
        <Link href={`/estude-comigo/${topico.roadmap.slug}`} key={topico.id}>
          <motion.div
            className={styles.motion_container}
            style={{
              borderColor:
                hoveredTopic === topico.roadmap.slug
                  ? topico.color
                  : "transparent",
              backgroundColor: `${topico.color}20`,
              transform:
                hoveredTopic === topico.roadmap.slug
                  ? "scale(1.02)"
                  : "scale(1)",
            }}
            onMouseEnter={() => setHoveredTopic(topico.roadmap.slug)}
            onMouseLeave={() => setHoveredTopic(null)}
          >
            <div>
              <div>{topico.icon}</div>
              <h3 style={{ color: topico.color }}>{topico.title}</h3>
              <p>{topico.description}</p>
            </div>
            <div style={{ backgroundColor: topico.color }}>
              <span>Explorar</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
