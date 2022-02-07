import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { getSession } from 'next-auth/react'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })

  if (!session) return res.status(401).end('ログインしてください')

  const userId = session.user.id
}
