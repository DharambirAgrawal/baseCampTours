import hero from "../../public/images/hero.jpg";
import Image from "next/image";
const SubFooter = () => {
  return (
    <div className="p-8 w-full">
      <div className="border-y-[1px] border-red-600 py-4">
        <h1 className="font-semibold text-3xl p-4">
          Start planning your trek by contacting one of our adventure specialist
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
  );
};

export default SubFooter;
