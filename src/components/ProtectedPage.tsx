import { ReactNode } from 'react'
import { signIn, useSession } from 'next-auth/react'

interface Props {
  children?: ReactNode
}

const ProtectedPage = ({ children }: Props) => {
  const { data: session, status } = useSession()

  if (status === 'authenticated') {
    return <div>{children}</div>
  }

  return <button onClick={() => signIn('google')}>Sign in with Google</button>
}

export default ProtectedPage
