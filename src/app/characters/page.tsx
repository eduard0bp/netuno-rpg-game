'use client'
import { useRouter } from 'next/navigation'
import { isAuthenticated } from '../utils/auth'
import ClassCard from '../components/ClassCard'
import { useClassList } from '../hooks/useClassList'

const Characters = () => {
  const router = useRouter()
  const { classList } = useClassList()

  if (!isAuthenticated()) {
    router.push('/')
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-950 flex flex-col items-center justify-center gap-4 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40">
      <h1 className="text-4xl sm:text-6xl text-amber-400">
        ESCOLHA A SUA CLASSE
      </h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {classList?.map(classItem => (
          <ClassCard key={classItem.className} {...classItem} />
        ))}
      </div>
    </div>
  )
}

export default Characters
