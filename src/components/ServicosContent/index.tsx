import styles from "./styles.module.scss";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { PiMetaLogoBold } from "react-icons/pi";
import { FaTiktok } from "react-icons/fa6";
import { SiGoogleads } from "react-icons/si";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaGrinHearts } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { PiTiktokLogoDuotone } from "react-icons/pi";
import { TbFrame } from "react-icons/tb";
import { SiPowerpages } from "react-icons/si";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { HiPaintBrush } from "react-icons/hi2";
import { LuWallpaper } from "react-icons/lu";
import { GiCrystalEye } from "react-icons/gi";
import { GiFoldedPaper } from "react-icons/gi";
import { MdOutlineWallpaper } from "react-icons/md";
import { PiChatTeardropDotsFill } from "react-icons/pi";
import { GiSellCard } from "react-icons/gi";
import { LiaStudiovinari } from "react-icons/lia";
import { MdSpatialAudio } from "react-icons/md";
import { GiBoltEye } from "react-icons/gi";
import { MdAnimation } from "react-icons/md";
import { LuClipboardCopy } from "react-icons/lu";
import { RiSeoLine } from "react-icons/ri";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import trafficManager from '../../../public/videos/traffic_manager.gif'
import socialMedia from '../../../public/videos/social_media.gif'
import webDesigner from '../../../public/videos/web_designer.gif'
import graphcDesigner from '../../../public/videos/graphc_designer.gif'
import copywriter from '../../../public/videos/copywriter.gif'
import seo from '../../../public/videos/seo.gif'

export function ServicosContent() {
  return (
    <>
      <div className={styles.container} id="services">
        <div className={styles.headline}>
          <h1>Como Podemos Transformar Sua Empresa:</h1>
          <h2>
            Descubra Nossos Serviços e Como Podemos Ajudar a Alcançar Seus
            Objetivos.
          </h2>
        </div>
        <ul>
          <li>
            <div>
              <span>
                <MdOutlineRocketLaunch />
              </span>
            </div>
            <h3>Gestão de Tráfego</h3>
            <Image src={trafficManager} alt='Video sobre Gestão de Trafego'/>
            <section>
              <p>
                Posicione-se com Maestria na Internet e Alavanque Seu Sucesso
                com:
              </p>
              <span>
                <PiMetaLogoBold /> Facebook Ads: Conquiste Audiências.
              </span>
              <br />
              <span>
                <FaTiktok /> TikTok Ads: Atraia a Geração Z com Estilo.
              </span>
              <br />
              <span>
                <SiGoogleads /> Google Ads: No Topo dos Resultados.
              </span>
              <br />
              <p>A Rota para Reconhecimento e Conversões Poderosas!</p>
            </section>
            <Link href="https://w.app/deviliar" target="_blank">
              <span>
                Contratar Serviço <FaArrowRight />
              </span>
            </Link>
          </li>
          <li>
            <div>
              <span>
                <IoShareSocialOutline />
              </span>
            </div>
            <h3>Social Media</h3>
            <Image src={socialMedia} alt="Video sobre Social Media"/>
            <section>
              <p>Estratégias de Social Media para Elevar Sua Marca:</p>
              <span>
                <FaGrinHearts /> Conteúdo Impactante: Engajamento.
              </span>
              <br />
              <span>
                <RiInstagramFill /> Visual no Instagram: Inspire e Conecte.
              </span>
              <br />
              <span>
                <PiTiktokLogoDuotone /> Presença no TikTok: Alcance a Geração Z.
              </span>
              <br />
              <p>
                Nossa Gestão de Social Media: A Chave para uma Presença Online
                Inesquecível!
              </p>
            </section>
            <Link href="https://w.app/deviliar" target="_blank">
              <span>
                Contratar Serviço <FaArrowRight />
              </span>
            </Link>
          </li>
          <li>
            <div>
              <span>
                <TbFrame />
              </span>
            </div>
            <h3>Web Designer</h3>
            <Image src={webDesigner} alt="Video sobre Web Designer"/>
            <section>
              <p>Destaque-se com Nosso Serviço de Web Design, Incluindo:</p>
              <span>
                <SiPowerpages /> Landing Pages que Convertem Leads.
              </span>
              <br />
              <span>
                <MdOutlineDeveloperMode /> Desenvolvimento Web Responsivo.
              </span>
              <br />
              <span>
                <HiPaintBrush /> Design UI/UX que Facilita o Engajamento.
              </span>
              <br />
              <p>
                Sua Jornada Digital Começa Aqui! Atraia Clientes, Supere as
                Expectativas!
              </p>
            </section>
            <Link href="https://w.app/deviliar" target="_blank">
              <span>
                Contratar Serviço <FaArrowRight />
              </span>
            </Link>
          </li>
          <li>
            <div>
              <span>
                <LuWallpaper />
              </span>
            </div>
            <h3>Designer Gráfico</h3>
            <Image src={graphcDesigner} alt="Video sobre Designer Grafico"/>
            <section>
              <p>
                Descubra o Poder do Design Gráfico Personalizado, Incluindo:
              </p>
              <span>
                <GiCrystalEye /> Identidade Visual Marcante.
              </span>
              <br />
              <span>
                <MdOutlineWallpaper /> Material Gráfico Impactante.
              </span>
              <br />
              <span>
                <GiFoldedPaper /> Designs Inovadores para Impressão.
              </span>
              <br />
              <p>
                Transforme Sua Narrativa Visual! Onde a Criatividade Encontra a
                Eficácia!
              </p>
            </section>
            <Link href="https://w.app/deviliar" target="_blank">
              <span>
                Contratar Serviço <FaArrowRight />
              </span>
            </Link>
          </li>
          <li>
            <div>
              <span>
                <LuClipboardCopy />
              </span>
            </div>
            <h3>Copywriter</h3>
            <Image src={copywriter} alt="Video sobre Copywriter"/>
            <section>
              <p>Transforme Palavras em Poder: Dê Vida às Suas Ideias</p>
              <span>
                <PiChatTeardropDotsFill /> Conquiste a Atenção Instantaneamente.
              </span>
              <br />
              <span>
                <GiSellCard /> Copy Persuasiva para Conversões.
              </span>
              <br />
              <span>
                <LiaStudiovinari /> Narrativas para Engajamento Duradouro.
              </span>
              <br />
              <p>
                Estratégias de Conteúdo que Vendem! Porque Cada Palavra Conta!
              </p>
            </section>
            <Link href="https://w.app/deviliar" target="_blank">
              <span>
                Contratar Serviço <FaArrowRight />
              </span>
            </Link>
          </li>
          <li>
            <div>
              <span>
                <RiSeoLine />
              </span>
            </div>
            <h3>S.E.O.</h3>
            <Image src={seo} alt="Video sobre SEO"/>
            <section>
              <p>
                Alcance Novos Horizontes com SEO: Destaque sua Presença Online!
              </p>
              <span>
                <MdSpatialAudio /> Conteúdo Otimizado Relevância.
              </span>
              <br />
              <span>
                <GiBoltEye /> Auditoria e Otimização Técnica.
              </span>
              <br />
              <span>
                <MdAnimation /> Resultados Mensuráveis e Impactantes.
              </span>
              <br />
              <p>
                Transforme Sua Visibilidade Online - Onde o SEO Encontra o
                Sucesso!
              </p>
            </section>
            <Link href="https://w.app/deviliar" target="_blank">
              <span>
                Contratar Serviço <FaArrowRight />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
