import { AiFillCloseCircle } from 'react-icons/ai'

const Modal: React.FC<{
  isOpen: boolean
  onRequestClose: () => void
  children: React.ReactNode
  image: any
}> = ({ isOpen, onRequestClose, children, image }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <div className="w-[600px] h-[600px] rounded-lg">
        <div
          className={`w-full h-full bg-cover`}
          style={{
            backgroundImage: `url(${image})`
          }}
        >
          <button onClick={onRequestClose} className=" text-amber-400 ml-4 mt-4">
            <AiFillCloseCircle size={32} />
          </button>
        </div>
      </div>
      <div className="w-[600px] h-[600px] flex items-center flex-col justify-start bg-black opacity-95 p-4">
        {children}
      </div>
    </div>
  )
}

export default Modal
