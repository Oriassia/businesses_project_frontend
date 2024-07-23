// Modal.tsx
import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50  flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg  shadow-lg w-screen  lg:min-w-fit relative">
        <button
          className="absolute top-3 right-3 text-[2em] text-cyan-800 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
