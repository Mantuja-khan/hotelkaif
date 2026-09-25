import { PageHero, ProjectsGrid } from "@/components/arcova";
import hero from "@/assets/project-horizon.jpg";

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Discover the resort"
        title={
          <>
            Spaces That Define
            <br />
            <em>Excellence.</em>
          </>
        }
        text="A world of serene suites, lush gardens, soulful dining, and restorative wellness."
        image={hero}
      />
      <section className="section">
        <div className="project-heading">
          <p className="eyebrow">Stay · Dine · Spa · Celebrate</p>
          <h2>
            Created with care.
            <br />
            Remembered for feeling.
          </h2>
        </div>
        <ProjectsGrid />
      </section>
    </>
  );
}
