import { Layout } from '@/components'
import { Depositions } from '@/components/Cards'
import { ROLE } from '@/utils/constants'
import { NextSeo } from 'next-seo'

const TestimonialsPage = () => (
  <>
    <NextSeo
      title={`Depoimentos | ${ROLE}`}
      description="Alguns relatos de ex-alunos e clientes."
      openGraph={{
        title: `Depoimentos | ${ROLE}`,
        description: "Alguns relatos de ex-alunos e clientes.",
        url: "https://www.fisioempreendedor.com.br/depoimentos",
        site_name: `Carol Lima - ${ROLE}`,
      }}
    />
    <Layout title="Depoimentos">
      <h1 className="text-4xl w-full font-bold text-secondary py-4">Depoimentos</h1>
      <Depositions type='all' />
    </Layout>
  </>
)
  
export default TestimonialsPage