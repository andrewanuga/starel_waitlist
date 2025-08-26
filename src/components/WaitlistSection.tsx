import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiUsers, FiGift, FiClock, FiArrowRight } from 'react-icons/fi';

const WaitlistSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [position, setPosition] = useState(1247); // Example position

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    // Simulate getting a position in line
    setPosition(prev => prev + 1);
  };

  const benefits = [
    {
      icon: <FiGift className="text-2xl" />,
      title: "Early Access",
      description: "Be among the first to experience Starel's full features"
    },
    {
      icon: <FiUsers className="text-2xl" />,
      title: "Exclusive Community",
      description: "Join our private community of early adopters"
    },
    {
      icon: <FiClock className="text-2xl" />,
      title: "Priority Support",
      description: "Get dedicated support during the early access period"
    }
  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Join the Starel Waitlist
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-indigo-200 max-w-2xl mx-auto mb-10"
          >
            Get early access to our student platform revolutionizing education and financial independence
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Benefits Section */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-8">Why Join the Waitlist?</h3>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm"
                >
                  <div className="p-3 bg-indigo-700 rounded-lg">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{benefit.title}</h4>
                    <p className="text-indigo-200">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-3xl font-bold">{position}+</p>
                  <p className="text-indigo-300">People ahead of you</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">15</p>
                  <p className="text-indigo-300">Days until launch</p>
                </div>
              </div>
              <div className="mt-4 w-full bg-indigo-800 rounded-full h-2">
                <div 
                  className="bg-indigo-400 h-2 rounded-full transition-all duration-1000" 
                  style={{ width: `${Math.min(100, (position/2000)*100)}%` }}
                ></div>
              </div>
              <p className="text-sm text-indigo-300 mt-2">
                {Math.round((position/2000)*100)}% of waitlist spots filled
              </p>
            </motion.div>
          </div>

          {/* Form Section */}
          <div className="lg:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold mb-6">Secure Your Spot</h3>
                    <p className="text-indigo-200 mb-6">
                      Join thousands of students waiting to transform their academic experience
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none transition"
                          placeholder="your.email@futa.edu.ng"
                          required
                        />
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition flex items-center justify-center gap-2"
                      >
                        Join Waitlist <FiArrowRight />
                      </button>
                    </form>
                    
                    <p className="text-xs text-indigo-300 mt-4">
                      By joining, you agree to receive updates about Starel. We respect your privacy.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-indigo-700 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FiCheck className="text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">You're on the list!</h3>
                    <p className="text-indigo-200 mb-2">
                      We've sent a confirmation email to <span className="font-medium">{email}</span>
                    </p>
                    <p className="text-indigo-200 mb-6">
                      Your position in line: <span className="font-bold">#{position}</span>
                    </p>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <p className="text-sm mb-2">Share with friends to move up in line:</p>
                      <div className="flex gap-2 justify-center">
                        {/* Add social sharing buttons here */}
                        <button className="p-2 bg-white/10 rounded hover:bg-white/20 transition">
                          Twitter
                        </button>
                        <button className="p-2 bg-white/10 rounded hover:bg-white/20 transition">
                          WhatsApp
                        </button>
                        <button className="p-2 bg-white/10 rounded hover:bg-white/20 transition">
                          Facebook
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Testimonials */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              <h4 className="font-semibold mb-4">What early members are saying:</h4>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-indigo-200 italic">"Finally a platform that understands student needs! Can't wait for the marketplace."</p>
                  <p className="text-sm mt-2">- Tunde, FUTA</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-indigo-200 italic">"The AI academic assistant will be a game-changer for exam preparation."</p>
                  <p className="text-sm mt-2">- Chioma, UNILAG</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;