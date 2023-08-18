import React from 'react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-md p-6 max-w-md w-full mx-4 md:mx-auto shadow-lg flex">
        <div className="flex-shrink-0 mr-4">
          <img
            src="path/to/your/image.jpg"
            alt="Popup Image"
            className="h-16 w-16 object-cover rounded-full"
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Popup Heading</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <button
            onClick={onClose}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
