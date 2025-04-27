"use client"

import styles from './EstudeComigo.module.scss';

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/Blog/Header"
import GradeTopicos from '@/components/Blog/GradeTopicos';
// import { motion } from "framer-motion"

export default function EstudeComigo() {
  // Dados de exemplo para os tópicos principais
  
  return (
    <div className={styles.estudeComigo}>
      {/* Header */}
      <Header/>

      {/* Conteúdo Principal */}
      <div>
        <div>
          <h2>Escolha um tópico para explorar</h2>

          {/* Grade de Tópicos */}
          <GradeTopicos/>

          {/* Seção de Introdução */}
          {/* <div className="mt-16 bg-[#006732]/[0.1] p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#006732]">Como Navegar</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <p className="mb-4">
                  Este blog é organizado como um mapa de conhecimento interativo. Ao invés de uma lista cronológica de
                  posts, você pode explorar tópicos visualmente através de fluxogramas.
                </p>
                <p className="mb-4">
                  Cada tópico tem seu próprio mapa visual, onde você pode clicar nos nós para acessar artigos
                  específicos ou explorar subtópicos relacionados.
                </p>
                <p>
                  Esta abordagem permite que você siga seu próprio caminho de aprendizado, conectando conceitos e
                  descobrindo novas áreas de interesse de forma intuitiva.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Exemplo de mapa de conhecimento"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div> */}

          {/* Tópicos Recentes */}
          {/* <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-[#006732] text-center">Adições Recentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-[#15295f]/[0.1] rounded-lg p-6">
                  <div className="text-sm text-[#15295f] font-medium mb-2">Desenvolvimento Web</div>
                  <h3 className="text-lg font-bold mb-2 text-[#006732]">
                    Entendendo Hooks no React: useState e useEffect
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Um guia completo sobre os hooks mais utilizados no React e como eles podem melhorar seu código.
                  </p>
                  <Link
                    href="/blog/post/react-hooks"
                    className="text-[#006732] font-medium hover:underline flex items-center"
                  >
                    Ler artigo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
