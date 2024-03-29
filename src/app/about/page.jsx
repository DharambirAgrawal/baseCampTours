import Link from "next/link";
import Image from "next/image";
import hero from "../../../public/images/hero.jpg";
const page = () => {
  return (
    <div className="px-28">
      <div className=" flex flex-col gap-4 bg-[#F9FBE7]">
        <h1 className="text-4xl font-bold py-10">ABOUT BASECAMPTOURS</h1>
        <h3 className="font-[500] text-2xl">
          Looking to trek in Nepal? Basecamptours specializes in treks in the
          Everest and Annapurna regions of Nepal. We have the answers and the
          experience to make your adventure happen.
        </h3>
        <p className="text-[16px]">
          Founded in 2011, our office is centrally located in Thamel, the
          tourist hub of Kathmandu. We are a fully licensed operator and all of
          our guides work for us full time, speak excellent English and are
          certified by the Trekking Association of Nepal.
        </p>
        <p className="text-[16px]">
          On average our trekking guides have over 8 years of experience and
          lead over 100 treks each. Our guides are all internationally WAFA
          (Wilderness First Aid) Certified and have taken a special course on
          issues related to acclimatization issues. Very few companies offer
          guides any training in part because they rely solely on freelancers.
          We organize about 300 treks a year in the different regions of Nepal.
        </p>
        <span className="flex gap-2 items-center">
          <h2 className="font-[500] text-lg">Read More</h2>
          <Link href="/" className="text-blue-600">
            Why Choose BaseCampTours
          </Link>
        </span>
      </div>
      <div className="py-14 flex flex-col gap-12">
        <h1 className="font-bold text-5xl">MEET THE TEAM</h1>
        <div className="grid grid-cols-3 gap-3 justify-self-center">
          <div className="flex flex-col gap-2 text-center pb-4">
            <Image
              src={hero}
              alt="pic"
              width={100}
              height={100}
              className="w-full"
            />
            <h1 className="text-xl font-semibold">Shankar</h1>
            <p>Owner and Operational Head</p>
          </div>
          <div className="flex flex-col gap-2 text-center pb-4">
            <Image
              src={hero}
              alt="pic"
              width={100}
              height={100}
              className="w-full"
            />
            <h1 className="text-xl font-semibold">Shankar</h1>
            <p>Owner and Operational Head</p>
          </div>
          <div className="flex flex-col gap-2 text-center pb-4">
            <Image
              src={hero}
              alt="pic"
              width={100}
              height={100}
              className="w-full"
            />
            <h1 className="text-xl font-semibold">Shankar</h1>
            <p>Owner and Operational Head</p>
          </div>
          <div className="flex flex-col gap-2 text-center pb-4">
            <Image
              src={hero}
              alt="pic"
              width={100}
              height={100}
              className="w-full"
            />
            <h1 className="text-xl font-semibold">Shankar</h1>
            <p>Owner and Operational Head</p>
          </div>
          <div className="flex flex-col gap-2 text-center pb-4">
            <Image
              src={hero}
              alt="pic"
              width={100}
              height={100}
              className="w-full"
            />
            <h1 className="text-xl font-semibold">Shankar</h1>
            <p>Owner and Operational Head</p>
          </div>
          <div className="flex flex-col gap-2 text-center pb-4">
            <Image
              src={hero}
              alt="pic"
              width={100}
              height={100}
              className="w-full"
            />
            <h1 className="text-xl font-semibold">Shankar</h1>
            <p>Owner and Operational Head</p>
          </div>
          <div className="flex flex-col gap-2 text-center pb-4">
            <Image
              src={hero}
              alt="pic"
              width={100}
              height={100}
              className="w-full"
            />
            <h1 className="text-xl font-semibold">Shankar</h1>
            <p>Owner and Operational Head</p>
          </div>
          <div className="flex flex-col gap-2 text-center pb-4">
            <Image
              src={hero}
              alt="pic"
              width={100}
              height={100}
              className="w-full"
            />
            <h1 className="text-xl font-semibold">Shankar</h1>
            <p>Owner and Operational Head</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
