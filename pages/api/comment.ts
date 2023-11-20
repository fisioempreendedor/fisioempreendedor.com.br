import type { NextApiRequest, NextApiResponse } from 'next'
import fetchComment from '@/utils/fetchComment'
import createComments from '@/utils/createComment'
import deleteComments from '@/utils/deleteComment'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return fetchComment(req, res)
    case 'POST':
      return createComments(req, res)
    case 'DELETE':
      return deleteComments(req, res)
    default:
      return res.status(400).json({ message: 'Invalid method.' })
  }
}