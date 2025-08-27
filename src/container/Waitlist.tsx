import logo from '../assets/logo.png'
import heroImage from "../assets/educator.svg";
import feature1 from "../assets/reading.png";
import feature2 from "../assets/store.png";
import feature3 from "../assets/business.png";
import { ToastContainer, toast } from 'react-toastify';
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Bounce } from 'react-toastify';
import { ScrollTrigger } from 'gsap/all';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from '@/components/Dropdown';


gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const left2Ref = useRef(null);
  
  // Use a ref for the parent container if you want to use it as the trigger
  // const containerRef = useRef(null);

  useEffect(() => {
    // Left-side animation
    gsap.fromTo(leftRef.current, 
      {
        x: '-100%',
        opacity: 0,
        ease: "power2.out"
      },
      {
        x: '0%',
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%", // Animation starts when the top of the element is 80% down from the top of the viewport
          toggleActions: "play none none none", // Play the animation once and do not reverse or resume
          // You can use markers to visualize the start/end points
          // markers: true 
        }
      }
    );
    gsap.fromTo(left2Ref.current, 
      {
        x: '-100%',
        opacity: 0,
        ease: "power2.out"
      },
      {
        x: '0%',
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: left2Ref.current,
          start: "top 80%", // Animation starts when the top of the element is 80% down from the top of the viewport
          toggleActions: "play none none none", // Play the animation once and do not reverse or resume
          // You can use markers to visualize the start/end points
          // markers: true 
        }
      }
    );

    // Right-side animation
    gsap.fromTo(rightRef.current, 
      {
        x: '100%',
        opacity: 0,
        ease: "power2.out"
      },
      {
        x: '0%',
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          // markers: true
        }
      }
    );

    // It's a good practice to clean up ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

  }, []);

  const waitlistRef = useRef<HTMLDivElement>(null); // Renamed 'waitlist' to 'waitlistRef' for clarity
  const solutions = [
  {
    title: "Unclear lecture explanations and late course materials",
    description: <p>Starel addresses this by offering an <b className='text-black'>AI-powered academic assistant</b> trained on FUTA-specific data. This tool provides detailed, easy-to-understand explanations for complex lecture topics, course PDFs, and past questions. Students no longer have to struggle with confusing concepts or wait for materials to be uploaded. They can get 24/7 access to clear, concise information, empowering them to study at their own pace and get ahead in their coursework</p>
  },
  {
    title: "No digital platform for student entrepreneurs",
    description:<p>Our platform solves this by providing a dedicated <b className='text-black'>Campus Marketplace</b>. This feature allows student entrepreneurs to showcase their products and services to the entire university community, bridging the gap between creators and customers. With Starel, students can create digital storefronts, manage orders, and grow their businesses without the challenges of traditional marketing, fostering financial independence and a vibrant entrepreneurial ecosystem on campus.</p>
  },
  {
    title: "Difficulty recovering lost items on campus",
    description: <p>To tackle this common problem, Starel introduces a centralized <b className='text-black'>Lost-and-Found system</b>. This feature allows students to easily post detailed information about lost items or report found ones, including photos and contact details. By creating a single, accessible hub for all lost items, Starel significantly increases the chances of reuniting students with their belongings and reduces the stress and frustration associated with losing valuable items.</p>
  },
  {
    title: "Struggles with final year projects",
    description: <p>Starel provides comprehensive support for final year students through its <b className='text-black'>AI-powered academic module</b>. The AI assistant can help with topic research, offer guidance on structuring project reports, and provide quick explanations of complex research methodologies. This dedicated support ensures that students have the resources they need to navigate the challenging final year project process with confidence, helping them produce high-quality work and graduate on time.</p>
  },
  {
    title: "Challenges securing IT placements",
    description: <p>Our platform features a specialized <b className='text-black'>IT Placement Board</b>. This centralized board connects 400-level students with relevant IT placement opportunities, including internships and industrial training. By curating opportunities specifically for students, Starel streamlines the search process, helping them find placements that align with their field of study and career goals. It also provides a direct channel for companies to find and recruit top student talent from FUTA."</p>
  },
  {
    title: "No centralized campus solution",
    description: <p>Starel serves as the ultimate <b className='text-black'>all-in-one centralized platform</b> for the campus community. It integrates academic tools, business opportunities, and essential student services into a single, intuitive application. This eliminates the need for students to navigate multiple websites or physical offices to find information. From academic support and entrepreneurial ventures to lost-and-found services and scholarship announcements, Starel brings the entire university experience into one cohesive and easily accessible digital space.</p>
  }
];

  const featuresAcademic = [
    {
      title: "AI-Powered Academic Support",
      description:
        "Our custom AI model trained with FUTA-specific data provides clear explanations for course PDFs, past questions, and assignments.",
      items: [
        "Simplified explanations for complex topics",
        "24/7 academic assistance",
        "Affordable premium plans starting at ₦300/month",
        "Project support for final year students",
      ],
      image: feature1,
    },
    
  ];
  const featuredMarket = [
    {
      title: "Campus Marketplace & Services",
      description:
        "Beyond academics, Starel connects the campus community with essential services and opportunities.",
      items: [
        "Platform for student entrepreneurs to showcase products",
        "Lost-and-found system for campus items",
        "IT placement board for 400-level students",
        "Scholarship and competition announcements",
      ],
      image: feature2,
      reverse: true,
    }
  ]
  const featuredBusiness = [
      {
      title: "Sustainable Business Model",
      description:
        "Starel is designed to be financially sustainable while remaining affordable for students:",
      items: [
        {
          title: "AI Premium Plans",
          desc: "₦300-₦1000/month for advanced features",
        },
        {
          title: "Targeted Advertising",
          desc: "Relevant ads from local businesses",
        },
        {
          title: "Future Marketplace",
          desc: "5-10% commission on student transactions",
        },
      ],
      image: feature3,
    },
  ]

  // Waitlist form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [position, setPosition] = useState(1247);
  const notify = () => toast(email &&`✅  Joined the Starel WaitList`, {
                              position: "bottom-center",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: false,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "colored",
    });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setPosition(prev => prev + 1);
  };
  
  // New function to handle smooth scroll
  const handleJoinWaitlistClick = () => {
    if (waitlistRef.current) {
      waitlistRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const waitlistBenefits = [
    {
      title: "Early Access",
      description: "Be among the first to experience Starel's full features"
    },
    {
      title: "Exclusive Community",
      description: "Join our private community of early adopters"
    },
    {
      title: "Priority Support",
      description: "Get dedicated support during the early access period"
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50">
      <nav className="w-full flex justify-between items-center lg:px-16 px-6 fixed top-0 p-4 bg-gradient-to-r from-purple-700/50 to-indigo-700/50 backdrop-blur-xl text-white z-50">
        <div className="flex items-center gap-3 ">
          <div className="bg-white rounded-xl p-2 shadow-sm">
            <img src={logo} alt="logo" className="w-6 h-6" />
          </div>
          <div className="lg:text-2xl text-xl font-bold bg-gradient-to-r from-purple-100 to-indigo-100 bg-clip-text text-transparent">
            Starel
          </div>
        </div>

      </nav>

      {/* Hero Section */}
      <section className="parkinsans flex flex-wrap justify-center items-center gap-4 lg:py-40 py-20 lg:px-20 px-4 mx-auto bg-gradient-to-r from-purple-700 to-indigo-700">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center">
            <h1 className="text-5xl font-bold text-black mb-6 leading-tight">
              The{" "}
              <span className="nata-sans bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
                All-In-One Platform
              </span>{" "}
              for Nigerian Students
            </h1>
            <p className="text-white mb-8 md:text-[16px] text-xl">
              Starel combines AI-powered academic support, campus marketplace,
              and student services in one intuitive platform - starting with
              FUTA and expanding nationwide.
            </p>

          </div>
          <div className="lg:w-1/2 hidden lg:block">
            <img src={heroImage} alt="Starel Platform Preview" className="" />
          </div>
        </div>
        {/* Updated button with onClick handler */}
        <button onClick={handleJoinWaitlistClick} className="w-full h-14 max-w-[1000px] cursor-pointer transition-all duration-150 hover:saturate-150 shadow shadow-gray-200/50 outline-gray-300 rounded-full flex justify-center bg-gradient-to-r from-violet-500 mt-10 to-gray-100 items-center">Join the WaitList</button>
      </section>

      {/*Solutions for Problem Section */}
      <section className="lg:py-40 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-[40px] font-bold text-center mb-12 text-gray-900">
            Problems We Solve for{" "}
            <span className="text-purple-600">Nigerian Students</span>
          </h2>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            {solutions.map((items)=>(
              <>
              <Dropdown title={items.title} children={items.description}/>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="lg:py-24 py-8 max-w-7xl mx-auto px-4">
        <h2 className="text-[40px] font-bold text-center mb-16 text-gray-900">
          Our <span className="text-purple-600">Innovative Solutions</span>
        </h2>

        <div className="lg:space-y-28 space-y-16">
          <section id="features" className="py-16">
            <div className="max-w-7xl mx-auto px-4">

              <div className="space-y-20">
                {featuresAcademic.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${
                      feature? "lg:flex-row" : "lg:flex-row"
                    } items-center gap-12`}
                  >
                    <div ref={left2Ref} className={`w-1/2 lg:w-1/2
                      transition-all duration-1000 ease-out
                    `}>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full"
                      />
                    </div>
                    <div className="lg:w-1/2">
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {feature.description}
                      </p>
                      <ul className="space-y-3">
                        {feature.items.map((item, i) =>
                          typeof item === "string" ? (
                            <li key={i} className="flex items-start">
                              <svg
                                className="w-5 h-5 text-purple-500 mt-0.5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span>{item}</span>
                            </li>
                          ) : (
                            <div
                              key={i}
                              className="bg-purple-50 p-4 rounded-lg"
                            >
                              <h4 className="font-bold text-purple-700">
                                {item}
                              </h4>
                              <p className="text-gray-600">{item}</p>
                            </div>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                ))}
                {featuredMarket.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${
                      feature? "lg:flex-row-reverse" : "lg:flex-row"
                    } items-center gap-12`}
                  >
                    <div ref={rightRef} className={`w-1/2 lg:w-1/2
                      transition-all duration-1000 ease-out
                    `}>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full"
                      />
                    </div>
                    <div className="lg:w-1/2">
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {feature.description}
                      </p>
                      <ul className="space-y-3">
                        {feature.items.map((item, i) =>
                          typeof item === "string" ? (
                            <li key={i} className="flex items-start">
                              <svg
                                className="w-5 h-5 text-purple-500 mt-0.5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span>{item}</span>
                            </li>
                          ) : (
                            <div
                              key={i}
                              className="bg-purple-50 p-4 rounded-lg"
                            >
                              <h4 className="font-bold text-purple-700">
                                {item}
                              </h4>
                              <p className="text-gray-600">{item}</p>
                            </div>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                ))}
                {featuredBusiness.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${
                      feature? "lg:flex-row" : "lg:flex-row"
                    } items-center gap-12`}
                  >
                    <div ref={leftRef} className={`w-1/2 lg:w-1/2
                      transition-all duration-1000 ease-out
                    `}>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full"
                      />
                    </div>
                    <div className="lg:w-1/2">
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {feature.description}
                      </p>
                      <ul className="space-y-3">
                        {feature.items.map((item, i) =>
                          typeof item === "string" ? (
                            <li key={i} className="flex items-start">
                              <svg
                                className="w-5 h-5 text-purple-500 mt-0.5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span>{item}</span>
                            </li>
                          ) : (
                            <div
                              key={i}
                              className="bg-purple-50 p-4 rounded-lg"
                            >
                              <h4 className="font-bold text-purple-700">
                                {item.title}
                              </h4>
                              <p className="text-gray-600">{item.desc}</p>
                            </div>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Waitlist Section */}
      {/* Added ref to the section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-[40px] font-bold text-center mb-4 text-gray-900">
            Join the <span className="text-purple-600">Starel Waitlist</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Be among the first to experience our platform revolutionizing education and financial independence for Nigerian students
          </p>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Benefits Column */}
            <div className="lg:w-2/5">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Why Join Early?</h3>
              
              <div className="space-y-6">
                {waitlistBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-purple-100">
                    <div className="p-2 bg-purple-100 rounded-md">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-gray-900">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:w-3/5">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-purple-100">
                {!isSubmitted ? (
                  <>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Secure Your Spot</h3>
                    <p className="text-gray-600 mb-6">
                      Join thousands of students waiting to transform their academic experience
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                          Name
                        </label>
                        <input
                          type="text"
                          id="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 bg-purple-50 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 bg-purple-50 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                          placeholder="example@gmail.com"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          id="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-3 bg-purple-50 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                          placeholder="08123456789"
                          required
                        />
                      </div>
                      
                      <button
                        type="submit"
                        onClick={notify}
                        className="w-full cursor-pointer bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition"
                      >
                        Join Waitlist
                      </button>
                    </form>
                    
                    <p className="text-xs text-gray-500 mt-4">
                      By joining, you agree to receive updates about Starel. We respect your privacy.
                    </p>
                  </>
                ) : (
                  <div className="text-center py-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">You're on the list!</h3>
                    <p className="text-gray-600 mb-2">
                      We've sent a confirmation email to <span className="font-medium">{email}</span>
                    </p>
                    <p className="text-gray-600 mb-6">
                      Your position in line: <span className="font-bold">#{position}</span>
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-sm mb-2 text-gray-700">Share with friends to move up in line:</p>
                      <div className="flex gap-2 justify-center">
                        <button className="p-2 cursor-pointer bg-white rounded border border-purple-200 hover:bg-gray-700 hover:text-gray-100 transition">
                          Twitter
                        </button>
                        <button className="p-2 cursor-pointer bg-white rounded border border-purple-200 hover:bg-green-500 transition">
                          WhatsApp
                        </button>
                        <button className="p-2 cursor-pointer bg-white rounded border border-purple-200 hover:bg-blue-500 transition">
                          Facebook
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {name && email && phone &&
        <ToastContainer 
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
      />
      }
      <div ref={waitlistRef} className="w-full py-4 text-center border-t text-purple-50 bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            Copyright © 2025 <span className="font-semibold">Starel</span> |
            Powered by The Team
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;