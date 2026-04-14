const BALLOONS = [
  { color: '#FF6B9D', highlight: '#FFB3D1', x: '8%', delay: '0s', duration: '12s', size: 60 },
  { color: '#FFD700', highlight: '#FFF0A0', x: '18%', delay: '2s', duration: '15s', size: 50 },
  { color: '#FF4757', highlight: '#FFAAAA', x: '82%', delay: '1s', duration: '13s', size: 55 },
  { color: '#2ED573', highlight: '#A8FFCC', x: '90%', delay: '3s', duration: '11s', size: 45 },
  { color: '#1E90FF', highlight: '#A0CFFF', x: '75%', delay: '0.5s', duration: '14s', size: 52 },
  { color: '#FF6348', highlight: '#FFCCBB', x: '5%', delay: '4s', duration: '16s', size: 48 },
];

export default function FloatingBalloons() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {BALLOONS.map((b, i) => (
        <div
          key={i}
          className="absolute bottom-0"
          style={{
            left: b.x,
            animation: `floatBalloon ${b.duration} ${b.delay} infinite ease-in-out`,
          }}
        >
          <svg
            width={b.size}
            height={b.size * 1.3}
            viewBox="0 0 60 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="30" cy="28" rx="26" ry="28" fill={b.color} />
            <ellipse cx="22" cy="18" rx="7" ry="9" fill={b.highlight} opacity="0.6" />
            <path d="M30 56 Q28 62 30 68 Q32 62 30 56Z" fill={b.color} opacity="0.7" />
            <path
              d="M30 68 Q20 72 18 76"
              stroke={b.color}
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />
          </svg>
        </div>
      ))}

      <style>{`
        @keyframes floatBalloon {
          0%   { transform: translateY(0) rotate(-3deg); }
          25%  { transform: translateY(-40vh) rotate(3deg); }
          50%  { transform: translateY(-80vh) rotate(-2deg); }
          75%  { transform: translateY(-120vh) rotate(2deg); }
          100% { transform: translateY(-150vh) rotate(0deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
