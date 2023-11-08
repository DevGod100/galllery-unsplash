import './Nav.css'
import NavBar from './NavBar'
import getServerUser from '@/utils/getServerUser'

const Nav = async() => {
  const user = await getServerUser()
  return (
    <NavBar user={user}/>
  )
}

export default Nav