import hero from "../../public/images/hero.jpg";
import Image from "next/image";
import Review from "@/components/Review";
import Departure from "./Departure";

import Gallery from "./Gallery";
import { AiOutlineArrowRight } from "react-icons/ai";

const Body = () => {
  return (
    <div className="rounded-t-[40px] p-4 bg-[#F9FBE7] w-full">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-5xl font-bold text-center p-8 text-slate-900">
          FIND YOUR BEST TREK
        </h1>
        <span className="h-[3px] w-10 bg-red-600"></span>
        <p className="p-4 text-slate-500 font-light">
          see the beauty of the world easily and safely with Base camp
        </p>
        <div className="flex gap-2 w-full items-center justify-center">
          <Image
            src={hero}
            alt="img"
            height={66}
            width={66}
            className="w-1/4  hover:-translate-y-2 transition-transform"
          />
          <Image
            src={hero}
            alt="img"
            height={66}
            width={66}
            className="w-1/4 hover:-translate-y-2 transition-transform"
          />
          <Image
            src={hero}
            alt="img"
            height={66}
            width={66}
            className="w-1/4 hover:-translate-y-2 transition-transform"
          />
        </div>
        <div className="flex gap-2 p-4 items-center">
          <p className="font-semibold text-xl ">See more Treks</p>
          <AiOutlineArrowRight className="text-red-600 text-xl" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-5xl font-bold text-center p-8 text-slate-900">
          FIND YOUR BEST TOUR
        </h1>
        <span className="h-[3px] w-10 bg-red-600"></span>
        <p className="p-4 text-slate-500 font-light">
          see the beauty of the world easily and safely with Base camp
        </p>
        <div className="flex gap-2 w-full items-center justify-center">
          <Image
            src={hero}
            alt="img"
            height={66}
            width={66}
            className="w-1/4 h-3/4"
          />
          <Image
            src={hero}
            alt="img"
            height={66}
            width={66}
            className="w-1/4"
          />
          <Image
            src={hero}
            alt="img"
            height={66}
            width={66}
            className="w-1/4"
          />
        </div>
        <div className="flex gap-2 p-4 items-center">
          <p className="font-semibold text-xl ">See more Treks</p>
          <AiOutlineArrowRight className="text-red-600 text-xl" />
        </div>
      </div>
      <div className="w-full gap-2">
        <h1 className="text-5xl font-bold text-slate-900 text-center py-8">
          Loved by over million travellers
        </h1>
        <div className="w-full flex">
          <Review />
          <Review />
          <Review />
        </div>
      </div>

      <div className="w-full">
        <Gallery />
      </div>
      <div className="w-full">
        <Departure />
      </div>
      {/* <div className="w-full">
        <SubFooter />
      </div> */}
    </div>
  );
};

export default Body;
