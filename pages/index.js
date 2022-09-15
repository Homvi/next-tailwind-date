//import pimp from "../public/assets/img/pimp.png";
import next from "../public/assets/img/next.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold flex justify-center m-5 ">Főoldal</h1>
      <div className="image-container m-5 mx-auto w-[300px] md:w-[400px] ">
        <Image
          className="h-3  w-screen"
          src={next}
          alt="next"
          layout="responsive"
        />
      </div>
    </>
  );
}
