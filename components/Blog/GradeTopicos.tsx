import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import styles from "./GradeTopicos.module.scss";

export default function GradeTopicos() {
  const topics = [
    {
      id: "frontend",
      title: "Desenvolvimento Frontend",
      description: "HTML, CSS, JavaScript e frameworks modernos",
      icon: "💻",
      color: "#006732",
    },
    {
      id: "mobile",
      title: "Desenvolvimento Mobile",
      description: "Criação de aplicativos para iOS e Android",
      icon: "📱",
      color: "#15295f",
    },
    {
      id: "backend",
      title: "Desenvolvimento Backend",
      description: "Integração, entrega contínua e infraestrutura",
      icon: "⚙️",
      color: "#006732",
    },
    {
      id: "engenharia-software",
      title: "Engenharia de Software",
      description: "Princípios de design, ferramentas e boas práticas",
      icon: "🛠️",
      color: "#15295f",
    },
    {
      id: "matematica",
      title: "Matemática",
      description: "Fundamentos e aplicações práticas",
      icon: "📐",
      color: "#006732",
    },
    {
      id: 'seo',
      title: "SEO e Marketing Digital",
      description: "Otimização para motores de busca e estratégias de marketing",
      icon: "📈",
      color: "#15295f",
    },
    {
      id: "acessibilidade",
      title: "Acessibilidade - A11Y",
      description: "Tornando a web acessível para todos",
      icon: "♿",
      color: "#006732",
    },
    {
      id: "ux-ui",
      title: "UX/UI Design",
      description: "Design centrado no usuário e interfaces intuitivas",
      icon: "🎨",
      color: "#15295f",
    },
    {
      id: "devops",
      title: "DevOps e CI/CD",
      description: "Integração contínua e entrega contínua",
      icon: "🚀",
      color: "#006732",
    }
  ];
  const [hoveredTopic, setHoveredTopic] = useState<string | null>(null);
  return (
    <div className={styles.motion}>
      {topics.map((topic) => (
        <Link href={`/estude-comigo/${topic.id}`} key={topic.id}>
          <motion.div
            className={styles.motion_container}
            style={{
              borderColor:
                hoveredTopic === topic.id ? topic.color : "transparent",
              backgroundColor: `${topic.color}20`, // 20% opacity
              transform: hoveredTopic === topic.id ? "scale(1.02)" : "scale(1)",
            }}
            onMouseEnter={() => setHoveredTopic(topic.id)}
            onMouseLeave={() => setHoveredTopic(null)}
          >
            <div>
              <div>{topic.icon}</div>
              <h3 style={{ color: topic.color }}>{topic.title}</h3>
              <p>{topic.description}</p>
            </div>
            <div style={{ backgroundColor: topic.color }}>
              <span>Explorar</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
