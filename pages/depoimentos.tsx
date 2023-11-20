import { Layout } from '@/components'
import { Depositions } from '@/components/Cards'

const TestimonialsPage = () => (
  <Layout title="Depoimentos">
    <h1 className="text-4xl w-full font-bold text-secondary py-4">Depoimentos</h1>
    <Depositions type='all' />
  </Layout>
)
  
export default TestimonialsPage