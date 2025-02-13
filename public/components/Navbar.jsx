import "./Navbar.css";

function Navbar() {
  return (
    <nav className=" shadow-indigo-50/50 object-top w-[1366px] h-[204px]">
      <img src="../src/assets/navigBarNoShadow.svg" alt="navbar" className="object-cover object-top shadow-blue-shadow" />

        <button className="font-sans text-stroke-blue">Home</button>
        <button className="font-sans">Projects</button>
        <button className="font-sans">Skills</button>

    </nav>
  );
}

export default Navbar;
