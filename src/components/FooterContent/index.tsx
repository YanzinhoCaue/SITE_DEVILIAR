import Link from "next/link";
import styles from "./styles.module.scss";
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";

export function FooterCotent() {
  return (
    <>
      <footer className={styles.container}>
        <div className={styles.headline}>
          <h1>
            Feche Negócio com a Deviliar e Transforme sua Presença Online Sua
            Jornada Rumo ao Sucesso Começa Aqui!
          </h1>
          <Link href="https://w.app/deviliar" target="_blank">
            <span>Solicitar Orçamento</span><FaArrowRight />
          </Link>
        </div>
        <div className={styles.redes}>
          <p>
            Acompanhe-nos nas Redes Sociais e faça parte da nossa comunidade
            online. Siga a Deviliar para ficar por dentro das últimas novidades
            e tendências!
          </p>
          <ul>
            <li>
              <Link href='https://www.facebook.com/agenciadeviliar/'><FaFacebook /></Link>
            </li>
            <li>
              <Link href=''><FaInstagram /></Link>
            </li>
            <li>
              <Link href='https://www.linkedin.com/in/yan-caue-gomes-pereira'><FaLinkedinIn /></Link>
            </li>
            <li>
              <Link href='https://github.com/YanzinhoCaue'><FaGithub /></Link>
            </li>
            <li>
              <Link href=''><FaBehance /></Link>
            </li>
          </ul>
        </div>
        <p>© 2023 Deviliar - Todos os Direitos Reservados.</p>
      </footer>
    </>
  );
}
