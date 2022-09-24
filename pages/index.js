import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="py-24 flex items-center min-h-screen justify-center bg-white">
        <div className="mx-auto max-w-[43rem]">
          <div className="text-center">
            <p className="text-[2.5rem] font-medium leading-8 text-gray-500">
              DateNow
            </p>
            <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">
              Magyarország legjobb* társkeresője
            </h1>
            <p className="mt-3 text-lg leading-relaxed text-slate-400">
              Találd meg a párod akár perceken belül
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <Link href={"/registration"}>
              <a className="transform rounded-md bg-gray-800/95 px-5 py-3 font-medium text-white transition-colors hover:bg-gray-700">
                Regisztrálj
              </a>
            </Link>
            <Link href={"/login"}>
              <a className="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50">
                {" "}
                Jelentkezz be{" "}
              </a>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
