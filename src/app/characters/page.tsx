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
    <div className="h-full w-full flex flex-col items-center justify-center gap-4  from-black to-gray-950 bg-gradient-to-b">
      <h1 className="text-6xl text-amber-400">ESCOLHA A SUA CLASSE</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {classList?.map(classItem => (
          <ClassCard key={classItem.className} {...classItem} />
        ))}
      </div>
    </div>
  )
}

export default Characters
