import { Layout} from '@/components'
import { getAllPosts } from '@/pages/api/posts'
import Post from '@/types/post'
import { Articles } from '@/components/Cards';
import { ROLE } from '@/utils/constants';
import { NextSeo } from 'next-seo';

export default function ArticlesPage({ allPosts }: { allPosts: Post[]; }) {
  return (
    <>
      <NextSeo
        title={`Artigos | ${ROLE}`}
        description="Mentoria e Educação em Gestão Empresarial especializadas em Fisioterapeutas."
        openGraph={{
          title: `Artigos | ${ROLE}`,
          description: "Mentoria e Educação em Gestão Empresarial especializadas em Fisioterapeutas.",
          url: "https://www.fisioempreendedor.com.br/artigos",
          site_name: `Carol Lima - ${ROLE}`,
        }}
      />
      <Layout>
        <h1 className="text-4xl w-full font-bold text-secondary py-4">Artigos</h1>
        <Articles allPosts={allPosts} type='all' />
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
