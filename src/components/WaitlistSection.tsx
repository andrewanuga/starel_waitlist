import { useState, forwardRef } from "react";
import { ToastOptions } from "react-toastify";

interface WaitlistBenefit {
  title: string;
  description: string;
}

interface WaitlistSectionProps {
  waitlistBenefits: WaitlistBenefit[];
  notify: (email: string, options?: ToastOptions) => void;
}

const WaitlistSection = forwardRef<HTMLDivElement, WaitlistSectionProps>(
  ({ waitlistBenefits, notify }, ref) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [position, setPosition] = useState<number>(1247);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitted(true);
      setPosition((prev) => prev + 1);
      notify(email);
    };

    return (
      <section
        ref={ref}
        className="py-16 bg-gradient-to-r from-purple-50 to-indigo-50"
      >
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
            <div className="lg:w-2/5">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Why Join Early?
              </h3>
              <div className="space-y-6">
                {waitlistBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-purple-100"
                  >
                    <div className="p-2 bg-purple-100 rounded-md">
                      <svg
                        className="w-5 h-5 text-purple-600"
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
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-gray-900">
                        {benefit.title}
                      </h4>
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      Secure Your Spot
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Join thousands of students waiting to transform their
                      academic experience
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2 text-gray-700"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setName(e.target.value)
                          }
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
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setEmail(e.target.value)
                          }
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
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setPhone(e.target.value)
                          }
                          className="w-full px-4 py-3 bg-purple-50 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                          placeholder="08123456789"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full cursor-pointer bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition"
                      >
                        Join Waitlist
                      </button>
                    </form>
                    <p className="text-xs text-gray-500 mt-4">
                      By joining, you agree to receive updates about Starel. We
                      respect your privacy.
                    </p>
                  </>
                ) : (
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
                    <p className="text-gray-600 mb-2">
                      We'll send a confirmation email to{" "}
                      <span className="font-medium">{email}</span>
                    </p>
                    <p className="text-gray-600 mb-6">
                      Your position in line:{" "}
                      <span className="font-bold">#{position}</span>
                    </p>
                    <div className="bg-purple-200 shadow-xl p-4 rounded-lg">
                      <p className="text-sm mb-2 text-purple-700">
                        Join our WhatsApp channel to get regular updates on our
                        launch
                      </p>
                      <div className="mt-4">
                        <button className="py-2 px-6 cursor-pointer rounded-lg bg-white border border-purple-200 hover:bg-green-500 transition">
                          WhatsApp
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
    );
  }
);

export default WaitlistSection;
