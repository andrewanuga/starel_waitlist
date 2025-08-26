import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface DropdownProps {
  title: string;
  children: React.ReactNode;
}

const Dropdown = ({ title, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false); 
  const contentRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      // Animate the dropdown content
      gsap.to(contentRef.current, {
        height: 'auto',
        opacity: 1,
        padding: '1rem',
        duration: 0.5,
        ease: 'power2.out',
      });
    } else {
      // Animate the dropdown content to height 0
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        padding: '0rem',
        duration: 0.5,
        ease: 'power2.in',
      });
    }
  }, [isOpen]);

  return (
    <div className="w-[90%] md:w-86 lg:w-110 md:max-w-sm border border-gray-300 shadow-sm rounded-lg overflow-hidden">
      <div
        className="flex items-center justify-between p-4 bg-gray-100/50 cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="font-semibold text-lg text-gray-600">{title}</span>
        {/* Simple arrow icon that rotates */}
        <div className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-100 hover:outline outline-gray-200 flex justify-center items-center cursor-pointer">
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
      <div
        ref={contentRef}
        className="text-gray-500 overflow-hidden" // Removed dynamic padding
        style={{ height: 0, opacity: 0, padding: 0 }} // Initial state
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;