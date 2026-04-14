import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(160deg, #fff0f5 0%, #ffe4ec 30%, #fff8e7 70%, #ffefd5 100%)',
        }}
      />

      <div className="absolute top-10 left-10 opacity-30">
        <Star className="w-8 h-8 text-yellow-400 animate-spin" style={{ animationDuration: '8s' }} />
      </div>
      <div className="absolute top-24 right-16 opacity-20">
        <Star className="w-12 h-12 text-pink-400 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }} />
      </div>
      <div className="absolute bottom-20 left-20 opacity-20">
        <Star className="w-10 h-10 text-amber-400 animate-spin" style={{ animationDuration: '10s' }} />
      </div>

      <div
        className={`relative z-10 text-center transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <p
          className="text-rose-400 text-lg md:text-2xl font-light tracking-[0.3em] uppercase mb-4"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Celebrating
        </p>

        <h1
          className="font-bold leading-none mb-4"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(3rem, 12vw, 9rem)',
            background: 'linear-gradient(135deg, #e91e63, #ff6b35, #FFD700)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: 'none',
            filter: 'drop-shadow(0 4px 12px rgba(233,30,99,0.25))',
          }}
        >
          Roshita's Day
        </h1>

        <div className="relative inline-block mb-8">
          <h2
            className="font-extrabold tracking-wide"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(3.5rem, 14vw, 10rem)',
              background: 'linear-gradient(135deg, #c2185b, #e91e63, #ff4081)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 6px 20px rgba(194,24,91,0.3))',
            }}
          >
            Happy Birthday!
          </h2>
          <div className="absolute -top-3 -right-3">
            <span className="text-4xl animate-bounce inline-block">🎉</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-rose-300" />
          <span className="text-2xl">🎂</span>
          <span className="text-rose-400 text-xl font-light tracking-widest">April 15</span>
          <span className="text-2xl">🎊</span>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-rose-300" />
        </div>

        <p
          className="text-gray-500 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-light"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Here's to an amazing friend and an unforgettable birthday celebration!
        </p>

        <div className="mt-12 flex gap-4 justify-center text-4xl">
          {['🎂', '🎉', '🎈', '💐', '🎊'].map((e, i) => (
            <span
              key={i}
              className="inline-block animate-bounce"
              style={{ animationDelay: `${i * 0.2}s`, animationDuration: '1.2s' }}
            >
              {e}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-rose-300 animate-bounce">
        <p className="text-sm tracking-widest uppercase">Scroll for surprises</p>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 14l-6-6h12l-6 6z" />
        </svg>
      </div>
    </section>
  );
}
