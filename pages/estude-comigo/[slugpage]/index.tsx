"use client";

import { useRef, useState } from "react";
import styles from "./Roadmap.module.scss";
import Link from "next/link";
import RoadmapSidebar from "@/components/Blog/RoadmapSidebar";
import LayoutBase from "@/components/layouts/LayoutBase";
import { RoadmapBackend } from "@/helpers/RoadmapBackend";
import { GetStaticPropsContext } from "next";
import { Roadmap as RoadmapExtenal } from "@/interfaces/Estude-comigo";

interface NodeType {
  id: number;
  color: string;
  label: string;
  created_at: string;
  updated_at: string;
}

interface EdgeType {
  id: number;
  color: string;
  label: string;
  created_at?: string;
  updated_at?: string;
}

type Edge = {
  id: number;
  id_node_source: number;
  id_node_target: number;
  id_edge_type: number;
  edge_type: EdgeType;
};

interface LinkItemType {
  id: number;
  color: string;
  icon: string;
  svg_icon: string;
  label: string;
  created_at: string;
  updated_at: string;
}

export interface LinkItem {
  id: number;
  label: string;
  id_node_link_type: number;
  url: string;
  id_node: number;
  created_at: string;
  updated_at: string;
  link_type: LinkItemType;
}

export interface Node {
  id: number;
  label: string;
  x: number;
  y: number;
  description: string;
  id_roadmap: number;
  id_node_type: number;
  created_at: string;
  updated_at: string;
  node_type: NodeType;
  links: LinkItem[];
}

interface Roadmap {
  id: number;
  height: number;
  label: string;
  id_category: number;
  created_at: string;
  updated_at: string;
  nodes: Node[];
  edges: Edge[];
}

export async function getStaticPaths() {
  const roadmapBackend = new RoadmapBackend();
  const slugs = await roadmapBackend.getRoadmapsSlugs();
  const paths = slugs.map((slug) => ({
    params: { slugpage: slug },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { slugpage } = context.params as { slugpage: string };
  let notFound = false;
  const roadmapBackend = new RoadmapBackend();
  const data: RoadmapExtenal | undefined = await roadmapBackend.roadmap(
    slugpage
  );
  if (!data) {
    notFound = true;
  }
  return {
    notFound,
    props: { data },
    revalidate: 60,
  };
}

export default function Frontend({
  data,
}: Readonly<{ slugpage: string; data: Roadmap }>) {
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [nodes] = useState<Node[]>(data.nodes);
  const [edges] = useState<Edge[]>(data.edges);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNodeClick = (nodeId: Node) => {
    setSelectedNode(nodeId);
    setSidebarOpen(true);
  };

  const closeSidebar = () => setSidebarOpen(false);

  const topicTitle = data.label;

  const toggleNodeCompletion = (nodeId: Node) => {};

  return (
    <LayoutBase estudeComigo={true}>
      <div className={styles.frontend}>
        {/* Header */}
        <div>
          <div>
            <div>
              <div>
                <nav>
                  <Link href="/estude-comigo">Estude comigo</Link>
                  <span className={styles.separator}>/</span>
                  <span>{topicTitle}</span>
                </nav>

                <h1>{topicTitle}</h1>
                <p>
                  {new Date().toLocaleDateString()} às{" "}
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>

              <div>
                {/* <button /* onClick={handleShare} title={shareTooltip} >
                  <Share2 size={18} />
                  <span>Compartilhar</span>
                </button> */}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h2>Mapa de Aprendizado: {topicTitle}</h2>
            <p>
              Explore o fluxograma abaixo para navegar pelos conceitos e
              recursos relacionados a {topicTitle.toLowerCase()}. Clique em
              qualquer nó para ver mais detalhes e recursos.
            </p>

            <div ref={svgContainerRef}>
              <div>
                <svg
                  width="100%"
                  height="100%"
                  viewBox={`0 0 800 ${data.height}`}
                >
                  {edges.map((edge) => {
                    const sourceNode = nodes.find(
                      (n) => n.id === edge.id_node_source
                    );
                    const targetNode = nodes.find(
                      (n) => n.id === edge.id_node_target
                    );

                    if (!sourceNode || !targetNode) return null;

                    const sourceX = sourceNode.x + 75;
                    const sourceY = sourceNode.y + 30;
                    const targetX = targetNode.x + 75;
                    const targetY = targetNode.y + 30;

                    return (
                      <path
                        key={edge.id}
                        d={`M${sourceX},${sourceY} C${sourceX},${
                          (sourceY + targetY) / 2
                        } ${targetX},${
                          (sourceY + targetY) / 2
                        } ${targetX},${targetY}`}
                        stroke={edge.edge_type.color}
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="10,5"
                        style={{ animation: "dashmove 1s linear infinite" }}
                      />
                    );
                  })}

                  {nodes.map((node) => {
                    const isSelected = node.id === selectedNode?.id;

                    const bgColor = node.node_type.color ?? "#1e293b";
                    const borderColor = isSelected ? "#60a5fa" : "#334155";

                    return (
                      <g
                        key={node.id}
                        transform={`translate(${node.x}, ${node.y})`}
                        onClick={() => handleNodeClick(node)}
                        className={styles.gElement}
                      >
                        <rect
                          width="250"
                          height="60"
                          rx="6"
                          ry="6"
                          fill={bgColor}
                          stroke={borderColor}
                          strokeWidth="2"
                        />
                        <text
                          x="125"
                          y="30"
                          textAnchor="middle"
                          fill="white"
                          fontSize="14"
                          fontWeight={isSelected ? "bold" : "normal"}
                          alignmentBaseline="middle"
                          dominantBaseline="middle"
                        >
                          {node.label}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className={styles.instructions}>
            <h2>Como usar este mapa</h2>
            <div>
              <div>
                <div>
                  <span>1</span>
                </div>
                <h3>Explore o Fluxograma</h3>
                <p className="text-gray-600">
                  Navegue pelo fluxograma para entender a relação entre os
                  diferentes conceitos.
                </p>
              </div>

              <div>
                <div>
                  <span>2</span>
                </div>
                <h3>Clique nos Nós</h3>
                <p className="text-gray-600">
                  Clique em qualquer nó para ver detalhes, descrições e recursos
                  relacionados.
                </p>
              </div>

              <div>
                <div>
                  <span>3</span>
                </div>
                <h3>Acompanhe seu Progresso</h3>
                <p className="text-gray-600">
                  Marque os tópicos como concluídos para acompanhar seu
                  progresso de aprendizado.
                </p>
              </div>
            </div>
          </div>
        </div>

        <RoadmapSidebar
          isOpen={sidebarOpen}
          onClose={closeSidebar}
          node={selectedNode}
          onToggleCompletion={toggleNodeCompletion}
        />
      </div>
    </LayoutBase>
  );
}
