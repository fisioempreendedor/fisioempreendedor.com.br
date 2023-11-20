import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { Layout} from '@/components'
import { getEventsBySlug, getAllEvents } from '@/pages/api/events'
import markdownToHtml from '@/utils/markdownToHtml'
import EventsType from '@/types/events'
import { BreadcrumbItem, Breadcrumbs, Card, CardBody, Spinner } from "@nextui-org/react";
import { Detail } from '@/components/Events'
import markdownStyles from '@/styles/markdown-styles.module.css'
import { NAME } from '@/utils/constants'
import { NextSeo } from 'next-seo'

const links = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Eventos',
    url: '/eventos'
  },
]

export default function Events({ events }: {
  events: EventsType
}) {
  const router = useRouter()
  const title = `${events.title} | ${NAME}`
  if (!router.isFallback && !events?.slug) {
    return <ErrorPage statusCode={404} />
  }

  links.push({
    name: events.title,
    url: events.slug
  })

  return (
    <>
      <NextSeo
        title={title}
        description={events.excerpt}
        openGraph={{
          title: title,
          description: events.excerpt,
          site_name: title,
          url: `https://www.fisioempreendedor.com.br/eventos/${events.slug}`,
          images: [
            {
              url: `https://www.fisioempreendedor.com.br/eventos${events.ogImage.url}`,
              alt: title,
            },
          ],
        }}
      />
      <Layout>
        {router.isFallback ? (
          <Spinner className='w-full flex h-[calc(100vh-65px)] align-items' color="default" size="lg"/>
        ) : (
          <article>
            <div className='flex flex-col gap-4'>
              {/* <Breadcrumbs variant='solid'>
                {links.map(link => (
                  <BreadcrumbItem key={link.name} href={link.url}>
                    {link.name}
                  </BreadcrumbItem>
                ))}
              </Breadcrumbs> */}
              <div className='flex flex-col gap-4 lg:flex-row'>
                <div className='flex flex-col w-full gap-4 lg:max-w-md'>
                  <Detail nextEvent={events} />
                </div>
                <Card className='w-full p-4'>
                  <CardBody className="max-w-4xl mx-auto p-4">
                    <h1 className="text-3xl w-full font-bold text-secondary">{events.title}</h1>
                    <div
                      className={markdownStyles['markdown']}
                      dangerouslySetInnerHTML={{ __html: events.content }}
                    />
                  </CardBody>
                </Card>
              </div>
            </div>
          </article>
        )}
      </Layout>
    </>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const events = getEventsBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'excerpt',
    'infos'
  ])
  const content = await markdownToHtml(events.content || '')

  return {
    props: {
      events: {
        ...events,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const events = getAllEvents(['slug'])

  return {
    paths: events.map((event) => {
      return {
        params: {
          slug: event.slug,
        },
      }
    }),
    fallback: false,
  }
}
