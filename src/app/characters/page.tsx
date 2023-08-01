'use client'
import { useRouter } from 'next/navigation'
import { isAuthenticated } from '../utils/auth'
import { Logout } from '../components/Logout'

const Characters = () => {
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

export default Characters
