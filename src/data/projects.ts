import type { Project } from "../types";

// This array is typed as Project[], so TypeScript will error
// if a project is missing a required field.
export const projects: Project[] = [
  {
    id: "portfolio",
    title: "This portfolio",
    description:
      "A personal site built with React and TypeScript, with Playwright tests that check the pages still work.",
    tags: ["TypeScript", "React", "Playwright"],
    url: "https://github.com",
  },
  {
    id: "learning-lab",
    title: "Learning lab",
    description:
      "Small practice apps I use to learn TypeScript: typed functions, lists of data, and simple UI.",
    tags: ["TypeScript", "Practice"],
    url: "https://github.com",
  },
  {
    id: "test-notes",
    title: "Playwright notes",
    description:
      "A growing set of browser tests: click a link, find a heading, and assert the page looks right.",
    tags: ["Playwright", "Testing"],
    url: "https://github.com",
  },
];
