import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { WhatWeFix } from "@/sections/WhatWeFix";
import { Process } from "@/sections/Process";
import { Solutions } from "@/sections/Solutions";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhatWeFix />
      <Process />
      <Solutions />
      <CallToAction />
      <Footer />
    </>
  );
}
