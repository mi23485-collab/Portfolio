type NavProps = {
  name: string;
};

export function Nav({ name }: NavProps) {
  return (
    <header className="nav">
      <a className="nav-brand" href="#home">
        {name}
      </a>
      <nav aria-label="Primary">
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
