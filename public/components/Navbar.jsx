import "./Navbar.css";

function Navbar() {
  return (
    <div className="relative">
      <img src="../src/assets/navigBarNoShadow.svg" />
      <img src="../src/assets/gmsLogo.svg" />
      <p className="absolute top-20">HOME</p>
    </div>
  );
}

export default Navbar;
