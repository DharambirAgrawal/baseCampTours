import Body from "@/components/Body";
import Link from "next/link";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="w-full">
      <div className="hero bg-no-repeat">
        <div className="text-white flex flex-col justify-center w-full items-center pt-32 pb-48">
          <h1 className="font-bold text-5xl text-center p-4">
            Find the next place to explore the beauty of the world
          </h1>
          <p className="font-normal text-lg p-4">
            Find your destination and bookanytime,anywhere to explore this
          </p>
          <div className="flex gap-4">
            <button className="rounded-2xl px-3 py-1 bg-red-600">
              Lets Explore
            </button>
            <div>
              <span></span>
              <span>Watch Video</span>
            </div>
          </div>
        </div>
        <Body />
      </div>
    </main>
  );
}
