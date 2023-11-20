import Image from "next/image";
import styles from "./styles.module.scss";
import miniLogoDeviliar from "../../../public/assets/images/mini_logo_deviliar.png";
import { TbChartInfographic } from "react-icons/tb";
import { PiMedalFill } from "react-icons/pi";
import { IoRocketSharp } from "react-icons/io5";

export function HomeContent() {
  return (
    <>
      <div className={styles.container}>
        <main>
            <ul>
              <li>Potencialize Sua Presença Online:</li>
              <li>
                <TbChartInfographic /> Táticas de Visibilidade Impactantes.
              </li>
              <li>
                <PiMedalFill /> Construção de Marca Memorável.
              </li>
              <li>
                <IoRocketSharp /> Liderança Indiscutível no Mercado.
              </li>
            </ul>
          <div className={styles.headline}>
            <p className={styles.agencia}>Agência</p>
            <p className={styles.digital}>Digital</p>
          </div>
          <Image src={miniLogoDeviliar} alt="Logo Minimalista Deviliar" />
          <div className={styles.subheadline}>
            <h2>
              Dê um Salto à Frente dos Concorrentes com Nossos Excelentes
              Serviços: Seja Inesquecível, Porque quem É Visto
            </h2>
            <h1>É Lembrado!</h1>
          </div>
        </main>
      </div>
    </>
  );
}
