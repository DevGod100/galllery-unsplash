'use client'
import { signIn, signOut } from 'next-auth/react'
import React from 'react'

const NavBar = ({user}) => {
  return (
    <div style={{display: 'flex', gap: 50}}>
      {
        user
        ? <button onClick={signOut}>{user.name} Logout</button>
        :  <button onClick={() => signIn('google')}>Login</button>
      }
    </div>
  )
}

export default NavBar