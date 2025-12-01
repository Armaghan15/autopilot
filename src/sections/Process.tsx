import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import cylinderImage from "@/assets/cylinder.png";
import Image from "next/image";

const processCards = [
  {
    step: "Step 1",
    title: "Business Analysis",
    inverse: false,
    features: [
      "We see how your team actually works.",
      "We spot time-wasting tasks.",
      "We find where leads get stuck.",
      "We review your tools and bottlenecks.",
      "We understand your goals.",
      "You get a clear improvement plan.",
    ],
  },
  {
    step: "Step 2",
    title: "Developing Your Solutions",
    inverse: true,
    features: [
      "We build automations around your workflow.",
      "We connect your tools so nothing gets missed.",
      "We remove repetitive manual work.",
      "We speed up follow-ups and operations.",
      "We keep everything simple to use.",
      "You see real solutions, not guesses.",
    ],
  },
  {
    step: "Step 3",
    title: "Testing & Deployment",
    inverse: false,
    features: [
      "We test everything in real scenarios.",
      "We fix issues before launch.",
      "We show your team how it all works.",
      "We plug solutions into your daily operations.",
      "We support you through rollout.",
      "You get a system that runs itself.",
    ],
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-24 overflow-x-clip">
      <div className="container relative">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">How It Works</div>
          </div>
          <h2 className="section-title mt-5">Our Entire Process</h2>
          <p className="section-description mt-5">
            Discover how we UNDERSTAND your business to the core, tailor
            SOLUTIONS for it, <br />
            and take it to the NEXT LEVEL.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:justify-center">
          {processCards.map(({ step, title, inverse, features }) => (
            <div
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
                {step}
              </h3>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">
                  {title}
                </span>
              </div>
              <ul className="flex flex-col gap-5 mt-8">
                {features.map((feature) => (
                  <li className="text-sm flex items-center gap-4">
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
          src={cylinderImage}
          alt="Spring Image"
          width={360}
          className="absolute -left-[300px] top-[200px]"
        />
      </div>
    </section>
  );
};
