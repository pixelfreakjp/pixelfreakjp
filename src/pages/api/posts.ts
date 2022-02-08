import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { getSession } from 'next-auth/react'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })

  if (!session) return res.status(401).end('Please login first')

  const userId = session.user.id || ''

  if (req.method === 'GET') {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      where: {
        userId
      }
    })

    return res.status(200).json(posts)
  }
}
