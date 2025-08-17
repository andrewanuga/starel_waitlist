import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import home from '../assets/home.jpeg'
import market from '../assets/market.jpeg'
import starAi from '../assets/starAi.jpeg'
import courses from '../assets/courses.jpeg'

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AwardWinningScrollAnimation = ({ref}) => {
    const outerRef = useRef(null);
    const containerRef = useRef(null);
    const sectionsRef = useRef([]);
    const imagesRef = useRef([]);
    const titlesRef = useRef([]);
    const contentsRef = useRef([]);
    const progressRef = useRef(null);

    useGSAP(() => {
    if (!containerRef.current || !outerRef.current) return;

    ScrollTrigger.normalizeScroll(true);

    // Horizontal scroll setup
    const scrollTween = gsap.to(containerRef.current, {
        x: () => -(containerRef.current.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
        trigger: outerRef.current,
        pin: true,
        scrub: 0.5,
        start: "top top",
        end: () => "+=" + containerRef.current.offsetWidth,
        invalidateOnRefresh: true
        }
    });

    // Progress bar
    gsap.to(progressRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
        trigger: outerRef.current,
        scrub: true,
        start: "top top",
        end: () => "+=" + containerRef.current.offsetWidth
        }
    });

    // Section animations
    sectionsRef.current.forEach((section, i) => {
        if (!section) return;

        // Image parallax
        gsap.fromTo(imagesRef.current[i], 
        { y: 50, opacity: 0, scale: 1.1 },
        {
            y: -50,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left right",
            end: "right left",
            scrub: true
            }
        }
        );

        // Title reveal
        gsap.fromTo(titlesRef.current[i],
        { y: 30, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left 80%",
            toggleActions: "play none none reverse"
            }
        }
        );

        // Content reveal
        gsap.fromTo(contentsRef.current[i],
        { y: 20, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left 80%",
            toggleActions: "play none none reverse"
            }
        }
        );

        // Background transition
        gsap.to(section, {
        backgroundColor: i % 2 === 0 ? "#1f2937" : "#111827",
        scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left center",
            end: "right center",
            scrub: true
        }
        });
    });

    // Award section special animations
    const awardSection = sectionsRef.current[2];
    if (awardSection) {
        gsap.fromTo(".award-badge",
        { scale: 0, rotation: -180 },
        {
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "back.out(1.5)",
            scrollTrigger: {
            trigger: awardSection,
            containerAnimation: scrollTween,
            start: "left 60%",
            toggleActions: "play none none reverse"
            }
        }
        );

        gsap.utils.toArray(".sparkle").forEach((sparkle, i) => {
        gsap.to(sparkle, {
            scale: () => 1 + Math.random() * 0.5,
            opacity: 0,
            duration: 1 + Math.random(),
            repeat: -1,
            yoyo: true,
            delay: i * 0.3,
            ease: "sine.inOut"
        });
        });
    }

    }, { scope: outerRef });

    const sections = [
    {
        title: "Buy & Sell Easily",
        content: "A student-friendly marketplace. sell your products and make easy payments",
        image: market,
    },
    {
        title: "Free Education Resources",
        content: " No-cost courses learn for free, get free viedo resources and pdfs",
        image: courses,
    },
    {
        title: "AI-Powered Assistance",
        content: "24/7 academic support. Study with Ai Powered Academic Ai",
        image: starAi,
    },
    {
        title: "Join WaitList",
        content: "Get free give when u sign in to starel",
        image: home,
        isAward:true,
    }
    ];

    return (
    <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
        {/* Header / Content Above */}
        <div ref={ref[0]} className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 md:px-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-8 text-center mt-5">
                What is Starel ?
            </h2>
            <div className="text-base text-md md:text-lg lg:text-xl text-gray-300  mx-auto mb-6 sm:mb-8 leading-relaxed transition-colors duration-300">
                Starel is a next-gen student platform revolutionizing education and financial independence
                by merging free learning, AI-powered academics, and a peer-driven marketplace. Designed for
                students, by students, Starel offers free high-quality courses through Starel School, ensuring
                skill development without financial barriers. Its interactive AI partner provides 24/7 academic
                support, from homework help to personalized study plans. The integrated student marketplace lets
                users buy affordable essentials—from textbooks to gadgets—while also earning cash by selling their own products
                or services. Whether you’re learning, trading, or monetizing your skills, Starel empowers you to grow knowledge,
                access opportunities, and build income—all in one ecosystem. Join the future of education, where every student 
                thrives.
            </div>
            <h3 className='text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-8 text-center'>What You Gain</h3>
            <div className='w-full h-auto flex gap-4 justify-center items-center flex-wrap'>
                <div className=' bg-gray-100/30 w-96 h-36 grow space-y-3 backdrop-blur-md rounded-xl p-10 border border-gray-50 '>
                    <h4 className='font-bold text-white text-center text-2xl'>🚀 Learn for Free</h4>
                    <p className='text-center'>Access top-tier courses at Futa at zero cost.</p>
                </div>
                <div className=' bg-gray-100/30 w-96 h-36 grow space-y-3 backdrop-blur-md rounded-xl p-10 border border-gray-50 '>
                    <h4 className='font-bold text-white text-center text-2xl'>🤖 AI Academic Partner</h4>
                    <p className='text-center'>Get personalized study help with our interactive AI assistant.</p>
                </div>
                <div className=' bg-gray-100/30 w-96 h-36 grow space-y-3 backdrop-blur-md rounded-xl p-10 border border-gray-50 '>
                    <h4 className='font-bold text-white text-center text-2xl'>🛒 Student Marketplace</h4>
                    <p className='text-center'>Buy affordable essentials and sell to earn extra cash.</p>
                </div>
                <div className=' bg-gray-100/30 w-96 h-36 grow space-y-3 backdrop-blur-md rounded-xl p-10 border border-gray-50 '>
                    <h4 className='font-bold text-white text-center text-2xl'>💰 Earn as You Learn</h4>
                    <p className='text-center'>Turn skills into income on Starel’s seamless platform.</p>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7" />
            </svg>
        </div>

        {/* Horizontal Scroll Section */}
        <div ref={outerRef}  className="relative w-screen h-screen overflow-hidden">
        {/* Progress bar */}
        <div ref={progressRef} className="fixed w-screen top-0 left-0 h-1 bg-indigo-500 origin-left scale-x-0 z-50" />

        {/* Horizontal scrolling container */}
        <div
            ref={containerRef}
            className="flex h-screen w-max absolute left-0 top-0 will-change-transform"
        >
            <span ref={ref[1]}></span>
            {sections.map((section, i) => (
            <section
                key={i}
                ref={el => sectionsRef.current[i] = el}
                className={`relative flex h-screen w-screen items-center justify-center px-6 sm:px-12 md:px-20 ${i % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'}`}
                role="region"
                aria-label={`Section: ${section.title}`}
            >
                <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16 max-w-7xl mx-auto">
                <div className="w-full md:w-1/2">
                    <h2
                    ref={el => titlesRef.current[i] = el}
                    className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
                    >
                    {section.title}
                    </h2>
                    <div
                    ref={el => contentsRef.current[i] = el}
                    className="text-lg sm:text-xl text-gray-300 leading-relaxed"
                    >
                    {section.content}
                    </div>
                    
                    {section.isAward && (
                    <div className="relative mt-8">
                        <div className="award-badge absolute -left-8 -top-8 h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 p-2 shadow-xl overflow-hidden">
                        <div className="sparkle absolute h-2 w-2 rounded-full bg-white opacity-80" style={{ top: '15%', left: '25%' }} />
                        <div className="sparkle absolute h-1.5 w-1.5 rounded-full bg-white opacity-80" style={{ top: '35%', right: '15%' }} />
                        <div className="sparkle absolute h-1 w-1 rounded-full bg-white opacity-80" style={{ bottom: '25%', left: '35%' }} />
                        </div>
                        <button className="relative z-10 rounded-full bg-white px-6 py-2 sm:px-8 sm:py-3 font-bold text-indigo-900 transition-all hover:scale-105 hover:shadow-lg">
                            Join Now
                        </button>
                    </div>
                    )}
                </div>
                
                <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-2xl">
                    <img
                    ref={el => imagesRef.current[i] = el}
                    src={section.image}
                    alt={section.title}
                    className="h-72 w-96 object-cover"
                    loading="lazy"
                    />
                </div>
                </div>
            </section>
            ))}
        </div>

        {/* Scroll indicator inside the horizontal section */}
        <div className="fixed bottom-8 left-1/2 z-20 -translate-x-1/2 transform text-white opacity-80 flex items-center gap-2 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7" />
            </svg>
        </div>
        </div>
    </div>
    );
};

export default AwardWinningScrollAnimation;