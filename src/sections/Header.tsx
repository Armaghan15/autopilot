import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get Expert Advice Now</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center " />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="AutoPilot Logo" height={70} width={70} />
            {/* <MenuIcon className="h-6 w-6 md:hidden" /> */}
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a
                className="hover:text-black transition duration-300 ease-in-out"
                href="#whatWeFix"
              >
                What We Fix
              </a>
              <a
                className="hover:text-black transition duration-300 ease-in-out"
                href="#process"
              >
                How It Works
              </a>
              <a
                className="hover:text-black transition duration-300 ease-in-out"
                href="#solutions"
              >
                Our Solutions
              </a>
              <a href="https://calendly.com/autopilot430" target="_blank">
                <button className="bg-black hover:hover:text-[#4184ff] transition duration-700 ease-in-out text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                  Book Free Call
                </button>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
