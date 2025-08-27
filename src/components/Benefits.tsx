const Benefits = () => {
  const waitlistBenefits = [
    {
      title: "Early Access",
      description: "Be among the first to experience Starel's full features",
    },
    {
      title: "Exclusive Community",
      description: "Join our private community of early adopters",
    },
    {
      title: "Priority Support",
      description: "Get dedicated support during the early access period",
    },
  ];
  return (
    <div className="lg:w-2/5">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Why Join Early?</h3>

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
  );
};

export default Benefits;
