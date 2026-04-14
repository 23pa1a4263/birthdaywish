import { useState } from 'react';
import { Gift } from 'lucide-react';

const SURPRISES = [
  {
    id: 1,
    label: 'A Sweet Wish',
    caption: 'May your life be as sweet as cake!',
    image: 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-pink-400 to-rose-500',
  },
  {
    id: 2,
    label: 'Colors of Joy',
    caption: 'May every day be colorful and bright!',
    image: 'https://images.pexels.com/photos/796607/pexels-photo-796607.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-amber-400 to-orange-500',
  },
  {
    id: 3,
    label: 'Celebrate!',
    caption: 'Throw confetti every day!',
    image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    id: 4,
    label: 'Petal Perfection',
    caption: 'Beautiful like flowers in bloom.',
    image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-fuchsia-400 to-pink-500',
  },
  {
    id: 5,
    label: 'Sparkle On',
    caption: 'You light up every room you walk into.',
    image: 'https://images.pexels.com/photos/1679825/pexels-photo-1679825.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-yellow-400 to-amber-500',
  },
  {
    id: 6,
    label: 'Cheers to You',
    caption: 'A toast to an amazing person!',
    image: 'https://images.pexels.com/photos/2072181/pexels-photo-2072181.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-sky-400 to-blue-500',
  },
];

interface FlipCardProps {
  surprise: (typeof SURPRISES)[number];
  index: number;
}

function FlipCard({ surprise, index }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative cursor-pointer"
      style={{
        perspective: '1000px',
        animationDelay: `${index * 0.1}s`,
      }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className="relative w-full transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          height: '300px',
        }}
      >
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${surprise.color} flex flex-col items-center justify-center shadow-xl`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm border border-white/30">
            <Gift className="w-10 h-10 text-white" strokeWidth={1.5} />
          </div>
          <p className="text-white font-bold text-xl text-center px-4">{surprise.label}</p>
          <p className="text-white/70 text-sm mt-2">Tap to reveal</p>
          <div className="absolute top-3 right-3 text-2xl animate-bounce">🎁</div>
        </div>

        <div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <img
            src={surprise.image}
            alt={surprise.label}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-white font-bold text-lg">{surprise.label}</p>
            <p className="text-white/80 text-sm mt-1">{surprise.caption}</p>
          </div>
          <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs">
            Tap to flip back
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SurpriseGallery() {
  return (
    <section className="relative py-20 px-4 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #fff0f5 0%, #fce4ec 50%, #fff8e1 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-rose-400 text-sm tracking-[0.3em] uppercase font-semibold mb-3">
            Just For You
          </p>
          <h2
            className="font-bold text-4xl md:text-5xl"
            style={{
              fontFamily: 'Georgia, serif',
              background: 'linear-gradient(135deg, #c2185b, #e91e63)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Your Surprise Gallery
          </h2>
          <p className="text-gray-500 mt-4 text-lg font-light">
            Tap each card to reveal a special birthday surprise!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SURPRISES.map((s, i) => (
            <FlipCard key={s.id} surprise={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
