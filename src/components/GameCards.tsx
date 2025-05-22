import React from 'react';

interface GameCardProps {
  title: string;
  imagePath: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, imagePath}) => {
  return (
    <div className="block relative overflow-hidden group">
      <div 
        className="relative h-120 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
        style={{ backgroundImage: `url(${imagePath})` }}
      >
        {/* Dark overlay that gets darker on hover */}
        <div className="absolute inset-0 bg-black opacity-40 hover:opacity-60 transition-all duration-300"></div>
        
        {/* Game title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-white text-2xl md:text-3xl font-bold z-10 transition-all duration-300 group-hover:scale-110">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

const GameCards: React.FC = () => {
  const games = [
    {
      title: 'PUBG Mobile',
      imagePath: '/pubg-mobile.jpg', // Using SVG content with .jpg extension
    },
    {
      title: 'Valorant',
      imagePath: '/valorant.jpg', // Using SVG content with .jpg extension
    },
    {
      title: 'Asphalt 9',
      imagePath: '/racing-game.jpg', // Using SVG content with .jpg extension
    }
  ];

  return (
    <section className="py-16 bg-[#050A1B] text-white">
      <div className="container mx-auto md:px-20 px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <GameCard 
              key={index}
              title={game.title}
              imagePath={game.imagePath}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameCards;