import React from 'react';

interface TeamMemberCardProps {
  name: string;
  subtitle: string;
  imagePath: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, subtitle, imagePath}) => {
  return (
    <div className="block relative overflow-hidden group">
      <div 
        className="relative h-120 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
        style={{ backgroundImage: `url(${imagePath})` }}
      >
        {/* Dark overlay that gets darker on hover */}
        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-all duration-300"></div>
        
        {/* Team member info - visible on hover */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-center transition-all duration-300 transform group-hover:scale-110">
            <h3 className="text-white text-2xl opacity-0 group-hover:opacity-100 md:text-2xl font-bold z-10">
              {name}
            </h3>
            <p className="text-white text-lg md:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamCards: React.FC = () => {
  const teamMembers = [
    {
      name: 'BEAST',
      subtitle: 'Duelist',
      imagePath: '/pubg-mobile.jpg', // Replace with actual team member images
    },
    {
      name: 'FRAGGOD',
      subtitle: 'Pubg IGL',
      imagePath: '/milan.jpg', // Replace with actual team member images
    },
    {
      name: 'PHANTOM',
      subtitle: 'Assaulter',
      imagePath: '/racing-game.jpg', // Replace with actual team member images
    }
  ];

  return (
    <section className="py-16 bg-[#050A1B] text-white">
      <div className="container mx-auto md:px-20 px-10">
      <h2 className="text-1xl text-center mb-4">SENTINALS TEAM</h2>
        <h2 className="text-4xl font-bold text-center mb-12">MEET OUR BEST PRO PLAYERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard 
              key={index}
              name={member.name}
              subtitle={member.subtitle}
              imagePath={member.imagePath}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCards;