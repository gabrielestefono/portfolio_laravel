import Link from "next/link";
import estilo from "./Footer.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <footer className={estilo.footer}>
      <div>
        <div>
          <div>
            <div>
              <Image
                src="/images/white-logo.svg"
                width={132}
                height={61}
                alt="Logotipo"
              />
              <p>
                Explore tópicos interativos e navegue por fluxogramas de
                conhecimento para descobrir conteúdos relacionados.
              </p>
            </div>

            <div>
              <h4>Tópicos</h4>
              <ul>
                <li>
                  <Link
                    href="/estude-comigo/frontend"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Frontend
                  </Link>
                </li>
                <li>
                  <Link
                    href="/estude-comigo/backend"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Backend
                  </Link>
                </li>
                <li>
                  <Link
                    href="/estude-comigo/mobile"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Mobile
                  </Link>
                </li>
                <li>
                  <Link
                    href="/estude-comigo/seo"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    SEO
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4>Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/sobre"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contato"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contato
                  </Link>
                </li>
                <li>
                  <Link
                    href="/politica-de-privacidade"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link
                    href="/termos-de-uso"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Termos de Uso
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4>Newsletter</h4>
              <p>Receba atualizações sobre novos conteúdos.</p>
              <form>
                <input type="email" placeholder="Seu email" required />
                <button type="submit">Inscrever-se</button>
              </form>
            </div>
          </div>

          <div className="pt-8 text-center text-gray-300">
            <p>
              &copy; {new Date().getFullYear()} BlogConhecimento. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
