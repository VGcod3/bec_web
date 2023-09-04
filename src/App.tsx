import React from 'react';
import Hero from "./components/Hero"
import Planets from "./components/Planets"
import AboutEbec from './components/AboutEbec';
import MVA from './components/MVA';
import History from './components/History'
import Partners from './components/Partners'
import Structure from './components/Structure'
import BECforYou from './components/BECforYou';
import Future from './components/Future'
import Orgs from './components/Orgs';
import Team from './components/Team';

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

function ScreenSection({ children }: { children: React.ReactElement }) {
  const ref = useRef(null);

  return (
    <section>
      <div ref={ref} className='h-full w-screen'>
        {children}
      </div>
    </section>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <ScreenSection>
        <Hero />
      </ScreenSection>
      <ScreenSection>
        <AboutEbec />
      </ScreenSection>
      <ScreenSection>
        <div className='grid grid-cols-12'>
          <div className="col-span-12 h-screen ">
            <MVA />
          </div>
          <div className="col-span-12 absolute w-full ">
            <Planets />
          </div>
        </div>
      </ScreenSection>

      <ScreenSection >
        <History />
      </ScreenSection>
      <ScreenSection >
        <Structure />
      </ScreenSection>
      <ScreenSection >
        <BECforYou />
      </ScreenSection>
      <ScreenSection >
        <Future />
      </ScreenSection>
      <ScreenSection >
        <Orgs />
      </ScreenSection>
      <ScreenSection >
        <Team />
      </ScreenSection>
      <ScreenSection >
        <Partners />
      </ScreenSection>

      <motion.div className="progress  px-8" style={{ scaleX }} />
    </>
  );
}
