
const WISHES = [
  { icon: '🌟', text: 'May every wish you make today come true' },
  { icon: '🎯', text: 'May success and fun fill your year ahead' },
  { icon: '🌈', text: 'May this year bring you endless awesome moments' },
  { icon: '🚀', text: 'May you achieve everything you dream of' },
];

export default function BirthdayWish() {
  return (
    <section
      className="relative py-24 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a0a12 0%, #3d1020 40%, #1a0510 100%)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              background: '#FFD700',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.2,
              animation: `twinkle ${Math.random() * 3 + 2}s ${Math.random() * 3}s infinite alternate`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes twinkle {
          from { opacity: 0.1; transform: scale(0.8); }
          to   { opacity: 0.9; transform: scale(1.2); }
        }
      `}</style>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="text-6xl">🎉</div>
        </div>

        <h2
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          style={{ fontFamily: 'Georgia, serif', textShadow: '0 0 40px rgba(255,100,150,0.4)' }}
        >
          Yo, Roshita!
        </h2>

        <p
          className="text-rose-200 text-lg md:text-xl leading-relaxed mb-12 font-light"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Happy birthday to an awesome friend! Today's all about celebrating you and having an amazing time together.
          Thanks for being such a cool person to hang out with.
          Let's make this year unforgettable!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {WISHES.map((w, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-rose-800/30 rounded-2xl p-5 text-left flex gap-4 items-start hover:bg-white/10 transition-colors duration-300"
            >
              <span className="text-3xl flex-shrink-0">{w.icon}</span>
              <p className="text-rose-100 font-light leading-relaxed">{w.text}</p>
            </div>
          ))}
        </div>

        <div
          className="text-2xl md:text-3xl font-bold"
          style={{
            fontFamily: 'Georgia, serif',
            background: 'linear-gradient(135deg, #FFD700, #FF6B9D, #FFD700)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Have the Best Day Ever! 🎂
        </div>

        <p className="text-rose-400 mt-3 text-base tracking-widest uppercase font-light">
          Your Friend
        </p>
      </div>
    </section>
  );
}
