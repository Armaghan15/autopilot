import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import pyramidImage from "@/assets/pyramid.png";
import Image from "next/image";

const processCards = [
  {
    step: "1",
    title: "AI Agents",
    inverse: false,
    features: [
      "Your 24/7 digital staff.",
      "Handles customer questions, follow-ups, and tasks automatically.",
      "Works nonstop, never forgets, never slows down.",
      "Takes pressure off your team instantly.",
    ],
  },
  {
    step: "2",
    title: "Workflow Automation",
    inverse: true,
    features: [
      "Your repetitive tasks… gone.",
      "Sends follow-ups automatically.",
      "Moves data between tools so your team doesn’t have to.",
      "Cuts hours of manual work every week.",
    ],
  },
  {
    step: "3",
    title: "Lead & Customer Process Automation",
    inverse: false,
    features: [
      "Faster responses = more sales.",
      "Instant replies to new leads.",
      "Automatic nurturing sequences.",
      "No more dropped conversations or late responses.",
    ],
  },
  {
    step: "4",
    title: "System Integration",
    inverse: true,
    features: [
      "All your tools finally talk to each other.",
      "Connects CRM, forms, email, chat, calendars - everything.",
      "No more downloading files or copying/pasting data.",
      "Smoother operations and fewer mistakes.",
    ],
  },
];

export const Solutions = () => {
  return (
    <section id="solutions" className="py-24 overflow-x-clip">
      <div className="container relative">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Our Solutions</div>
          </div>
          <h2 className="section-title mt-5">Diverse A.I Solutions</h2>
          <p className="section-description mt-5">
            Our custom automation solutions that grow your business on
            auto-pilot while you focus on strategy.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:justify-center">
          {processCards.map(({ step, title, inverse, features }) => (
            <div
              key={step}
              className={twMerge(
                "p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full",
                inverse === true && "border-black bg-black text-white"
              )}
            >
              <h3
                className={twMerge(
                  "text-lg font-bold text-black/50",
                  inverse === true && "text-white/60"
                )}
              >
                {/* {step} */}
              </h3>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">
                  {title}
                </span>
              </div>
              <ul className="flex flex-col gap-5 mt-8">
                {features.map((feature, index) => (
                  <li key={index} className="text-sm flex items-center gap-4">
                    <CheckIcon className="h-6 w-6" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <a href="https://calendly.com/autopilot430" target="_blank">
            <button className="btn btn-primary bg-[#0C1CAB] hover:text-[#659bff] transition duration-700 ease-in-out">
              Book a Free Strategy Call
            </button>
          </a>
        </div>
        <Image
          src={pyramidImage}
          alt="Spring Image"
          width={360}
          className="absolute -right-[300px] top-[200px]"
        />
      </div>
    </section>
  );
};
