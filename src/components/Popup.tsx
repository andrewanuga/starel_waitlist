import { IoMdClose } from "react-icons/io";

interface PopupProps {
  onClose: () => void;
}

const Popup = ({ onClose }: PopupProps) => {
  return (
    <div
      className={`fixed inset-0 z-[100000000000] backdrop-blur-md bg-opacity-50 flex items-center justify-center`}
    >
      <div
        onClick={onClose}
        className="absolute top-4 p-1 bg-gray-50 rounded-full right-4 cursor-pointer text-gray-600 hover:text-gray-900"
      >
        <IoMdClose size={24} />
      </div>
      <section className="max-w-md mx-auto fixed top-1/4 bg-white rounded-lg shadow-lg p-6 border border-purple-200">
        <div className="text-center py-4">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            You're on the list!
          </h3>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-sm mb-2 text-gray-700">
              Join our WhatsApp channel for real-time updates and exclusive
              offers!:
            </p>
            <div className="flex gap-2 justify-center">
              <a href="https://whatsapp.com/channel/0029VbAuezD8KMqrRYcDet2o">
                <button className="p-2 cursor-pointer bg-white rounded border border-purple-200 hover:bg-green-500 transition">
                  WhatsApp
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Popup;
