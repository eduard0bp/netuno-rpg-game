import { useState } from 'react'
import Modal from '../Modal'

interface MountCardProps {
  mountName: string
  mountColor: string
  speed: number
  personality: string
  specialAbility: string
  onSelect: (mountName: string) => void
}

const MountCard: React.FC<MountCardProps> = ({
  mountName,
  mountColor,
  speed,
  personality,
  specialAbility,
  onSelect
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-md">
      <div className={`w-16 h-16 bg-${mountColor} rounded-full mb-4`} />
      <h3 className="text-xl font-bold">{mountName}</h3>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsModalOpen(true)}
      >
        Ver Detalhes
      </button>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
        >
          <h2 className="text-xl font-bold mb-2">{mountName}</h2>
          <p>
            <strong>Velocidade:</strong> {speed}
          </p>
          <p>
            <strong>Personalidade:</strong> {personality}
          </p>
          <p>
            <strong>Habilidade Especial:</strong> {specialAbility}
          </p>
          <div className="mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                onSelect(mountName)
                setIsModalOpen(false)
              }}
            >
              Selecionar Montaria
            </button>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default MountCard
