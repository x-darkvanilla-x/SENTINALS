import React from "react";
import Link from "next/link";

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