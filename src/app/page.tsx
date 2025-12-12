import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { WhatWeFix } from "@/sections/WhatWeFix";
import { Process } from "@/sections/Process";
import { Solutions } from "@/sections/Solutions";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { VoiceBot } from "@/components/VoiceBot";

export default function Home() {
  return (
    <>
      <Header />
      <VoiceBot />
      <Hero />
      <WhatWeFix />
      <Process />
      <Solutions />
      <CallToAction />
      <Footer />
    </>
  );
}
