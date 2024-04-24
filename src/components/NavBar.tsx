export default function NavBar() {
  return (
    <ul className="navbar fixed h-screen flex flex-col justify-center text-white p-5">
      <li>
        <a className="group flex items-center py-3 active" href="#about">
          About
        </a>
        <a className="group flex items-center py-3 active" href="#experience">
          Experience
        </a>
        <a className="group flex items-center py-3 active" href="#projects">
          Projects
        </a>
      </li>
    </ul>
  );
}
