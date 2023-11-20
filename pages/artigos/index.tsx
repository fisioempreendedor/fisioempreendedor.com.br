import { Layout} from '@/components'
import { getAllPosts } from '@/pages/api/posts'
import Post from '@/types/post'
import { Articles } from '@/components/Cards';

export default function ArticlesPage({ allPosts }: { allPosts: Post[]; }) {
  return (
    <Layout title="Artigos">
      <h1 className="text-4xl w-full font-bold text-secondary py-4">Artigos</h1>
      <Articles allPosts={allPosts} type='all' />
    </Layout>
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
