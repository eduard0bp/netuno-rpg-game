'use client'
import { useState } from 'react'
import MountCard from '../components/MountCard'
import { useRouter } from 'next/navigation'

const Mounts: React.FC = () => {
  const [selectedMount, setSelectedMount] = useState<string | null>(null)

  const router = useRouter()

  const mountList = [
    {
      mountName: 'Cavalo',
      mountColor: 'brown',
      speed: 30,
      personality: 'Leal',
      specialAbility: 'Carga Poderosa'
    },
    {
      mountName: 'Dragão',
      mountColor: 'green',
      speed: 50,
      personality: 'Imprevisível',
      specialAbility: 'Sopro de Fogo'
    },
    {
      mountName: 'Pégaso',
      mountColor: 'white',
      speed: 40,
      personality: 'Gentil',
      specialAbility: 'Voo Celestial'
    },
    {
      mountName: 'Grifo',
      mountColor: 'yellow',
      speed: 45,
      personality: 'Corajoso',
      specialAbility: 'Ataque Veloz'
    },
    {
      mountName: 'Unicórnio',
      mountColor: 'purple',
      speed: 35,
      personality: 'Misterioso',
      specialAbility: 'Cura Mágica'
    }
  ]

  const handleMountSelect = (mountName: string) => {
    setSelectedMount(mountName)
    sessionStorage.setItem('selectedMount', JSON.stringify(mountName))
    router.push('/details')
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Escolha sua Montaria</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {mountList.map(mount => (
          <MountCard
            key={mount.mountName}
            {...mount}
            onSelect={handleMountSelect}
          />
        ))}
      </div>
    </div>
  )
}

export default Mounts
