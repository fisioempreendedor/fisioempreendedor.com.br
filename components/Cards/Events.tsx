import { Card, CardBody, Link } from "@nextui-org/react"
import EventsType from '@/types/events'
import { Banner } from "../Events"

const Events = ({ allEvents, type = 'default' } : { allEvents?: EventsType; type?: 'default' | 'all' }) => {
  return (
    <Card className='p-4'>
      <CardBody className='flex flex-col gap-8'>
        {type === 'default' ? <Link href="/eventos" className="text-3xl w-fit font-bold text-secondary">Eventos</Link> : null}
        <Banner nextEvent={allEvents} />
        {type === 'default' ? (
          <div className="flex justify-end">
            <Link href="/eventos" className='w-fit text-secondary'>Mais eventos</Link>
          </div>
        ) : (
          <div className="flex justify-end">
            <Link href={`eventos/${allEvents?.slug}`} className="w-fit text-secondary">
              Saiba mais
            </Link>
          </div>
        )}
      </CardBody>
    </Card>
  )
}

export default Events