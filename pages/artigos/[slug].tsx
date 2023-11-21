import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { CoverImage, Layout} from '@/components'
import { getPostBySlug, getAllPosts } from '@/pages/api/posts'
import markdownToHtml from '@/utils/markdownToHtml'
import type PostType from '@/types/post'
import { BreadcrumbItem, Breadcrumbs, Card, CardBody, Spinner, User } from "@nextui-org/react";
import markdownStyles from '@/styles/markdown-styles.module.css'
import Comment from '@/components/Comment'
import { NAME } from '@/utils/constants'
import { NextSeo } from 'next-seo'

const links = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Artigos',
    url: '/artigos'
  },
]

export default function Post({ post }: {
  post: PostType
}) {
  const router = useRouter()
  const title = `${post.title} | ${NAME}`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  const linksConcat = links.concat({
    name: post.title,
    url: post.slug
  });
  return (
    <>
      <NextSeo
        title={title}
        description={post.excerpt}
        openGraph={{
          title: title,
          description: post.excerpt,
          site_name: title,
          url: `https://www.fisioempreendedor.com.br/artigos/${post.slug}`,
          images: [
            {
              url: `https://www.fisioempreendedor.com.br/artigos${post.ogImage.url}`,
              alt: title,
            },
          ],
        }}
      />
      <Layout>
        {router.isFallback ? (
          <Spinner className='w-full flex h-[calc(100vh-65px)] align-items' color="default" size="lg"/>
        ) : (
          <article className='flex flex-col gap-4'>
            <Breadcrumbs variant='solid'>
              {linksConcat.map(link => (
                <BreadcrumbItem key={link.name} href={link.url}>
                  {link.name}
                </BreadcrumbItem>
              ))}
            </Breadcrumbs>
            <Card className='w-full p-4'>
              <CardBody className="flex flex-col gap-8 p-4 items-start">
                <h1 className="flex text-3xl w-full font-bold text-secondary">{post.title}</h1>
                <div className="flex w-full justify-center bg-background rounded-lg">
                  <CoverImage title={post.title} src={post.coverImage} />
                </div>
                <User name={post.author.name} description="Mentora de Fisioterapeutas" avatarProps={{ src: post.author.picture }} />
                <div
                  className={markdownStyles['markdown']}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </CardBody>
            </Card>
            <Card className='flex flex-col gap-8 p-8'>
              <Comment post={post} />
            </Card>
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
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'excerpt'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
