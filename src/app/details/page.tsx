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
    <div className="min-h-screen w-full flex flex-col gap-4 items-center justify-center from-black to-gray-950 bg-gradient-to-b text-white p-4 sm:p-8 md:p-12 lg:p-16">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-400">
        DETALHES DO PERSONAGEM
      </h1>
      <div className="flex flex-col items-start gap-2 text-gray-400 text-lg sm:text-xl md:text-2xl lg:text-3xl">
        {selectedClass && (
          <>
            <p>Personagem: {selectedClass.class}</p>
            {selectedClass.customization && (
              <>
                <p>Arma: {selectedClass.customization.weapon}</p>
                <p>Armadura: {selectedClass.customization.armor}</p>
                <div>
                  <p className="flex gap-2 items-center justify-center ">
                    Cor do Cabelo:{' '}
                    <div
                      className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full border-2 border-gray-400"
                      style={{
                        backgroundColor: `${selectedClass.customization.hairColor}`
                      }}
                    ></div>
                  </p>{' '}
                </div>
                <div>
                  <p className="flex gap-2 items-center justify-center">
                    Cor da Pele:{' '}
                    <div
                      className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full border-2 border-gray-400"
                      style={{
                        backgroundColor: `${selectedClass.customization.skinColor}`
                      }}
                    ></div>
                  </p>{' '}
                </div>
              </>
            )}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-400">
              Atributos:{' '}
            </p>
            {selectedClass.class === 'Arqueiro' && (
              <>
                <p>Vida: 100</p>
                <p>Stamina: 100</p>
                <p>Agilidade: 200</p>
                <p>Força: 50</p>
              </>
            )}

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-400">
              Montaria:
            </p>
            <p>{selectedMount}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default Details
