import { ROLE } from '@/utils/constants'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta property="description" content={"Mentoria e Educação em Gestão Empresarial especializadas em Fisioterapeutas."} />
        <meta property="og:title" content={`Carol Lima - ${ROLE}`} />
        <meta property="og:description" content={"Mentoria e Educação em Gestão Empresarial especializadas em Fisioterapeutas."} />
        <meta property="og:url" content="https://fisio-empreendedor.vercel.app" />
        <meta property="og:site_name" content={`Carol Lima - ${ROLE}`} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image:alt" content={`Carol Lima - ${ROLE}`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image" content="https://fisio-empreendedor.vercel.app/assets/logo/fisio-light.webp" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#111010" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}