import Image from "next/image";
import styles from "./styles.module.scss";
import logoDeviliar from "../../../public/assets/images/logo_deviliar.png";
import apresentacao from '../../../public/videos/world_deviliar.gif'

export function SobreContent() {
  return (
    <>
      <div className={styles.container} id="about">
        <section>
          <div className={styles.apresentacao}>
            <Image src={logoDeviliar} alt="Logo Deviliar" />
            <Image className={styles.world} src={apresentacao} alt="Video de apresentação"/>
            <p>
              No âmbito do marketing, nossa estratégia é centrada na compreensão
              profunda de seus objetivos. Implementamos táticas de marketing
              digital que não apenas aumentam a visibilidade, mas também geram
              resultados tangíveis. Nossa abordagem integrada garante que o
              design, desenvolvimento e marketing trabalhem em conjunto, criando
              uma sinfonia coesa que leva sua presença online a novas alturas.
            </p>
          </div>
          <div className={styles.texto}>
            <h1>Comprometimento Excepcional:</h1>
            <p>
              Na Deviliar, nosso compromisso com o trabalho e com você é
              incomparável. Estamos dedicados a entregar resultados
              extraordinários, colocando seu sucesso no centro de tudo o que
              fazemos.
            </p>
            <p>
              Nosso time é impulsionado por uma paixão incessante por
              excelência, refletindo-se em cada projeto que abraçamos. Cada
              membro da equipe é guiado por um comprometimento inabalável em
              superar expectativas e proporcionar soluções que transcendam o
              comum.
            </p>
            <p>
              Acreditamos que o verdadeiro sucesso só é alcançado quando nossos
              clientes alcançam seus objetivos. Por isso, nos esforçamos para
              compreender suas necessidades, colaborar de perto e personalizar
              estratégias que não apenas atendam, mas ultrapassem suas metas.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
