
import Navbar from './component/Navbar';
import LandingPage from "./component/LandingPage";
import WorkSection from "./component/WorkSection";


export default function Home() {
  return (
    <div className="flex">
      <Navbar />
    
      <main className="flex-1 ml-64">
        <div className="main-container">
          <LandingPage />
          <section className="content-section">
            <h2 className="text-2xl font-semibold mb-4">Over Mij</h2>
            <p>
              Ik ben een gedreven ontwikkelaar met ervaring in het bouwen van webapplicaties 
              en het oplossen van praktische problemen door middel van technologie.
            </p>
          </section>
          <WorkSection />
          
        </div>
      </main>
    </div>
  );
}
