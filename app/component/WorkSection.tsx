import Link from "next/link";

export default function WorkSection() {
  return (
    <section className="content-section">
    <h2 className="text-2xl font-semibold mb-4">Projecten</h2>
    <div className="grid-layout">
      <div className="card">
        <h3 className="font-semibold mb-2">Innovatieve Webapplicatie</h3>
        <p>Hier vind je verschillende websites en applicaties die ik heb gemaakt, variërend van eenvoudige tools tot complexe webapplicaties</p>
        <Link href="/pages/projects/">
          <button className="button mt-4">Bekijk project</button>
        </Link>
      </div>
      <div className="card">
        <h3 className="font-semibold mb-2">CV Downloaden</h3>
        <p>Een persoonlijke portfolio website gemaakt met Next.js en Tailwind CSS. Hier kun je mijn ervaring en vaardigheden zien, evenals een downloadbare versie van mijn CV.</p>
        <a href="/cv/cv.pptx" download>
  <button className="button mt-4">Download CV</button>
</a>

      </div>
      <div className="card">
        <h3 className="font-semibold mb-2">Contact</h3>
        <p>Een volledig functioneel contactformulier dat gebruikers in staat stelt om eenvoudig met mij in contact te komen voor vragen of samenwerking.</p>
        <Link href="/pages/contact">
          <button className="button mt-4">Neem contact op</button>
        </Link>
      </div>
    </div>
  </section>
  
  );
}
  