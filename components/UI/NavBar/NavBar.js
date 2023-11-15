'use client'
import SearchForm from '@/components/forms/SearchForm/SearchForm'
import { signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = ({user}) => {
  return (
     <nav>
      <div className='container navbar'>
        <Link href='/' className='nav_logo'>
          <b>N</b><span>ovem</span>
        </Link>
        <div className='nav_search'>
           <SearchForm />
        </div>

        <div className='nav_menu'>
          {
            !user
            ? <>
            <button className='btn btn_login' onClick={() => signIn('google')}>
              <i className='material-icons'>person</i>
              <span>Log in</span>
            </button>

            <button className='btn btn_icon' onClick={() => signIn('google', {callbackUrl: '/upload'})}>
              <i className='material-icons-outlined'>file_upload</i>
              <span>Submit a photo</span>
            </button>
            </>

            : <>
            <Link href='/upload' className='btn btn_icon'>
            <i className='material-icons-outlined'>file_upload</i>
              <span>Submit a photo</span>
            </Link>

            <Link href={`/profile/${user?._id}`} className='avatar'>
            <Image src={user?.image} alt={user?.name}
            width={40} height={40} sizes='25vw'
            />
            </Link>
            {/* not working */}
            <p>____|{user._id}|___</p> 
            <button onClick={signOut}>{user.name} Logout</button>
            </>
          }
        </div>

        </div>
     </nav>
  )
}

export default NavBar



{/* <div style={{display: 'flex', gap: 50}}>
{
  user
  ? 
  <button onClick={signOut}>{user.name} Logout</button>
  :  
  <button onClick={() => signIn('google')}>Login</button>
}
</div> */}