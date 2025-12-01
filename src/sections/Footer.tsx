import logo from "@/assets/logo-white.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container flex flex-col items-center justify-center">
        <Image src={logo} height={100} alt="AutoPilot White Logo" />
        <p>&copy; 2025 AutoPilot A.I, Inc. All rights reserved</p>
      </div>
    </footer>
  );
};
