'use client'
import { useRouter } from 'next/navigation'
import { isAuthenticated } from '../utils/auth'
import { Logout } from '../components/Logout'
import ClassCards from '../components/ClassCard'

const Characters = () => {
  const router = useRouter()

  if (!isAuthenticated()) {
    router.push('/')
    return null
  }

  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-4 bg-gray-500">
      <h1 className="text-6xl">ESCOLHA A SUA CLASSE!</h1>
      <div>
        <ClassCards />
      </div>
    </div>
  )
}

export default Characters
