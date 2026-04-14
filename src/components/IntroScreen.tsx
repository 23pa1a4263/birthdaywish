import { useState } from 'react';
import { Gift } from 'lucide-react';

interface IntroScreenProps {
  onStart: () => void;
}

export default function IntroScreen({ onStart }: IntroScreenProps) {
  const [clicking, setClicking] = useState(false);

  const handleClick = () => {
    setClicking(true);
    setTimeout(onStart, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-800 to-red-900 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10 animate-pulse"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              background: 'radial-gradient(circle, #FFD700, transparent)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6">
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-yellow-400 opacity-20 scale-150" />
            <div className="relative w-28 h-28 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-yellow-200">
              <Gift className="w-14 h-14 text-rose-900" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <h1 className="text-white text-2xl font-light tracking-widest uppercase mb-2 opacity-80">
          Hey there!
        </h1>
        <h2 className="text-yellow-300 text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg"
          style={{ fontFamily: 'Georgia, serif', textShadow: '0 0 40px rgba(255,215,0,0.5)' }}>
          Birthday Fun
        </h2>
        <p className="text-pink-200 text-xl mb-12 font-light tracking-wide">
          Tap to see your surprise!
        </p>

        <button
          onClick={handleClick}
          disabled={clicking}
          className={`relative overflow-hidden px-12 py-5 rounded-full text-xl font-bold text-rose-900 shadow-2xl transition-all duration-300 ${
            clicking
              ? 'scale-95 opacity-70'
              : 'hover:scale-105 hover:shadow-yellow-400/40 active:scale-95'
          }`}
          style={{
            background: 'linear-gradient(135deg, #FFD700, #FFA500, #FFD700)',
            boxShadow: '0 0 30px rgba(255, 215, 0, 0.4)',
          }}
        >
          <span className="relative z-10">Let's Go!</span>
          <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300" />
        </button>

        <div className="mt-16 flex gap-6 justify-center">
          {['🎁', '🎈', '🎂', '✨', '🎊'].map((emoji, i) => (
            <span
              key={i}
              className="text-3xl animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
