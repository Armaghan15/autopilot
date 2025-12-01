import pyramidImage from "@/assets/pyramid.png";
import { ImageError } from "next/dist/server/image-optimizer";
import Image from "next/image";

export const WhatWeFix = () => {
  return (
    <section
      id="whatWeFix"
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">What We Fix</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            Is This You?
          </h2>
        </div>

        <div className="flex sm:flex-col md:flex-col lg:flex-row gap-6 justify-center items-center mt-3">
          <p className="p-10 rounded-lg bg-black text-white text-center text-[22px] leading-[30px] tracking-tight shadow-[0_7px_14px_#001E80]">
            Drained and frustrated by manual tasks?
          </p>
          <p className="p-10 rounded-lg bg-black text-white text-center text-[22px] leading-[30px] tracking-tight shadow-[0_7px_14px_#001E80]">
            Missed leads, delayed follow ups?
          </p>
          <p className="p-10 rounded-lg bg-black text-white text-center text-[22px] leading-[30px] tracking-tight shadow-[0_7px_14px_#001E80]">
            Team always “busy,” but things still lagging?
          </p>
          <p className="p-10 rounded-lg bg-black text-white text-center text-[22px] leading-[30px] tracking-tight shadow-[0_7px_14px_#001E80]">
            Operations slowing the whole business down?
          </p>
        </div>
        <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
          Let our fine tuned AI agents tailored for your business take care of
          this manual labour while you focus on actual business decisions
        </h2>
        <div className="flex justify-center mt-5">
          <a href="https://calendly.com/autopilot430" target="_blank">
            <button className="btn btn-primary bg-[#0C1CAB] hover:text-[#659bff] transition duration-700 ease-in-out">
              Book a Free Strategy Call
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
