import { depositions } from "@/public/data/depositions"
import { Card, CardBody, Divider, User, Link } from "@nextui-org/react"

const Depositions = ({ type = 'default' } : { type?: 'default' | 'all'}) => (
  <Card className='p-4'>
    <CardBody className='flex flex-col gap-8'>
      {type === 'default' ? <Link href="/depoimentos" className="text-3xl w-fit font-bold text-secondary">Depoimentos</Link> : null}
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
        {depositions.slice(0, 3).map(item => (
          <Card key={item.author} className="p-4 bg-background">
            <CardBody className="flex-col gap-4 items-start">
              <p className="text-base flex-1">{item.text}</p>
              <Divider />
              <User name={item.author} description={item.role} avatarProps={{ src: item.avatar }} />
            </CardBody>
          </Card>
        ))}
      </div>
      {type === 'default' ? (
        <div className="flex justify-end">
          <Link href="/depoimentos" className='w-fit text-secondary'>Mais depoimentos</Link>
        </div>
      ) : null}
    </CardBody>
  </Card>
)

export default Depositions