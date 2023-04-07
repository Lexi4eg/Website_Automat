import Image from "next/image";
import Navbar from "../components/Navbar";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-black overflow-hidden">
        <div className=" ">
          <Navbar />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-6 sm:grid-rows-6 w-screen ">
          <div className="sm:col-span-2 sm:row-span-2 sm:items-center">
            <div className="flex items-center h-full sm:h-full sm:w-full justify-center ">
              <div className="text-white justify-items-center ">
                <div className="text-5xl">Productive</div>
                <div className="text-5xl">Fresh and easy</div>
                <div className="text-5xl">New.</div>
              </div>
            </div>
          </div>
          <div className="sm:col-span-4 sm:row-span-5  bg-white p-2 sm:p-10">
            <div className="flex sm:flex-cols flex-row sm:justify-between justify-between">
              <div className=" text-2xl sm:text-4xl ">
                <Link
                  href={"/Blog"}
                  className="animate__animated animate__bounce"
                >
                  News
                </Link>
              </div>
              <div className="text-2xl">
                <Link href={"/Blog"}>Check more process here</Link>
              </div>
            </div>
            <div className=" text-6xl mt-10 mb-10 sm:text-8xl flex sm:mt-56 justify-center ">
              <div className="text-black ">
                <div className="">Automat</div>
                <div className="">Fresh and easy</div>
                <div className="">New.</div>
              </div>
            </div>
            <div className="grid sm:grid-cols-6  text-black justify- ">
              <div className="col-span-3">
                <Image
                  src={"/automat.jpeg"}
                  width={500}
                  height={100}
                  alt={""}
                  objectFit="cover"
                  className="border border-black rounded-md border-2"
                ></Image>
              </div>
              <div className="sm:col-span-3 w-full p-10 sm:p-0 sm:w-1/2 ">
                Introducing the Automat, a revolutionary snack automat that is
                set to disrupt the vending machine industry. With its sleek
                design and user-friendly interface, the Automat offers a
                one-of-a-kind snacking experience. Say goodbye to boring vending
                machine options and hello to a wide range of delicious and
                healthy snacks. The Automat uses cutting-edge technology to
                ensure that your snack is always fresh and at the perfect
                temperature. And with its ability to accept various payment
                methods, including mobile payments and contactless cards,
                purchasing your favorite snack has never been easier. Experience
                the future of snacking with the Automat.
              </div>
            </div>
          </div>
          <div className="col-span-2 row-span-3 bg-slate-100">
            <div className="flex flex-col items-center">
              <Image src={"/1.png"} width={450} height={800} alt={""} />
              <div className=" text-4xl sm:text-7xl text-center">
                Productive
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
