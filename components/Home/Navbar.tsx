import Link from "next/link";
import GitHubLogo from "../../public/images/github-white.svg";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 flex justify-end w-screen px-16 py-8">
      <Link href="https://github.com/ThePickleGawd" passHref>
        <Image
          src={GitHubLogo}
          alt="GitHub Logo"
          width={30}
          height={30}
          className="hover:cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default Navbar;
