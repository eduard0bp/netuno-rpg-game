'use client'
import { useEffect, useState } from 'react'
import { isAuthenticated } from '../utils/auth'
import { useRouter } from 'next/navigation'

const Details: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<any | null>(null)
  const [selectedMount, setSelectedMount] = useState<string | null>(null)

  const router = useRouter()

  useEffect(() => {
    const classData = sessionStorage.getItem('selectedClass')
    const mountData = sessionStorage.getItem('selectedMount')
    if (classData) {
      const parsedClassData = JSON.parse(classData)
      setSelectedClass(parsedClassData)
    }
    if (mountData) {
      setSelectedMount(JSON.parse(mountData))
    }
  }, [])

  if (!isAuthenticated()) {
    router.push('/')
    return null
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">
        Detalhes do Personagem e da Montaria
      </h1>
      {selectedClass && (
        <>
          <h2 className="text-xl font-bold mb-2">Detalhes do Personagem</h2>
          <p>
            <strong>Personagem:</strong> {selectedClass.class}
          </p>
          {selectedClass.customization && (
            <>
              <p>
                <strong>Arma:</strong> {selectedClass.customization.weapon}
              </p>
              <p>
                <strong>Cor do Cabelo:</strong>{' '}
                {selectedClass.customization.hairColor}
              </p>
            </>
          )}

          {selectedClass.class === 'Arqueiro' && (
            <>
              <p>
                <strong>Vida:</strong> 100
              </p>
              <p>
                <strong>Stamina:</strong> 100
              </p>
              <p>
                <strong>Agilidade:</strong> 200
              </p>
              <p>
                <strong>Força:</strong> 50
              </p>
            </>
          )}

          {selectedClass.class === 'Guerreiro' && (
            <>
              <p>
                <strong>Vida:</strong> 150
              </p>
              <p>
                <strong>Stamina:</strong> 100
              </p>
              <p>
                <strong>Agilidade:</strong> 100
              </p>
              <p>
                <strong>Força:</strong> 200
              </p>
            </>
          )}
        </>
      )}
      {selectedMount && (
        <>
          <h2 className="text-xl font-bold mt-4 mb-2">Detalhes da Montaria</h2>
          <p>
            <strong>Montaria Selecionada:</strong> {selectedMount}
          </p>
        </>
      )}
    </div>
  )
}

export default Details
