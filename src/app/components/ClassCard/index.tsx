'use client'
import { useState } from 'react'
import Link from 'next/link'
import Modal from '../Modal'
import CustomizeForm from '../CustomizeForm'

interface ClassCardProps {
  className: string
  classColor: string
}

const ClassCard: React.FC<ClassCardProps> = ({ className, classColor }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const initialValues = {
    weapon: '',
    hairColor: '#000000',
  };

  const handleFormSubmit = (values: any) => {
    setSelectedClass(className);
    sessionStorage.setItem(
      'selectedClass',
      JSON.stringify({ class: className, customization: values })
    );
  };

  const toggleModal = () => {
    setSelectedClass(className);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-md">
      <div className={`w-16 h-16 bg-${classColor} rounded-full mb-4`} />
      <h3 className="text-xl font-bold">{className}</h3>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleModal}
      >
        Ver Detalhes
      </button>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
        >
          <h2 className="text-xl font-bold mb-4">{className}</h2>
          <CustomizeForm
            initialValues={initialValues}
            onSubmit={handleFormSubmit}
            selectedClass={selectedClass}
          />
        </Modal>
      )}
    </div>
  );
};

const ClassCards: React.FC = () => {
  const classList = [
    { className: 'Paladino', classColor: 'blue-500' },
    { className: 'Mago', classColor: 'black' },
    { className: 'Guerreiro', classColor: 'red-500' },
    { className: 'Arqueiro', classColor: 'green-500' },
    { className: 'Ladrão', classColor: 'yellow-500' }
  ]

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {classList.map((classItem) => (
        <ClassCard
          key={classItem.className}
          {...classItem}
        />
      ))}
    </div>
  )
}

export default ClassCards
