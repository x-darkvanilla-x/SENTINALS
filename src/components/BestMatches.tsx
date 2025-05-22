import React from "react";
import Image from "next/image";
import Link from "next/link";

interface MatchProps {
  id: string;
  league: string;
  date: string;
  team1: {
    name: string;
    logo: string;
  };
  team2: {
    name: string;
    logo: string;
  };
  score: string;
}

const matchData: MatchProps[] = [
  {
    id: "1",
    league: "MDL Premier 2022",
    date: "1 September 2022",
    team1: {
      name: "SPARTAN",
      logo: "/spartan-logo.svg",
    },
    team2: {
      name: "BIGESPORT",
      logo: "/bigesport-logo.svg",
    },
    score: "1-0",
  },
  {
    id: "2",
    league: "IBL Pro 2022",
    date: "5 September 2022",
    team1: {
      name: "PREDATOR",
      logo: "/predator-logo.svg",
    },
    team2: {
      name: "BIGESPORT",
      logo: "/bigesport-logo.svg",
    },
    score: "2-3",
  },
];

const MatchCard: React.FC<{ match: MatchProps }> = ({ match }) => {
  return (
    <div className="bg-[#050A1B] p-6 rounded-sm flex flex-col h-full">
      {/* League name */}
      <div className="text-center mb-2">
        <h3 className="text-xl font-bold text-white">{match.league}</h3>
      </div>

      {/* Date */}
      <div className="text-center mb-6 text-sm text-gray-400">
        <p>{match.date}</p>
      </div>

      {/* Teams and Score */}
      <div className="flex items-center justify-between mt-auto">
        {/* Team 1 */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 relative mb-2">
            <Image
              src={match.team1.logo}
              alt={match.team1.name}
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
          <p className="text-white font-medium text-sm">{match.team1.name}</p>
        </div>

        {/* Score */}
        <div className="text-white text-3xl font-bold px-4">{match.score}</div>

        {/* Team 2 */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 relative mb-2">
            <Image
              src={match.team2.logo}
              alt={match.team2.name}
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
          <p className="text-white font-medium text-sm">{match.team2.name}</p>
        </div>
      </div>
    </div>
  );
};

const BestMatches: React.FC = () => {
  return (
    <section className="bg-[#005792] py-16 px-6 md:px-16">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div>
            <h2 className="text-white uppercase font-medium mb-4">
              BEST MATCH
            </h2>
            <h2 className="text-4xl font-bold text-left mb-4">
              LATEST
              <br />
              RESULTS
              <br />
              MATCH
            </h2>
            <p className="text-white mb-8">
              Relive the thrill of our most intense matchups. Every round, every
              clutch, every victory — see how the Sentinals rise.
            </p>
            <Link
              href="/matches"
              className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-medium py-3 px-8 inline-block text-center uppercase tracking-wide"
            >
              MATCH REPORT
            </Link>
          </div>
        </div>

        <div className="block relative overflow-hidden group">
          <div
            className="relative h-100 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url('\match-1.jpg')` }}
          >

            {/* Team member info - visible on hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-center transition-all duration-300 transform group-hover:scale-110">
                <h3 className="text-white text-2xl opacity-0 group-hover:opacity-100 md:text-2xl font-bold z-10">
                  {/* {name} */}
                </h3>
                <p className="text-white text-lg md:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* {subtitle} */}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="block relative overflow-hidden group">
          <div
            className="relative h-100 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url('\match-2.jpg')` }}
          >

            {/* Team member info - visible on hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-center transition-all duration-300 transform group-hover:scale-110">
                <h3 className="text-white text-2xl opacity-0 group-hover:opacity-100 md:text-2xl font-bold z-10">
                  {/* {name} */}
                </h3>
                <p className="text-white text-lg md:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* {subtitle} */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestMatches;