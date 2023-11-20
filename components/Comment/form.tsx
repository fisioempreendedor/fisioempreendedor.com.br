import PostType from '@/types/post'
import { limit } from '@/utils/limitComment'
import { useAuth0 } from '@auth0/auth0-react'
import { Textarea, Button } from '@nextui-org/react'

type CommentFormProps = {
  text: string
  setText: Function
  onSubmit: (e: React.FormEvent) => Promise<void>
  post: PostType
}
export default function CommentForm({
  text,
  setText,
  onSubmit,
  post
}: CommentFormProps) {
  const { isAuthenticated, logout, loginWithPopup } = useAuth0()

  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-8'>
      <div>
        <Textarea
          labelPlacement="outside"
          label="Deixe seu comentário"
          className="flex w-full"
          placeholder={
            isAuthenticated
              ? `Deixe seu comentário sobre o artigo ${post.title}`
              : `Faça o login para deixar seu comentário sobre o artigo ${post.title}`
          }
          onChange={(e) => setText(e.target.value)}
          value={limit(text, 280)}
          disabled={!isAuthenticated}
        />
        <p className='text-foreground-400 mt-2 pl-2'>
          {text.length} / 280 permitidos
        </p>
      </div>
      <div className="flex items-center gap-4">
        {!isAuthenticated && (
          <>
            <Button className="bg-secondary text-background rounded-lg hover:text-primary" onClick={() => loginWithPopup()}>
              Faça o login
            </Button>
            e
          </>
        )}
        <div className="flex items-center justify-between w-full">
          <Button type='submit' className="bg-secondary text-background rounded-lg hover:text-primary" isDisabled={!isAuthenticated || text.length === 0}>
            Enviar
          </Button>
          {isAuthenticated && (
            <Button className="bg-transparent text-secondary rounded-lg hover:bg-background" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Sair
            </Button>
          )}
        </div>
      </div>
    </form>
  )
}