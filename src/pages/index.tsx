import { FooterCotent } from '@/components/FooterContent'
import { Header } from '@/components/Header'
import { HomeContent } from '@/components/HomeContent'
import { ServicosContent } from '@/components/ServicosContent'
import { SobreContent } from '@/components/SobreContent'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Deviliar</title>
        <meta name="description" content="Deviliar, Agência de Publicidade Digital. Marketing Digital, Gestão de Tráfego, Growth Hacking, Desenvolvimento, Social Media, Multimídia, Designe, Web Designe." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <HomeContent />
      <ServicosContent />
      <SobreContent />
      <FooterCotent />
    </>
  )
}
