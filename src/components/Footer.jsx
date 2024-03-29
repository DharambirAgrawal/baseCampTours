import logo from "../../public/images/logo.png";
import Image from "next/image";
import hero from "../../public/images/hero.jpg";
import Link from "next/link";

import {
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#F9FBE7] w-full p-10">
      <div className="flex gap-4 px-8 w-full">
        <div className="border-t-[1px] border-red-600 flex w-full py-4 justify-between items-start">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-lg py-1">Nepal Treks</h1>
            <Link href="/">Choosing a Trek</Link>
            <Link href="/">Tea House Trekking</Link>
            <Link href="/">Trekking Trips</Link>
            <Link href="/">Flying to Lukla</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-lg py-1">Trek Preparation</h1>
            <Link href="/">Packing List</Link>
            <Link href="/">Fitness Training</Link>
            <Link href="/">Travel Insurance</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-lg py-1">Travel Information</h1>
            <Link href="/">Arrival & Visas</Link>
            <Link href="/">Best Time to Go</Link>
            <Link href="/">Meet the Team</Link>
          </div>
        </div>
      </div>

      <div className="p-8 w-full">
        <div className="border-y-[1px] border-red-600 py-4">
          <h1 className="font-semibold text-3xl p-4">
            Start planning your trek by contacting one of our adventure
            specialist
          </h1>
          <div className="p-2 flex gap-4 w-full justify-center">
            <div className="flex flex-col justify-center items-center">
              <Image
                src={hero}
                className="h-44 w-44"
                width={80}
                height={80}
                alt="img"
              />
              <span className="text-slate-800 ">Shankar</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src={hero}
                className="h-44 w-44"
                width={80}
                height={80}
                alt="img"
              />
              <span className="text-slate-800 ">Shankar</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src={hero}
                className="h-44 w-44"
                width={80}
                height={80}
                alt="img"
              />
              <span className="text-slate-800 ">Shankar</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src={hero}
                className="h-44 w-44"
                width={80}
                height={80}
                alt="img"
              />
              <span className="text-slate-800 ">Shankar</span>
            </div>
            <div className="flex flex-col px-4 gap-2">
              <span className="text-slate-500">
                Call us, we're available 24/7
              </span>
              <span className="font-bold text-xl">+91 744 744 2481</span>
              <button className="bg-blue-600 text-white rounded px-4 py-2 font-bold text-lg">
                Start Planning My Trip
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-[1px] border-slate-400 flex justify-between items-start">
        <div className="px-4">
          <Image src={logo} alt="logo" className="p-2" height={80} width={80} />
          <p className="text-sm font-light text-slate-500 p-2">
            Enjoy your travel with Base camp
          </p>
        </div>
        <div className="flex text-slate-500 text-sm gap-4">
          <div className="flex flex-col p-2 gap-1">
            <h1 className="font-semibold text-black">Menu</h1>
            <span>Home</span>
            <span>Destination</span>
            <span>About Us</span>
          </div>
          <div className="flex flex-col p-2 gap-1">
            <h1 className="font-semibold text-black">Booking Plan</h1>
            <span>Home</span>
            <span>Destination</span>
          </div>
          <div className="flex flex-col p-2 gap-1">
            <h1 className="font-semibold text-black">Further Information</h1>
            <span>Terms & Condition</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm font-light text-slate-500 p-2">
          2023 Base Camp. All rights reserved
        </p>
        <div className="flex gap-2 text-2xl text-slate-600">
          <AiOutlineInstagram /> <BsFacebook />
          <AiOutlineLinkedin />
          <AiFillTwitterCircle />
        </div>
      </div>
    </div>
  );
};

export default Footer;
