import { Layout } from '@/components'
import { Events } from '@/components/Cards';
import { getAllEvents } from '@/pages/api/events'
import EventsType from '@/types/events'
import { Card, CardBody, Divider, Link, CardFooter } from '@nextui-org/react';

export default function EventsPage({ allEvents }: { allEvents: EventsType[]; }) {
  const firstEvent = allEvents.shift();
  return (
    <Layout title="Eventos">
      <h1 className="text-4xl w-full font-bold text-secondary py-4">Eventos</h1>
      <Events allEvents={firstEvent} type='all' />
      {allEvents.length > 1 ? (
        <Card className='flex p-8 gap-8'>
          <h2 className="text-3xl font-bold text-secondary">Outros Eventos</h2>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
            {allEvents.map(item => (
              <Card key={item.slug} className="p-0 flex flex-col bg-background">
                <CardBody className="p-0 flex flex-col">
                  <div className='flex flex-col gap-8 items-center'>
                    <div className="flex flex-col gap-4 flex-1 p-4">
                      <Link href={`eventos/${item.slug}`} className="text-xl font-bold hover:text-secondary">
                        {item.title}
                      </Link>
                      <h5 className="text-sm uppercase">exclusivo para <strong className="font-bold text-secondary">fisioterapeutas</strong></h5>
                      <ul className="flex flex-col pl-6">
                        {item.infos.map((info, index) => (
                          <div key={index}>
                            <li className='list-disc py-2 px-0'>
                              {index === item.infos.length - 1 ? <strong className="text-xl font-bold text-secondary">{info}</strong> : <>{info}</>}
                            </li>
                            {index !== item.infos.length - 1 && <Divider/>}
                          </div>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardBody>
                <Divider />
                <CardFooter className='flex justify-end'>
                  <Link href={`eventos/${item.slug}`} className="w-fit text-secondary">
                    Saiba mais
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Card>
      ) : null}
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allEvents = getAllEvents([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'infos'
  ])
  return {
    props: { allEvents },
  }
}
