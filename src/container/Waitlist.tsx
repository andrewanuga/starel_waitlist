import logo from '../assets/logo.png'
import heroImage from "../assets/educator.svg";
import feature1 from "../assets/reading.png";
import feature2 from "../assets/store.png";
import feature3 from "../assets/business.png";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import Dropdown from '@/components/Dropdown';

const HomePage = () => {
  const solutions = [
    {
      title: "Unclear lecture explanations and late course materials",
      description: "Detailed Solutions of problems ..."
    },
    {
      title: "No digital platform for student entrepreneurs",
      description: "Detailed Solutions of problems ..."
    },
    {
      title: "Difficulty recovering lost items on campus",
      description: "Detailed Solutions of problems ..."
    },
    {
      title: "Struggles with final year projects",
      description: "Detailed Solutions of problems ..."
    },
    {
      title: "Challenges securing IT placements",
      description: "Detailed Solutions of problems ..."
    },
    {
      title: "No centralized campus solution",
      description: "Detailed Solutions of problems ..."
    },
  ];

  const features = [
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
    },
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
  ];

  // Waitlist form state
  const [email, setEmail] = useState("");
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
        <button className="w-full h-14 max-w-[1000px] cursor-pointer transition-all duration-150 hover:saturate-150 shadow shadow-gray-200/50 outline-gray-300 rounded-full flex justify-center bg-gradient-to-r from-violet-500 mt-10 to-gray-100 items-center">Join the WaitList</button>
      </section>

      {/* Problem Section */}
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
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${
                      feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                    } items-center gap-12`}
                  >
                    <div className="lg:w-1/2">
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
              <div className="bg-white lg:mt-12 p-8 rounded-xl shadow-sm border border-purple-100">
                {!isSubmitted ? (
                  <>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Secure Your Spot</h3>
                    <p className="text-gray-600 mb-6">
                      Join thousands of students waiting to transform their academic experience
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                      
                      <button
                        type="submit"
                        onClick={notify}
                        className="w-full cursor-pointer bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition"
                      >
                        Join Waitlist
                      </button>
                      {email &&
                        <ToastContainer 
                          position="bottom-center"
                          autoClose={5000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick={false}
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                          theme="colored"
                          // transition={Bounce}
                      />
                      }
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
                        <button className="p-2 bg-white rounded border border-purple-200 hover:bg-purple-100 transition">
                          Twitter
                        </button>
                        <button className="p-2 bg-white rounded border border-purple-200 hover:bg-purple-100 transition">
                          WhatsApp
                        </button>
                        <button className="p-2 bg-white rounded border border-purple-200 hover:bg-purple-100 transition">
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

      <div className="w-full py-4 text-center border-t text-purple-50 bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg">
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