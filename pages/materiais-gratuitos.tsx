import { Layout } from '@/components'
import { downloads } from '@/public/data/downloads/data'
import { Accordion, AccordionItem, Link, Card, CardBody } from '@nextui-org/react'

const DownloadsPage = () => (
  <Layout title="Materiais Gratuitos">
    <h1 className="text-4xl w-full font-bold text-secondary py-4">Materiais Gratuitos</h1>
    <Card className='p-4'>
      <CardBody className='flex flex-col gap-8'>
        <Accordion variant="shadow">
          {downloads.map((item, index) => (
            <AccordionItem key={index} aria-label={item.name} title={item.name}>
              <div className='flex flex-col gap-8 bg-background p-6 rounded-lg'>
                {item.description && <p>{item?.description}</p>}
                <div className='flex justify-end'>
                  <Link className="text-secondary w-fit" href={item.url} target="_blank" download>Link para download</Link>
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </CardBody>
    </Card>
  </Layout>
)
  
export default DownloadsPage