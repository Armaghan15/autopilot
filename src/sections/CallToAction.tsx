import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section
      id="callToAction"
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">
            Your Competitors Are Automating. Are You?
          </h2>
          <p className="section-description mt-5">
            Stop losing leads, wasting hours, and burning money on busywork. Let
            A.I handle the work so your business runs faster, smoother, and
            smarter.
          </p>
          <Image
            src={starImage}
            alt="Star Image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
          />
          <Image
            src={springImage}
            alt="Spring Image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <a href="https://calendly.com/autopilot430" target="_blank">
            <button className="btn btn-primary">
              Book a Free Consultation Call Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
