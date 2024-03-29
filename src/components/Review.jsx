import { AiFillStar } from "react-icons/ai";
import hero from "../../public/images/hero.jpg";
import Image from "next/image";

const Review = () => {
  return (
    <div className="bg-white rounded-lg m-2 w-1/3 p-2">
      <div className="text-yellow-700 flex gap-2 p-2">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
      <p className="p-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam numquam
        voluptatem animi consectetur placeat quibusdam quis amet ipsum officiis,
        vitae minus atque dolorum adipisci labore omnis. Velit accusantium
        eligendi commodi!
      </p>
      <div className="flex p-2 gap-2 items-center">
        <Image
          className="rounded-full w-10 h-10"
          width={66}
          height={66}
          alt="profile"
          src={hero}
        />
        <div className="flex flex-col">
          <span className="text-lg font-semibold">Dharam</span>
          <span className="text-sm text-slate-600 font-light">Traveler</span>
        </div>
      </div>
    </div>
  );
};

export default Review;
