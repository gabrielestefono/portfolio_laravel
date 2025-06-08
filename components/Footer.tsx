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
              {/* <p>
                Explore tópicos interativos e navegue por fluxogramas de
                conhecimento para descobrir conteúdos relacionados.
              </p> */}
            </div>

            <div>
              {/* <h4>Tópicos</h4>
              <ul>
                <li>
                  <Link
                    href="/estude-comigo/frontend"
                  >
                    Frontend
                  </Link>
                </li>
                <li>
                  <Link
                    href="/estude-comigo/backend"
                  >
                    Backend
                  </Link>
                </li>
                <li>
                  <Link
                    href="/estude-comigo/mobile"
                  >
                    Mobile
                  </Link>
                </li>
                <li>
                  <Link
                    href="/estude-comigo/seo"
                  >
                    SEO
                  </Link>
                </li>
              </ul> */}
            </div>

            <div>
              <h4>Links</h4>
              <ul>
                <li>
                  <Link href="/sobre">Sobre</Link>
                </li>
                <li>
                  <Link href="/contato">Contato</Link>
                </li>
                <li>
                  <Link href="/politica-de-privacidade">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="/termos-de-uso">Termos de Uso</Link>
                </li>
              </ul>
            </div>

            {/* <div>
              <h4>Newsletter</h4>
              <p>Receba atualizações sobre novos conteúdos.</p>
              <form>
                <input type="email" placeholder="Seu email" required />
                <button type="submit">Inscrever-se</button>
              </form>
            </div> */}
          </div>

          <div>
            <p>
              &copy; {new Date().getFullYear()} Gabriel Estéfono. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
