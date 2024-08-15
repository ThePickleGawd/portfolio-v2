import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

export const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 flex justify-end w-screen px-16 py-8">
      <SocialIcon url="https://github.com/ThePickleGawd/portfolio-v2" />
    </div>
  );
};

export default Navbar;
