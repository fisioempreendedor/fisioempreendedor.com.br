import { Layout } from '@/components'
import { getAllEvents } from '@/pages/api/events'
import EventsType from '@/types/events'
import { NAME } from '@/utils/constants';
import { Card, CardBody, Divider, Link, CardFooter } from '@nextui-org/react';
import { NextSeo } from 'next-seo';

export default function EventsPage({ allEvents }: { allEvents: EventsType[]; }) {
  return (
    <>
      <NextSeo
        title={`Eventos | ${NAME}`}
        description="Mentoria e Educação em Gestão Empresarial especializadas em Fisioterapeutas."
        openGraph={{
          title: `Eventos | ${NAME}`,
          description: "Mentoria e Educação em Gestão Empresarial especializadas em Fisioterapeutas.",
          url: "https://www.fisioempreendedor.com.br/eventos",
          site_name: `Carol Lima - ${NAME}`,
        }}
      />
      <Layout>
        <h1 className="text-4xl w-full font-bold text-secondary py-4">Eventos</h1>
        <Card className='flex p-8 gap-8'>
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
      </Layout>
    </>
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
