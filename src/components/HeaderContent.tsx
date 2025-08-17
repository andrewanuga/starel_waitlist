"use client"
import { useState, useEffect } from 'react';

const ArrowRight = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

export default function HeaderContent({scroll}) {
      const scrollToRef = (ref: RefObject<HTMLElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
      };
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);


    return (
        <div className="font-sans z-50">
            <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.5s ease-out forwards; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-400 { animation-delay: 400ms; }
      `}</style>

            <div className="w-auto transition-colors duration-300">
                <div className="max-w-7xl mx-auto">
                    <div className={`text-center mb-8 sm:mb-12 transition-all duration-500 ease-out`}>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-sm font-medium tracking-wide transition-colors duration-300 mb-4 sm:mb-6">
                            Join Now    
                        </div>

                        <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mt-4 sm:mt-6 mb-4 sm:mb-6 leading-tight transition-colors duration-300">
                            Starel<br className="block" />
                            <span className="text-xl"> Where Education Meets Innovation & Opportunity </span>
                        </h1>

                    </div>

                    <div className={`text-center cursor-pointer ${isVisible ? 'animate-slide-up animation-delay-400' : 'opacity-0'}`}>
                        <button onClick={()=> scrollToRef(scroll)} className="group inline-flex cursor-pointer items-center px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium text-base sm:text-lg transition-all duration-200 hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-105 hover:shadow-lg">
                            Sign Up for the Waitlist
                            <div className='w-14 h-14 flex justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-300 rounded-full ml-4 sm:ml-6 transition-transform duration-200 group-hover:scale-110'>
                                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}