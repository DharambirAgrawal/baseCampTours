import Image from "next/image";
import Logo from "../../public/images/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center border-b-[1px] border-slate-400">
        <Image src={Logo} width={66} height={66} alt="logo" className="" />
        <div className="flex">
          <span className="p-2">Change Location</span>
          <span></span>
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg p-1">+91 9030432668</span>
            <span className="font-light text-sm text-slate-600 justify-self-end">
              9am to 7pm IST
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between font-semibold text-lg items-center px-2">
        <span className="p-2 ">Base camp</span>
        <div className="flex items-center">
          <Link href="/" className="px-2 border-r-[1px] border-slate-400 ">
            Home
          </Link>
          <Link href="/" className="px-2 border-r-[1px] border-slate-300">
            Treks
          </Link>
          <Link href="/" className="px-2 border-r-[1px] border-slate-300">
            Tours
          </Link>
          <Link href="/" className="px-2 border-r-[1px] border-slate-300">
            Kailash
          </Link>
          <Link href="/blog" className="px-2 border-r-[1px] border-slate-300">
            Latest Stories
          </Link>
          <Link href="/about" className="px-2 border-r-[1px] border-slate-300">
            about us
          </Link>
          <Link href="/contact" className="px-2">
            Contact us
          </Link>
        </div>
        <span
          className="bg-black text-white rounded-2xl text-sm font-light p-1 px-2 mx-2
          "
        >
          Book Now
        </span>
      </div>
    </div>
  );
};

export default Navbar;
