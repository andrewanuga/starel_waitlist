import feature1 from "../assets/reading.png";
import feature2 from "../assets/store.png";
import feature3 from "../assets/business.png";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Featured = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const left2Ref = useRef(null);

  useEffect(() => {
    // Left-side animation
    gsap.fromTo(
      leftRef.current,
      {
        x: "-100%",
        opacity: 0,
        ease: "power2.out",
      },
      {
        x: "0%",
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%", // Animation starts when the top of the element is 80% down from the top of the viewport
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      left2Ref.current,
      {
        x: "-100%",
        opacity: 0,
        ease: "power2.out",
      },
      {
        x: "0%",
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: left2Ref.current,
          start: "top 80%", // Animation starts when the top of the element is 80% down from the top of the viewport
          toggleActions: "play none none none",
        },
      }
    );

    // Right-side animation
    gsap.fromTo(
      rightRef.current,
      {
        x: "100%",
        opacity: 0,
        ease: "power2.out",
      },
      {
        x: "0%",
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          // markers: true
        },
      }
    );

    // It's a good practice to clean up ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const featuresAcademic = [
    {
      title: "AI-Powered Academic Support",
      description:
        "Our custom AI model trained with FUTA-specific data provides clear explanations for course PDFs, past questions, and assignments.",
      items: [
        "Simplified explanations for complex topics",
        "24/7 academic assistance",
        "Affordable premium plans starting at ₦500/month",
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
    },
  ];
  const featuredBusiness = [
    {
      title: "Sustainable Business Model",
      description:
        "Starel is designed to be financially sustainable while remaining affordable for students:",
      items: [
        {
          title: "AI Premium Plans",
          desc: "₦500-₦1000/month for advanced features",
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

  return (
    <div className="space-y-20">
      {featuresAcademic.map((feature, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            feature ? "lg:flex-row" : "lg:flex-row"
          } items-center gap-12`}
        >
          <div
            ref={left2Ref}
            className={`w-1/2 lg:w-1/2
                      transition-all duration-1000 ease-out
                    `}
          >
            <img src={feature.image} alt={feature.title} className="w-full" />
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600 mb-6">{feature.description}</p>
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
                  <div key={i} className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-700">{item}</h4>
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
            feature ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center gap-12`}
        >
          <div
            ref={rightRef}
            className={`w-1/2 lg:w-1/2
                      transition-all duration-1000 ease-out
                    `}
          >
            <img src={feature.image} alt={feature.title} className="w-full" />
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600 mb-6">{feature.description}</p>
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
                  <div key={i} className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-700">{item}</h4>
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
            feature ? "lg:flex-row" : "lg:flex-row"
          } items-center gap-12`}
        >
          <div
            ref={leftRef}
            className={`w-1/2 lg:w-1/2
                      transition-all duration-1000 ease-out
                    `}
          >
            <img src={feature.image} alt={feature.title} className="w-full" />
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600 mb-6">{feature.description}</p>
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
                  <div key={i} className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-700">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                )
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
