import { Nav } from "./components/Nav";
import { ProjectCard } from "./components/ProjectCard";
import { projects } from "./data/projects";
import "./App.css";

const NAME = "Maimuna";
const EMAIL = "hello@example.com";

function App() {
  return (
    <>
      <Nav name={NAME} />

      <main>
        <section id="home" className="hero">
          <p className="eyebrow">Software engineer</p>
          <h1>{NAME}</h1>
          <p className="lede">
            I am learning TypeScript and Playwright by building this portfolio
            in public — one page, one type, and one test at a time.
          </p>
          <a className="button" href="#projects">
            See projects
          </a>
        </section>

        <section id="about">
          <h2>About</h2>
          <p>
            I am a software engineer focused on writing clear TypeScript and
            checking my work with Playwright. This site is my practice ground:
            typed data for projects, React components for the UI, and browser
            tests so the important bits stay visible.
          </p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Want to say hello? Email me at:</p>
          <a className="email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </section>
      </main>

      <footer>
        <p>Built with TypeScript, React, and Playwright.</p>
      </footer>
    </>
  );
}

export default App;
