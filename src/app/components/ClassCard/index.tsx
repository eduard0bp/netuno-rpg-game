'use client'
import { useState } from 'react'
import Modal from '../Modal'
import CustomizeForm from '../CustomizeForm'

interface ClassCardProps {
  className: string
  image: any
}

const ClassCard: React.FC<ClassCardProps> = ({ className, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedClass, setSelectedClass] = useState<string | null>(null)
  const initialValues = {
    weapon: '',
    armor: '',
    hairColor: '#473333',
    skinColor: '#FFFFFF'
  }

  const handleFormSubmit = (values: any) => {
    setSelectedClass(className)
    sessionStorage.setItem(
      'selectedClass',
      JSON.stringify({ class: className, customization: values })
    )
  }

  const toggleModal = () => {
    setSelectedClass(className)
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className="flex flex-col items-center p-3 border-2 border-amber-400 rounded-lg shadow-md shadow-amber-400">
      <div
        className={`w-full h-[400px] bg-cover mb-4`}
        style={{
          backgroundImage: `url(${image})`
        }}
      />
      <h3 className="text-xl font-bold text-amber-400 mb-2">{className}</h3>
      <button
        type="button"
        className="px-4 py-2 text-black rounded-md w-[270px] mt-2 hover:outline bg-amber-400 hover:bg-transparent hover:outline-amber-400 hover:text-amber-400 font-bold"
        onClick={toggleModal}
      >
        Ver Detalhes
      </button>
      {isModalOpen && (
        <Modal
          image={image}
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
        >
          <h1 className="text-5xl font-bold mb-4 text-amber-400 text-center border-b-2 pb-4 border-amber-400 w-full">
            {className}
          </h1>
          <h2 className='text-2xl font-bold text-amber-400 text-center w-full'>Personalize sua classe</h2>
          <CustomizeForm
            initialValues={initialValues}
            onSubmit={handleFormSubmit}
            selectedClass={selectedClass}
          />
        </Modal>
      )}
    </div>
  )
}

export default ClassCard
