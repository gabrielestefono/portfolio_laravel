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
import { LinkItem, Node } from "@/pages/estude-comigo/[slugpage]";

interface RoadmapSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  node: Node | null;
  onToggleCompletion: (nodeId: Node) => void;
}

export default function RoadmapSidebar({
  isOpen,
  onClose,
  node,
  onToggleCompletion,
}: Readonly<RoadmapSidebarProps>) {
  if (!isOpen || !node) {
    return null;
  }

  const handleToggleCompletion = () => {
    onToggleCompletion(node);
  };

  return (
    <div className={style.desktopGeral}>
      <div className={style.desktopClass}>
        <div>
          <button onClick={onClose}>
            <X className="h-5 w-5 cursor-pointer" />
          </button>
        </div>
        <h2>{node.label}</h2>

        {/* <button onClick={handleToggleCompletion}>
          {node.completed ? (
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
        </button> */}

        <p>{node.description}</p>

        {node.links && node.links.length > 0 && (
          <div>
            <h3>Links</h3>
            <ul>
              {node.links.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: link.link_type.color }}
                    title={`Link do tipo ${link.link_type.label}`}
                  >
                    <div
                      className={style.icon}
                      dangerouslySetInnerHTML={{
                        __html: link.link_type.svg_icon,
                      }}
                    ></div>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* <div>
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
            </div> */}
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
