import { ToastContainer, toast } from "react-toastify";
import { useState, useRef } from "react";
import { Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Popup from "@/components/Popup";
import Loading from "@/components/Loading";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Benefits from "@/components/Benefits";
import Solutions from "@/components/Solutions";

const HomePage = () => {
  const waitlistRef = useRef<HTMLDivElement>(null);

  const [full_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState<number>(1200);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    // Reset form fields
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setPosition(position + 1); // Increment position or set default
    
    // Show success toast
    toast.success(`✅ Joined the Starel WaitList`, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    
    // Input validation
    if (!full_name.trim()) {
      toast.error("Please enter your name", {
        position: "bottom-center",
        theme: "colored",
      });
      return;
    }
    
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address", {
        position: "bottom-center",
        theme: "colored",
      });
      return;
    }
    
    setLoading(true);
    setButtonDisabled(true);
    
    // Create AbortController for timeout and cleanup
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    try {
      const response = await fetch(
        `https://the-teams.onrender.com/api/waitlist/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name: full_name.trim(),
            email: email.trim(),
            phone_number: phone.trim(),
            message: message.trim(),
          }),
          signal: controller.signal, 
        }
      );
      
      clearTimeout(timeoutId); // Clear timeout on success
      
      // Check if response is OK before trying to parse JSON
      if (!response.ok) {
        throw new Error(`Server returned ${response.status}: ${response.statusText}`);
      }
      
      // Check if response is JSON before parsing
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Server returned non-JSON response");
      }
      
      const data = await response.json();
      
      if (response.ok) {
        // Success - show popup and reset form
        handleSubmit();
        setShowPopup(true);
        console.log("Success:", data);
      } else {
        toast.error(`❌ Failed to join: ${data.message || "Please try again"}`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.log("Failed:", response.status, data);
      }
    } catch (error) {
      clearTimeout(timeoutId); // Clear timeout on error
      console.error("Error fetching data:", error);
      
      // More specific error messages
      if (error instanceof Error) {
        if (error.name === "AbortError") {
          toast.error("❌ Request timed out. Please try again.", {
            position: "bottom-center",
            theme: "colored",
          });
        } else if (error.message.includes("Failed to fetch")) {
          toast.error("❌ Network error. Please check your connection and try again.", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else if (error.message.includes("Server returned")) {
          toast.error(`❌ Server error: ${error.message}`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          toast.error("❌ An unexpected error occurred. Please try again.", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      } else {
        toast.error("❌ An unexpected error occurred. Please try again.", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } finally {
      setLoading(false);
      setButtonDisabled(false);
    }
  };

  const handleJoinWaitlistClick = () => {
    if (waitlistRef.current) {
      waitlistRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-auto bg-gradient-to-b from-purple-50 to-indigo-50">
      <NavBar />
      <section className="parkinsans flex flex-wrap justify-center items-center gap-4 lg:py-40 py-20 lg:px-20 px-4 mx-auto bg-gradient-to-r from-purple-700 to-indigo-700">
        <HeroSection click={handleJoinWaitlistClick}/>
      </section>

      {/* Solutions for Problem Section */}
      <Solutions />

      {/* Features Section */}
      <section id="features" className="lg:py-24 py-8 max-w-7xl mx-auto px-4">
        <h2 className="text-[40px] font-bold text-center mb-16 text-gray-900">
          Our <span className="text-purple-600">Innovative Solutions</span>
        </h2>

        <div className="lg:space-y-28 space-y-16">
          <section id="features" className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              <Featured />
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
            Be among the first to experience our platform revolutionizing
            education and financial independence for Nigerian students
          </p>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Benefits Column */}
            <Benefits />

            {/* WaitList Form */}
            <div ref={waitlistRef} className="lg:w-3/5">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-purple-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Secure Your Spot
                </h3>
                <p className="text-gray-600 mb-6">
                  Join thousands of students waiting to transform their
                  academic experience
                </p>

                <form onSubmit={register} className="space-y-4">
                  <div>
                    <label
                      htmlFor="full_name"
                      className="block text-sm font-medium mb-2 text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      value={full_name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-purple-50 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-gray-700"
                    >
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
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2 text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-purple-50 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                      placeholder="08123456789"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 h-32 py-3 bg-purple-50 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                      placeholder="Optional..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full cursor-pointer bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={buttonDisabled || loading}
                  >
                    {loading ? 'Processing...' : 'Join Waitlist'}
                  </button>
                </form>

                <p className="text-xs text-gray-500 mt-4">
                  By joining, you agree to receive updates about Starel. We
                  respect your privacy.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-600">
            {loading && <Loading />}
            {showPopup && (
              <Popup
                email={email}
                onClose={closePopup}
                position={position || 1200}
              />
            )}
          </div>
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
        </div>
      </section>
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;