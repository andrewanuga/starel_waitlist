import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center lg:px-16 px-6 fixed top-0 p-4 bg-purple-700 backdrop-blur-xl text-white z-50">
      <div className="flex items-center gap-3">
        <div className="bg-white rounded-xl p-2 shadow-sm">
          <img src={logo} alt="logo" className="w-5 h-5" />
        </div>
        <div className="lg:text-2xl text-xl font-bold bg-white bg-clip-text text-transparent">
          Starel
        </div>
      </div>
    </nav>
  );
};

export default Navbar;