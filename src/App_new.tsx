import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Introduction } from './components/sections/Introduction';
import { DigitalDangers } from './components/sections/DigitalDangers';
import { SecurityMeasures } from './components/sections/SecurityMeasures';
import { Statistics } from './components/sections/Statistics';
import { Legislation } from './components/sections/Legislation';
import { Resources } from './components/sections/Resources';
import { Conclusion } from './components/sections/Conclusion';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-red-950 to-black text-white">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow w-full">
        <div id="home">
          <Hero setActiveSection={setActiveSection} />
        </div>
        <div id="introduction">
          <Introduction />
        </div>
        <div id="dangers">
          <DigitalDangers />
        </div>
        <div id="security">
          <SecurityMeasures />
        </div>
        <div id="statistics">
          <Statistics />
        </div>
        <div id="legislation">
          <Legislation />
        </div>
        <div id="resources">
          <Resources />
        </div>
        <div id="conclusion">
          <Conclusion />
        </div>
      </main>
      <Footer />
    </div>
  );
}
