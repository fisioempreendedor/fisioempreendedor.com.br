import { Image, Card, CardBody, Divider, User, Link } from "@nextui-org/react"
import Post from '@/types/post'
import { ROLE } from "@/utils/constants";

const Articles = ({ allPosts, type = 'default' } : { allPosts: Post[]; type?: 'default' | 'all' }) => {
  const typeCardValue = type === 'default' ? allPosts.slice(0, 3) : allPosts;
  return (
    <Card className='p-4'>
      <CardBody className='flex flex-col gap-8'>
        {type === 'default' ? <Link href="/artigos" className="text-3xl w-fit font-bold text-secondary">Artigos</Link> : null}
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
          {typeCardValue.map(item => (
            <Card key={item.slug} className="p-4 bg-background">
              <Link href={`/artigos/${item.slug}`} className='h-full'>
                <CardBody className="flex-col gap-4 h-full items-start justify-between">
                  <Image src={item.coverImage} alt={item.title} height={500} width={500} className='rounded-lg' />
                  <h4 className='text-lg font-bold text-secondary'>{item.title}</h4>
                  <p className="text-sm">{item.excerpt}</p>
                  <Divider />
                  <User name={item.author.name} description={ROLE} avatarProps={{ src: item.author.picture }} />
                </CardBody>
              </Link>
            </Card>
          ))}
        </div>
        {type === 'default' ? (
          <div className="flex justify-end">
            <Link href="/artigos" className='w-fit text-secondary'> Mais artigos</Link>
          </div>
        ) : null}
      </CardBody>
    </Card>
  )
}

export default Articles