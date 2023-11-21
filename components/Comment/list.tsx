import { Comment } from '@/types/comment'
import distanceToNow from '@/utils/dateRelative'
import { useAuth0 } from '@auth0/auth0-react'
import { Button, Divider, User } from '@nextui-org/react'
import { Delete } from '../Icons'

type CommentListProps = {
  comments?: Comment[];
  onDelete: (comment: Comment) => Promise<void>
}

export default function CommentList({ comments, onDelete }: CommentListProps) {
  const { user } = useAuth0()
  return (
    <div className="flex flex-col gap-8">
      {!!comments && comments.length > 0 ? (
        <>
          <h2 className="text-3xl font-bold text-secondary">Comentários</h2>
          {comments?.map((comment, index) => {
            const isAuthor = user && user.sub === comment.user.sub
            const isAdmin =
              user && user.email === process.env.NEXT_PUBLIC_AUTH0_ADMIN_EMAIL
            return (
              <div key={comment.created_at} className="flex flex-col gap-4">
                <p className='text-primary'>{comment.text}</p>
                <div className='flex justify-between'>
                  <User name={comment.user.name} description={distanceToNow(comment.created_at)} avatarProps={{ src: comment.user.picture }} />
                  {(isAdmin || isAuthor) && (
                    <Button
                      isIconOnly 
                      variant='flat'
                      className="px-4 py-2 bg-background w-fit text-red-500"
                      onClick={() => onDelete(comment)}
                      aria-label="Remover comentário"
                    >
                      <Delete />
                    </Button>
                  )}
                </div>
                {comments?.length >= index && <Divider />}
              </div>
            )
          })}
        </>
      ) : (
        <h3 className="text-md text-primary">Nenhum comentário foi encontrado.</h3>
      )}
    </div>
  )
}