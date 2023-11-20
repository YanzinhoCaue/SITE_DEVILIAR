import styles from "./styles.module.scss";
import Link from "next/link";
import logoDeviliar from "../../../public/assets/images/logo_deviliar.png";
import Image from "next/image";
import { FaArrowRight } from 'react-icons/fa6';

export function Header() {
  return (
    <>
      <header className={styles.container}>
        <div>
          <Image src={logoDeviliar} alt="Logo Deviliar" />
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#services">Serviços</Link>
              </li>
              <li>
                <Link href="#about">Sobre</Link>
              </li>
              <li>
                <Link href="https://w.app/deviliar" target="_blank"><span>Solicitar Orçamento</span><FaArrowRight/></Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
