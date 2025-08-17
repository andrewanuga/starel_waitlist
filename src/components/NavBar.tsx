import { useState, useEffect, useRef, RefObject } from 'react';
import Logo from '../assets/logo.png';
import GlassButton from './GlassButton';
import { IoMdClose } from "react-icons/io";
import { MdOutlineMenuOpen } from "react-icons/md";
import gsap from 'gsap';

type ScrollRefs = {
  current: HTMLElement | null;
}[];

interface NavBarProps {
  scroll: ScrollRefs;
}

const NavBar: React.FC<NavBarProps> = ({ scroll }) => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize menu items ref array
  useEffect(() => {
    menuItemsRef.current = menuItemsRef.current.slice(0, 4);
  }, []);

  const scrollToRef = (ref: RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // GSAP Animations
  useEffect(() => {
    if (!navRef.current) return;

    if (openNav) {
      // Make sure nav is visible before animating
      gsap.set(navRef.current, { display: 'block', width: '100vw' });
      
      // Open animation sequence
      gsap.timeline()
        .to(navRef.current, {
          x: '0%',
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out'
        })
        .to(menuItemsRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)'
        }, 0.2);
    } else {
      // Close animation sequence
      gsap.timeline()
        .to(menuItemsRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.3,
          stagger: 0.05,
          ease: 'power2.in'
        })
        .to(navRef.current, {
          x: '-100%',
          opacity: 0,
          duration: 0.5,
          ease: 'power3.in',
          onComplete: () => {
            if (navRef.current) {
              navRef.current.style.display = 'none';
            }
          }
        }, 0.1);
    }
  }, [openNav]);

  const handleNavClick = (scrollRef: RefObject<HTMLElement>) => {
    setOpenNav(false); // Immediately set state to trigger close animation
    scrollToRef(scrollRef);
  };

  const handleToggleNav = () => {
    setOpenNav(prev => !prev); // Toggle state
  };

  return (
    <div className='w-full'>
      <GlassButton
        variant="default"
        size="md"
        onClick={() => console.log('Clicked!')}
        className='w-full transition-all z-[100] fixed top-10 duration-300 rounded-xl'
      >
        <div className="w-auto gap-32 md:gap-0 md:w-150 py-2 lg:py-1 lg:w-220 xl:w-250 rounded-lg h-auto shadow text-white flex items-center justify-between px-4">
          <div className="text-lg font-bold flex justify-center items-center gap-3">
            <img src={Logo} className='w-10 h-10 md:w-16 md:h-16' alt="Logo" />
            <p className=''>Starel</p>
          </div>
          <div 
            onClick={handleToggleNav} 
            className='w-10 h-10 rounded-full z-[100000] bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-all duration-300'
          >
              <MdOutlineMenuOpen className='text-2xl md:text-3xl text-gray-900'/>
          </div>
        </div>
      </GlassButton>

      {/* Navigation Menu */}
      <nav 
        ref={navRef}
        className={`fixed top-0 left-0 h-screen z-[1000] bg-gray-500/50 backdrop-blur-md overflow-hidden`}
        style={{ display: 'none' }} // Initial GSAP-controlled state
      >
        <div className={`w-full h-14 flex justify-end`}>
          <div 
            onClick={handleToggleNav} 
            className='w-16 h-16 rounded-full cursor-pointer bg-gray-200 flex z-[10000000] items-center justify-center absolute right-10 top-10 hover:bg-gray-300 transition-all duration-300'
          >
            <IoMdClose className='text-5xl'/>
          </div>
        </div>
        <div className={`flex flex-col items-center justify-center w-full h-full relative left-20 gap-7`}>
          <div 
            ref={el => { menuItemsRef.current[0] = el }}
            onClick={() => handleNavClick(scroll[0])} 
            className="text-gray-200 md:text-5xl text-2xl font-bold w-full cursor-pointer hover:text-gray-400"
          >
            What is Starel ?
          </div>
          <div 
            ref={el => { menuItemsRef.current[1] = el }}
            onClick={() => handleNavClick(scroll[1])} 
            className="text-gray-200 md:text-5xl text-2xl font-bold w-full cursor-pointer hover:text-gray-400"
          >
            Info
          </div>
          <div 
            ref={el => { menuItemsRef.current[2] = el }}
            onClick={() => handleNavClick(scroll[2])} 
            className="text-gray-200 md:text-5xl text-2xl font-bold w-full cursor-pointer hover:text-gray-400"
          >
            The Team
          </div>
          <div 
            ref={el => { menuItemsRef.current[3] = el; }}
            onClick={() => handleNavClick(scroll[3])} 
            className="text-gray-200 md:text-5xl text-2xl font-bold w-full cursor-pointer hover:text-gray-400"
          >
            Waitlist
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;