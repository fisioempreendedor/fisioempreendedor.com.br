import PostType from '@/types/post'
import CommentForm from './form'
import CommentList from './list'
import useComments from '@/utils/hooks/useComment'
import { Divider } from '@nextui-org/react'

export default function Comment({ post } : { post: PostType }) {
  const { text, setText, data, onSubmit, onDelete } = useComments()

  return (
    <>
      <CommentForm onSubmit={onSubmit} text={text} setText={setText} post={post} />
      <Divider />
      <CommentList comments={data} onDelete={onDelete} />
    </>
  )
}