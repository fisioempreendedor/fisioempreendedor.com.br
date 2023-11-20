import { Card, CardBody, Link } from "@nextui-org/react"
import { downloads } from '@/public/data/downloads/data';

const Downloads = () => (
  <Card className='p-4'>
    <CardBody className='flex flex-col gap-8'>
      <Link href="/materiais-gratuitos" className="text-3xl w-fit font-bold text-secondary">Materiais Gratuitos</Link>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
        {downloads.slice(0, 3).map((item, index) => (
          <Card key={`${item.name}-${index}`} className="p-4 bg-background">
            <CardBody className="flex-col">
              <h3 className="font-bold text-large">{item.name}</h3>
              <Link className="text-default-500 text-secondary" href={item.url} target="_blank" download>Link para download</Link>
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="flex justify-end">
        <Link href="/materiais-gratuitos" className='w-fit text-secondary'>Mais materiais gratuitos</Link>
      </div>
    </CardBody>
  </Card>
)

export default Downloads