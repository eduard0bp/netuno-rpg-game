import { useRouter } from 'next/navigation'

export const Logout = () => {
  const router = useRouter()

  const handleLogout = () => {
    sessionStorage.removeItem('authenticated')
    sessionStorage.clear()
    router.push('/')
  }

  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}
