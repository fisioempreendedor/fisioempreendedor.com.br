import { Layout } from '@/components'
import Post from '@/types/post'
import { getAllEvents } from '@/pages/api/events'
import { getAllPosts } from '@/pages/api/posts';
import { Articles, Depositions, Downloads, Events } from '@/components/Cards';
import { Image, Card, CardBody, Button, Link } from '@nextui-org/react';
import { WhatsApp } from '@/components/Icons';
import { ROLE } from '@/utils/constants';
import EventsType from '@/types/events';

export default function Index({ allEvents, allPosts }: { allEvents: EventsType[]; allPosts: Post[]; }) {
  return (
    <Layout>
      <Card className='p-0'>
        <CardBody className='flex flex-col justify-between items-center gap-8 p-0 lg:flex-row'>
          <div className='flex flex-col items-center p-8 gap-8 lg:items-start'>
            <div className='flex flex-col'>
              <h1 className='text-7xl font-bold text-secondary'>Carol Lima</h1>
              <p>{ROLE}</p>
            </div>
            <Button as={Link} variant='ghost' startContent={<WhatsApp />} href="https://wa.me/5534988883448?text=Olá, Carol. Vim através do seu site." className='px-8 w-full' target='_blank'>Fale comigo</Button>
          </div>
          <Image src="/assets/3.webp" alt="Carol Lima" height={500} width={500} className='bg-secondary rounded-none w-full' />
        </CardBody>
      </Card>
      <Events allEvents={allEvents[0]} />
      <Articles allPosts={allPosts} />
      <Downloads />
      <Depositions />
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
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])
  return {
    props: { allEvents, allPosts },
  }
}


