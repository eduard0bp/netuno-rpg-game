import { useState } from 'react'
import Modal from '../Modal'

interface MountCardProps {
  mountName: string
  mountColor: string
  speed: number
  personality: string
  specialAbility: string
  onSelect: (mountName: string) => void
  image: any
}

const MountCard: React.FC<MountCardProps> = ({
  mountName,
  image,
  speed,
  personality,
  specialAbility,
  onSelect
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="flex flex-col items-center p-3 border-2 border-amber-400 rounded-lg shadow-md shadow-amber-400">
      <div
        className={`w-full h-[400px] bg-cover mb-4`}
        style={{
          backgroundImage: `url(${image})`
        }}
      />
      <h3 className="text-xl font-bold text-amber-400 mb-2">{mountName}</h3>
      <button
        type="button"
        className="px-4 py-2 text-black rounded-md w-[270px] mt-2 hover:outline bg-amber-400 hover:bg-transparent hover:outline-amber-400 hover:text-amber-400 font-bold"
        onClick={() => setIsModalOpen(true)}
      >
        Ver Detalhes
      </button>
      {isModalOpen && (
        <Modal
          image={image}
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
        >
          <div className='flex items-center justify-center flex-col flex-1'>
          <h3 className="text-xl font-bold text-amber-400 mb-2">{mountName}</h3>
            <p className="text-white">
              <strong>Velocidade:</strong> {speed}
            </p>
            <p className="text-white">
              <strong>Personalidade:</strong> {personality}
            </p>
            <p className="text-white">
              <strong>Habilidade Especial:</strong> {specialAbility}
            </p>
            <div className="mt-4">
              <button
                className="px-4 py-2 text-black rounded-md w-full mt-2 hover:outline bg-amber-400 hover:bg-transparent hover:outline-amber-400 hover:text-amber-400 font-bold"
                onClick={() => {
                  onSelect(mountName)
                  setIsModalOpen(false)
                }}
              >
                Selecionar Montaria
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default MountCard
