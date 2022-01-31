export default function Navlinks({ dir }) {
  const dirs = {
    horizontal: "flex-row justify-center space-x-1 md:space-x-6 lg:space-x-24",
    vertical: "flex-col space-y-5",
  };

  const pickedDir = dirs[dir];
  return (
    <>
      <ul className={`flex font-regular text-white text-base ${pickedDir}`}>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </>
  );
}
