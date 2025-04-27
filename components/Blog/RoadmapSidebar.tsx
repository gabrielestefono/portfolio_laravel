"use client";

import Link from "next/link";
import style from "./RoadmapSidebar.module.scss";

import {
  X,
  ExternalLink,
  CheckCircle,
  Circle,
  Code,
  Briefcase,
  Link2,
  FileText,
} from "lucide-react";

interface LinkItem {
  text: string;
  url: string;
  type: "external" | "internal" | "skill" | "resource" | "documentation";
}

export interface RoadmapNodeData {
  label: string;
  description: string;
  completed?: boolean;
  type?: "start" | "end" | "skill" | "resource";
  links?: LinkItem[];
}

interface RoadmapSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  nodeData: RoadmapNodeData | null;
  nodeId: string | null;
  onToggleCompletion: (nodeId: string) => void;
}

export default function RoadmapSidebar({
  isOpen,
  onClose,
  nodeData,
  nodeId,
  onToggleCompletion,
}: Readonly<RoadmapSidebarProps>) {
  if (!isOpen || !nodeData || !nodeId) {
    return null;
  }

  const handleToggleCompletion = () => {
    onToggleCompletion(nodeId);
  };

  return (
    <div className={style.desktopGeral}>
      <div className={style.desktopClass}>
        <div>
          <button onClick={onClose}>
            <X className="h-5 w-5 cursor-pointer" />
          </button>
        </div>
        <h2>{nodeData.label}</h2>

        <button onClick={handleToggleCompletion}>
          {nodeData.completed ? (
            <>
              <CheckCircle className="h-5 w-5 text-emerald-400" />
              <span>Marcar como não concluído</span>
            </>
          ) : (
            <>
              <Circle className="h-5 w-5 text-slate-400" />
              <span>Marcar como concluído</span>
            </>
          )}
        </button>

        <p>{nodeData.description}</p>

        {nodeData.links && nodeData.links.length > 0 && (
          <div>
            <h3>Links</h3>
            <ul>
              {nodeData.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${getLinkTypeColor(link.type)}`}
                  >
                    {getLinkTypeIcon(link.type)}
                    <span>{link.text}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div>
              <h4>Legenda:</h4>
              <div>
                <div>
                  <ExternalLink className="text-blue-400" />
                  <span>Externo</span>
                </div>
                <div>
                  <Link2 className="text-green-400" />
                  <span>Interno</span>
                </div>
                <div>
                  <Code className="text-yellow-400" />
                  <span>Habilidade</span>
                </div>
                <div>
                  <Briefcase className="text-purple-400" />
                  <span>Recurso</span>
                </div>
                <div>
                  <FileText className="text-pink-400" />
                  <span>Documentação</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Função auxiliar para obter o ícone do tipo de link
function getLinkTypeIcon(type: string) {
  switch (type) {
    case "external":
      return <ExternalLink className="text-blue-400" />;
    case "internal":
      return <Link2 className="text-green-400" />;
    case "skill":
      return <Code className="text-yellow-400" />;
    case "resource":
      return <Briefcase className="text-purple-400" />;
    case "documentation":
      return <FileText className="text-pink-400" />;
    default:
      return <ExternalLink className="text-blue-400" />;
  }
}

// Função auxiliar para obter a cor do tipo de link
function getLinkTypeColor(type: string): string {
  switch (type) {
    case "external":
      return "text-blue-400";
    case "internal":
      return "text-green-400";
    case "skill":
      return "text-yellow-400";
    case "resource":
      return "text-purple-400";
    case "documentation":
      return "text-pink-400";
    default:
      return "text-blue-400";
  }
}
