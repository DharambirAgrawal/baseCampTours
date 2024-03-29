import hero from "../../public/images/hero.jpg";
import Image from "next/image";
const Gallery = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl p-8">#BASECAMPTOURSNEPAL</h1>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-3 w-[80%] gap-3">
          <Image
            src={hero}
            alt="img"
            height={100}
            width={100}
            className="w-full"
          />
          <Image
            src={hero}
            alt="img"
            height={100}
            width={100}
            className="w-full "
          />
          <Image
            src={hero}
            alt="img"
            height={100}
            width={100}
            className="w-full "
          />
          <Image
            src={hero}
            alt="img"
            height={100}
            width={100}
            className="w-full"
          />
          <Image
            src={hero}
            alt="img"
            height={100}
            width={100}
            className="w-full"
          />
          <Image
            src={hero}
            alt="img"
            height={100}
            width={100}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
