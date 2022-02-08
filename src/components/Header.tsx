import React, { Dispatch, SetStateAction } from 'react'
import { List } from 'phosphor-react'
import { useSession, signIn, signOut } from 'next-auth/react'

const Header: React.FC<{ updateSidebarState: () => void }> = ({ updateSidebarState }) => {
  const { data: session, status } = useSession()

  return (
    <div className="flex flex-row py-4">
      <div className="basis-1/3 flex items-center">
        <List size={32} className="md:hidden" onClick={() => updateSidebarState()} />
      </div>
      <div className="basis-1/3">
        <img src="/images/logo.svg" height="35" width="35" className="h-10 mx-auto" />
      </div>
      <div className="basis-1/3 flex items-center justify-end">
        {status === 'authenticated' ? (
          <p className="text-right" onClick={() => signOut()}>
            ログアウト
          </p>
        ) : (
          <p className="text-right" onClick={() => signIn('google')}>
            ログイン
          </p>
        )}
      </div>
    </div>
  )
}

export default Header
