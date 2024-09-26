import React from 'react';

interface SuccessModalProps {
  message: string;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 h-screen bg-black bg-opacity-50 flex justify-center items-center z-20" onClick={onClose}>
      <div className="bg-white rounded-xl p-6 shadow-lg" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-center text-2xl font-bold text-green-600">Success!</h2>
        <p className="mt-4 text-center">{message}</p>
        <div className="flex justify-center mt-6">
          <button onClick={onClose} className="bg-maroon text-white px-4 py-2 rounded-lg">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
