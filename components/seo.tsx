import { ROLE } from "@/utils/constants";
import { DefaultSeo } from "next-seo";

const config = {
  title: `Carol Lima - ${ROLE}`,
  description: "Mentoria e Educação em Gestão Empresarial especializadas em Fisioterapeutas.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.fisioempreendedor.com.br/",
    site_name: `Carol Lima - ${ROLE}`,
    images: [
      {
        url: "https://fisioempreendedor.com.br/images/logo/fisio-light.webp",
        alt: `Carol Lima - ${ROLE}`,
      },
    ],
  },
};

export default function SEO() {
  return <DefaultSeo {...config} />;
}