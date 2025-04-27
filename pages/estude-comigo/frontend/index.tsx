import { useRef, useState } from "react";
import styles from "./Frontend.module.scss";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { roadmapData as roadmapDatas } from "../../../mocks/roadmapData";
import RoadmapSidebar, { RoadmapNodeData } from "@/components/Blog/RoadmapSidebar";

type NodeType = "topic" | "subtopic" | "post" | "external";

type Node = {
  id: string;
  type: NodeType;
  label: string;
  description?: string;
  x: number;
  y: number;
  color?: string;
  link?: string;
};

export default function Frontend() {
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const [roadmapData, setRoadmapData] = useState(roadmapDatas);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNodeClick = (nodeId: string) => {
    setSelectedNode(nodeId);
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const selectedNodeData = selectedNode
    ? roadmapData.nodes.find((node) => node.id === selectedNode)?.data
    : null;

  const topicTitle =
    nodes.find((node) => node.type === "topic")?.label || "Tópico";

  const toggleNodeCompletion = (nodeId: string) => {};

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
          <h1>{topicTitle}</h1>
          <p>Explore o mapa de conhecimento interativo</p>
        </div>
      </div>
      <div>
        <div ref={svgContainerRef}>
          <div>
            <svg width="100%" height="100%" viewBox="0 0 1000 600">
              {roadmapData.edges.map((edge) => {
                const sourceNode = roadmapData.nodes.find(
                  (n) => n.id === edge.source
                );
                const targetNode = roadmapData.nodes.find(
                  (n) => n.id === edge.target
                );

                if (!sourceNode || !targetNode) return null;

                const sourceX = sourceNode.position.x + 75;
                const sourceY = sourceNode.position.y + 30;
                const targetX = targetNode.position.x + 75;
                const targetY = targetNode.position.y + 30;

                return (
                  <path
                    key={edge.id}
                    d={`M${sourceX},${sourceY} C${sourceX},${
                      (sourceY + targetY) / 2
                    } ${targetX},${
                      (sourceY + targetY) / 2
                    } ${targetX},${targetY}`}
                    stroke="#4c5a9e"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray={edge.animated ? "5,5" : "none"}
                  />
                );
              })}

              {roadmapData.nodes.map((node) => {
                const isSelected = node.id === selectedNode;
                const nodeType = node.data.type || "skill";

                let bgColor = "#1e293b";
                let borderColor = "#334155";

                switch (nodeType) {
                  case "start":
                    bgColor = "#064e3b";
                    borderColor = "#10b981";
                    break;
                  case "end":
                    bgColor = "#4c1d95";
                    borderColor = "#8b5cf6";
                    break;
                  case "resource":
                    bgColor = "#78350f";
                    borderColor = "#f59e0b";
                    break;
                }

                if (isSelected) {
                  borderColor = "#60a5fa";
                }

                return (
                  <g
                    key={node.id}
                    transform={`translate(${node.position.x}, ${node.position.y})`}
                    onClick={() => handleNodeClick(node.id)}
                    className={`roadmap-node ${styles.gElement}`}
                  >
                    <rect
                      width="150"
                      height="60"
                      rx="6"
                      ry="6"
                      fill={bgColor}
                      stroke={borderColor}
                      strokeWidth="2"
                    />
                    <text
                      x="75"
                      y="35"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                      fontWeight={isSelected ? "bold" : "normal"}
                      className="select-none pointer-events-none"
                    >
                      {node.data.label}
                    </text>
                    {node.data.completed && (
                      <circle cx="135" cy="15" r="6" fill="#10b981" />
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Sidebar for node details */}
        <RoadmapSidebar
          isOpen={sidebarOpen}
          onClose={closeSidebar}
          nodeData={selectedNodeData as RoadmapNodeData}
          nodeId={selectedNode}
          onToggleCompletion={toggleNodeCompletion}
        />
      </div>
    </div>
  );
}
