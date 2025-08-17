'use client'
import React, { useState } from 'react';
import { CiUser } from "react-icons/ci";
import { BiSolidSchool } from "react-icons/bi";
import { IoSchoolOutline } from "react-icons/io5";

const UserIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const MailIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const CheckIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20,6 9,17 4,12"></polyline>
  </svg>
);

const ArrowRightIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

const ArrowLeftIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5"></path>
    <path d="m12 19-7-7 7-7"></path>
  </svg>
);



// Main Component
const ContactContents: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [faculty, setFaculty] = useState<string>('');
  const [department, setDepartment] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="w-full h-full relative flex items-center p-10 justify-center flex-wrap">
      <div className="w-full md:w-[700px] lg:max-w-2x py-5 flex flex-wrap justify-center mx-auto bg-purple-900/50 backdrop-brightness-110 backdrop-blur-md rounded-lg shadow-lg p-6">
        {/* Progress Bar */}
        <div className="w-full flex justify-center items-center my-6">
          <div className="mb-6 lg:w-[600px] w-[300px] ">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium dark:text-gray-100">Step {step} of 3</span>
              <span className="text-sm dark:text-gray-400">{Math.round((step / 3) * 100)}%</span>
            </div>
            <div className="w-ful bg-gray-800 rounded-full h-2 overflow-hidden">
              <div
                className="signin-progress dark:bg-gray-100 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="signin-card w-[600px] md:h-[500px] bg-black border border-gray-800 rounded-lg shadow-sm p-6">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-900/50 text-white rounded-full mb-4">
              <UserIcon />
            </div>
            <h1 className="text-2xl font-semibold text-gray-100 mb-2">
              Sign Up for WaitList
            </h1>
            <p className="text-sm text-gray-400">
              {step === 1 && "Let's start with your basic information"}
              {step === 2 && "Now, set in your school info"}
              {step === 3 && "Almost done! Review your details"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Step 1: Personal Info */}
            {step === 1 && (
              <div className="signin-step space-y-6">
                <div className="space-y-6">
                  <label htmlFor="fullName" className="text-sm font-medium text-gray-100">
                    Full Name
                  </label>
                  <div className="relative mt-3">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                     <CiUser />
                    </div>
                    <input
                      id="fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={`Enter your full name`}
                      className="signin-input w-full pl-9 pr-3 py-2 bg-black border border-gray-200 dark:border-gray-800 rounded-md text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent transition-all duration-200"
                    />
                    {fullName && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
                        <CheckIcon />
                      </div>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-100">
                    Email
                  </label>
                  <div className="relative mt-3">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                      <MailIcon />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="signin-input w-full pl-9 pr-3 py-2 bg-black border border-gray-800 rounded-md text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!fullName}
                  className="signin-button w-full bg-gray-100 text-gray-900 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Next Step
                  <ArrowRightIcon />
                </button>
              </div>
            )}

            {/* Step 2: Credentials */}
            {step === 2 && (
              <div className="signin-step space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-100">
                    Faculty
                  </label>
                  <div className="relative mt-3">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none  text-gray-500">
                      <BiSolidSchool />
                    </div>
                    <input
                      id="faculty"
                      type="text"
                      value={faculty}
                      onChange={(e) => setFaculty(e.target.value)}
                      placeholder="Enter Your Faculty"
                      className="signin-input w-full pl-9 pr-3 py-2 bg-black border border-gray-800 rounded-md text-sm  text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="department" className="text-sm font-medium text-gray-100">
                    Department
                  </label>
                  <div className="relative mt-3">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                      <IoSchoolOutline />
                    </div>
                    <input
                      id="department"
                      type="text"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      placeholder="Enter Your Department"
                      className="signin-input w-full pl-9 pr-3 py-2 bg-black border border-gray-800 rounded-md text-sm text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>


                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!email || !faculty || !department}
                  className="signin-button w-full bg-gray-100 text-gray-900 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Next Step
                  <ArrowRightIcon />
                </button>
              </div>
            )}

            {/* Step 3: Review & Submit */}
            {step === 3 && (
              <div className="signin-step space-y-4">
                <div className="bg-purple-900/50 border border-gray-200 dark:border-gray-800 p-4 rounded-md">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                    <CheckIcon />
                    Review Details
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-600 dark:text-gray-400">Name:</span>
                      <span className="text-gray-900 dark:text-gray-100 font-medium">{fullName}</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-600 dark:text-gray-400">Email:</span>
                      <span className="text-gray-900 dark:text-gray-100 font-medium">{email}</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-600 dark:text-gray-400">Faculty</span>
                      <span className="text-gray-900 dark:text-gray-100 font-medium">{faculty}</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-600 dark:text-gray-400">Department</span>
                      <span className="text-gray-900 dark:text-gray-100 font-medium">{department}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="signin-button w-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-900 border-t-transparent"></div>
                      Creating account...
                    </div>
                  ) : (
                    'Sign Up to Waitlist'
                  )}
                </button>
              </div>
            )}
          </form>

          {/* Back Button */}
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="mt-4 w-full text-gray-400 hover:text-gray-100 transition-colors text-sm font-medium flex items-center justify-center gap-2"
            >
              <ArrowLeftIcon />
              Back to previous step
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactContents;

// Add custom styles for enhanced shadcn feel
const styles = `
  .signin-input:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }

  .dark .signin-input:focus {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
  }

  .signin-button:hover {
    transform: translateY(-1px);
  }

  .signin-progress {
    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateX(20px); }
    to { opacity: 1; transform: translateX(0); }
  }

  .signin-step {
    animation: slideIn 0.3s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .signin-card {
    animation: fadeIn 0.3s ease-out;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
