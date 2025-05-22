import Header from "../components/Header";
import GameCards from "@/components/GameCards";
import TeamCards from "@/components/TeamCards";
import BestMatches from "@/components/BestMatches";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <GameCards />
      <BestMatches />
      <TeamCards />
      <section className="bg-[#005792] py-16 px-6 md:px-16">
        <VideoSection />
      </section>
    </div>
  );
}
