'use client'
import { useState } from 'react'
import MountCard from '../components/MountCard'
import { useRouter } from 'next/navigation'
import { isAuthenticated } from '../utils/auth'
import cavalo from '../../../public/images/cavalo.jpg'
import dragao from '../../../public/images/dragao.jpg'
import pegaso from '../../../public/images/pegaso.jpg'
import grifo from '../../../public/images/grifo.jpg'
import unicornio from '../../../public/images/unicornio.webp'

const Mounts: React.FC = () => {
  const [selectedMount, setSelectedMount] = useState<string | null>(null)

  const router = useRouter()

  if (!isAuthenticated()) {
    router.push('/')
    return null
  }

  const mountList = [
    {
      mountName: 'Cavalo',
      mountColor: 'brown',
      speed: 30,
      personality: 'Leal',
      specialAbility: 'Carga Poderosa',
      image: `${cavalo.src}`
    },
    {
      mountName: 'Dragão',
      mountColor: 'green',
      speed: 50,
      personality: 'Imprevisível',
      specialAbility: 'Sopro de Fogo',
      image: `${dragao.src}`
    },
    {
      mountName: 'Pégaso',
      mountColor: 'white',
      speed: 40,
      personality: 'Gentil',
      specialAbility: 'Voo Celestial',
      image: `${pegaso.src}`
    },
    {
      mountName: 'Grifo',
      mountColor: 'yellow',
      speed: 45,
      personality: 'Corajoso',
      specialAbility: 'Ataque Veloz',
      image: `${grifo.src}`
    },
    {
      mountName: 'Unicórnio',
      mountColor: 'purple',
      speed: 35,
      personality: 'Misterioso',
      specialAbility: 'Cura Mágica',
      image: `${unicornio.src}`
    }
  ]

  const handleMountSelect = (mountName: string) => {
    setSelectedMount(mountName)
    sessionStorage.setItem('selectedMount', JSON.stringify(mountName))
    router.push('/details')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-950 flex flex-col items-center justify-center gap-4 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40">
      <h1 className="text-6xl text-amber-400">ESCOLHA A SUA MONTARIA</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {mountList.map(mount => (
          <MountCard
            key={mount.mountName}
            {...mount}
            onSelect={handleMountSelect}
            image={mount.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Mounts
