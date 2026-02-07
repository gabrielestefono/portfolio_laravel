import LayoutBase from "@/components/layouts/LayoutBase";
import { ProjectCard } from "@/components/Projects/ProjectCard";
import Separator from "@/components/Separator";
import style from "../../styles/projects.module.scss";

export interface Project {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: "1",
    slug: "ecommerce-platform",
    name: "E-commerce Platform",
    category: "Web Application",
    description:
      "Plataforma completa de e-commerce com carrinho, checkout e painel admin.",
    longDescription:
      "Uma plataforma de e-commerce moderna e escalável, construída com foco em performance e experiência do usuário. Inclui funcionalidades como carrinho de compras persistente, checkout integrado com múltiplas formas de pagamento, painel administrativo completo para gestão de produtos, pedidos e clientes, além de relatórios e analytics em tempo real.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Stripe",
    ],
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    ],
    githubUrl: "https://github.com/usuario/ecommerce",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: "2",
    slug: "task-manager-app",
    name: "Task Manager App",
    category: "Productivity",
    description:
      "Aplicativo de gerenciamento de tarefas com drag-and-drop e colaboração.",
    longDescription:
      "Aplicativo de produtividade inspirado no Trello e Notion, permitindo organização visual de tarefas através de quadros Kanban. Possui funcionalidades de arrastar e soltar, colaboração em tempo real entre membros da equipe, notificações, etiquetas personalizáveis e integração com calendário.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop",
    ],
    githubUrl: "https://github.com/usuario/taskmanager",
    liveUrl: "https://taskmanager-demo.vercel.app",
    featured: true,
  },
  {
    id: "3",
    slug: "ai-chatbot",
    name: "AI Chatbot Assistant",
    category: "Artificial Intelligence",
    description: "Chatbot inteligente com processamento de linguagem natural.",
    longDescription:
      "Assistente virtual baseado em inteligência artificial, capaz de entender e responder perguntas em linguagem natural. Utiliza modelos de machine learning para melhorar respostas ao longo do tempo, suporta múltiplos idiomas e pode ser integrado a diversos canais de comunicação.",
    technologies: ["Python", "FastAPI", "OpenAI", "LangChain", "Pinecone"],
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1684487746976-7d4e4a9e173c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1675557009483-e21a35c0d593?w=800&h=600&fit=crop",
    ],
    githubUrl: "https://github.com/usuario/ai-chatbot",
    featured: false,
  },
  {
    id: "4",
    slug: "fitness-tracker",
    name: "Fitness Tracker",
    category: "Health & Fitness",
    description: "App mobile para acompanhamento de treinos e nutrição.",
    longDescription:
      "Aplicativo completo para acompanhamento de atividades físicas e alimentação. Inclui biblioteca de exercícios com vídeos demonstrativos, criação de treinos personalizados, rastreamento de calorias e macronutrientes, gráficos de progresso e integração com wearables.",
    technologies: ["React Native", "Expo", "Firebase", "Chart.js"],
    images: [
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
    ],
    githubUrl: "https://github.com/usuario/fitness-tracker",
    liveUrl: "https://fitness-tracker-demo.vercel.app",
    featured: true,
  },
  {
    id: "5",
    slug: "portfolio-generator",
    name: "Portfolio Generator",
    category: "Developer Tools",
    description:
      "Ferramenta para criar portfólios profissionais automaticamente.",
    longDescription:
      "Gerador de portfólios para desenvolvedores que importa automaticamente projetos do GitHub, gera descrições com IA e permite customização completa do design. Inclui templates prontos, preview em tempo real e deploy com um clique.",
    technologies: ["Next.js", "Vercel AI SDK", "GitHub API", "Tailwind CSS"],
    images: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522542550221-31fd8575f348?w=800&h=600&fit=crop",
    ],
    githubUrl: "https://github.com/usuario/portfolio-generator",
    featured: false,
  },
  {
    id: "6",
    slug: "social-media-dashboard",
    name: "Social Media Dashboard",
    category: "Analytics",
    description: "Dashboard para análise de métricas de redes sociais.",
    longDescription:
      "Painel centralizado para monitoramento e análise de performance em múltiplas redes sociais. Oferece visualizações de dados em tempo real, comparativos de período, insights automáticos gerados por IA e exportação de relatórios personalizados.",
    technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL", "Docker"],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
    ],
    githubUrl: "https://github.com/usuario/social-dashboard",
    liveUrl: "https://social-dashboard-demo.vercel.app",
    featured: false,
  },
];

export default function projetos() {
  // const text = "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.";

  return (
    <LayoutBase>
      <main className={style["projects"]}>
        <div>
          <Separator titulo="Projetos" />
          <div>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {projects.length === 0 && (
            <div>
              <div>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3>Nenhum projeto ainda</h3>
              <p>Em breve novos projetos serão adicionados.</p>
            </div>
          )}
        </div>
      </main>
    </LayoutBase>
  );
}
