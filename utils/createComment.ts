import type { NextApiRequest, NextApiResponse } from 'next'
import redis from './redis'
import { v4 as uuid } from 'uuid'
import getUser from './getUser'
import clearUrl from './clearUrl'
import { Comment } from '@/types/comment'

export default async function createComments(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = clearUrl(req.headers.referer)
  const { text } = req.body
  const { authorization } = req.headers

  if (!text || !authorization) {
    return res.status(400).json({ message: 'Missing parameter.' })
  }

  if (!redis) {
    return res
      .status(400)
      .json({ message: 'Failed to connect to redis client.' })
  }

  try {
    // verify user token
    const user = await getUser(authorization)
    if (!user) return res.status(400).json({ message: 'Need authorization.' })

    const { name, picture, sub, email } = user

    const comment: Comment = {
      id: uuid(),
      created_at: Date.now(),
      url,
      text,
      user: { name, picture, sub, email },
    }

    // write data
    await redis.lpush(url, JSON.stringify(comment))

    return res.status(200).json(comment)
  } catch (_) {
    return res.status(400).json({ message: 'Unexpected error occurred.' })
  }
}