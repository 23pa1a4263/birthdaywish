import { useState } from 'react';

export default function CakeSection() {
  const [blown, setBlown] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleBlow = () => {
    if (blown) return;
    setBlown(true);
    setTimeout(() => setShowMessage(true), 800);
  };

  return (
    <section
      className="relative py-24 px-4 overflow-hidden text-center"
      style={{ background: 'linear-gradient(160deg, #fff8e1 0%, #fce4ec 50%, #e8f5e9 100%)' }}
    >
      <div className="max-w-lg mx-auto">
        <p className="text-rose-400 text-sm tracking-[0.3em] uppercase font-semibold mb-4">
          Make a Wish
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold mb-10"
          style={{
            fontFamily: 'Georgia, serif',
            background: 'linear-gradient(135deg, #e91e63, #ff6b35)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Blow the Candles!
        </h2>

        <div className="relative inline-block cursor-pointer select-none" onClick={handleBlow}>
          <svg
            viewBox="0 0 200 220"
            width="240"
            height="264"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-2xl"
          >
            <rect x="30" y="150" width="140" height="60" rx="10" fill="#F48FB1" />
            <rect x="30" y="110" width="140" height="45" rx="8" fill="#F06292" />
            <rect x="30" y="130" width="140" height="5" fill="#EC407A" opacity="0.5" />
            <ellipse cx="100" cy="150" rx="70" ry="8" fill="#F8BBD9" />
            <rect x="30" y="105" width="140" height="8" rx="4" fill="#F48FB1" />

            {[50, 80, 100, 120, 150].map((x, i) => (
              <g key={i}>
                <rect x={x - 2} y="75" width="4" height="30" rx="2" fill="#FFD54F" />
                {!blown && (
                  <>
                    <ellipse cx={x} cy="70" rx="5" ry="8" fill="#FF8F00" />
                    <ellipse cx={x} cy="68" rx="3" ry="5" fill="#FFEE58" opacity="0.8" />
                    <ellipse
                      cx={x}
                      cy="65"
                      rx="4"
                      ry="7"
                      fill="#FF6D00"
                      opacity="0.6"
                      className="animate-pulse"
                    />
                  </>
                )}
                {blown && (
                  <g>
                    <line x1={x - 4} y1="72" x2={x - 8} y2="60" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                    <line x1={x} y1="72" x2={x + 2} y2="58" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                    <line x1={x + 4} y1="72" x2={x + 8} y2="62" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
                  </g>
                )}
              </g>
            ))}

            <text x="100" y="185" textAnchor="middle" fill="white" fontSize="13" fontFamily="Georgia, serif" fontWeight="bold">
              Happy Birthday
            </text>
            <text x="100" y="202" textAnchor="middle" fill="#FCE4EC" fontSize="14" fontFamily="Georgia, serif" fontWeight="bold">
              Roshita!
            </text>
          </svg>

          {!blown && (
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="bg-rose-100 text-rose-500 text-sm px-4 py-2 rounded-full border border-rose-200 animate-bounce inline-block">
                Click to blow out the candles!
              </span>
            </div>
          )}
        </div>

        <div className={`mt-16 transition-all duration-1000 ${showMessage ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <p className="text-5xl mb-4">🎉</p>
          <p
            className="text-3xl font-bold"
            style={{
              fontFamily: 'Georgia, serif',
              background: 'linear-gradient(135deg, #e91e63, #FFD700)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Your wish is on its way!
          </p>
          <p className="text-gray-500 mt-3 font-light">May all your dreams come true, Roshita!</p>
        </div>
      </div>

      <footer className="mt-24 text-center text-gray-400 text-sm font-light tracking-wide">
        Made with <span className="text-rose-400">love</span> for a very special birthday
      </footer>
    </section>
  );
}
