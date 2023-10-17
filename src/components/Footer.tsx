import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-screen flex justify-center text-xl mb-2">
      <Link to="/about">About me</Link>
      <div className="mx-8">|</div>
      <Link to="/contact">Contact details</Link>
    </div>
  );
};

export default Footer;
