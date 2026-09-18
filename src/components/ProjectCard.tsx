import type { Project } from "../types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <a href={project.url} target="_blank" rel="noreferrer">
        View project
      </a>
    </article>
  );
}
