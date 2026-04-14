import { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import Hero from './components/Hero';
import ConfettiRain from './components/ConfettiRain';
import FloatingBalloons from './components/FloatingBalloons';
import SurpriseGallery from './components/SurpriseGallery';
import BirthdayWish from './components/BirthdayWish';
import CakeSection from './components/CakeSection';

export default function App() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return <IntroScreen onStart={() => setStarted(true)} />;
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ConfettiRain />
      <FloatingBalloons />
      <Hero />
      <SurpriseGallery />
      <BirthdayWish />
      <CakeSection />
    </div>
  );
}
