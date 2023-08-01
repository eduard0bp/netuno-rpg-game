'use client'
import { useRouter } from 'next/navigation'
import { isAuthenticated } from '../utils/auth'
import { Logout } from '../components/Logout'

const Mounts = () => {
  const router = useRouter()

  if (!isAuthenticated()) {
    router.push('/')
    return null
  }

  return (
    <>
      <Logout />
    </>
  )
}

export default Mounts
