import pimp from "../public/assets/img/pimp.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold flex justify-center m-5 ">Főoldal</h1>
      <Image
        className="fixed bottom-0 left-0"
        src={pimp}
        alt="Picture of the author"
        width={500}
        height={400}
        layout="responsive"
      />
    </>
  );
}
