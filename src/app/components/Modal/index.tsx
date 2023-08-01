
const Modal: React.FC<{ isOpen: boolean; onRequestClose: () => void; children: React.ReactNode }> = ({ isOpen, onRequestClose, children }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <div className="fixed w-full h-full bg-black opacity-50" onClick={onRequestClose}></div>
      <div className="bg-white p-4 rounded-lg shadow-md z-10">{children}</div>
    </div>
  );
};

export default Modal;
