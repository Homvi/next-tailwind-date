import Footer from "../components/Footer";
import Link from "next/link";
import Image from 'next/image'
import BCG from "../public/assets/img/bcg.svg"

//#landing page

export default function Home() {
  return (
    <>
     <div id="background" className="h-[110%] w-screen absolute top-0 left-0 z-[10] bg-black ">
        <Image layout="fill" objectFit='cover' alt='image' src={BCG} />
      </div>
      <section className="py-24 flex items-center overflow-y-hidden min-h-screen justify-center relative z-20">
        <div className="mx-auto max-w-[43rem]">
          <div className="text-center">
            <p className="text-[2.5rem] font-medium leading-8 text-white/70">
              DateNow
            </p>
            <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-white">
              Magyarország legjobb* társkeresője
            </h1>
            <p className="mt-3 text-lg leading-relaxed text-white/70">
              Találd meg a párod akár perceken belül
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <Link href={"/registration"}>
              <a className="transform rounded-md bg-[#ea030f] hover:text-red-900 px-5 py-3 font-medium text-white transition-colors hover:bg-white/90 duration-300">
                Regisztrálj
              </a>
            </Link>
            <Link href={"/login"}>
              <a className="transform rounded-md   px-5 py-3 font-medium text-red-900 transition-colors bg-white/90 hover:bg-[#ea030f] hover:text-white">
                {" "}
                Jelentkezz be{" "}
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
