import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="fixed top-6 left-6 z-50" aria-label="Ana Sayfa">
      <img
        src="/Logo.png"
        alt="Berat Yurtoglu Logo"
        className="w-10 h-auto hover:scale-105 ease-out duration-200 transition-transform"
      />
    </Link>
  );
};

export default Logo;
