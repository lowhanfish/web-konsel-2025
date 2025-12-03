import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <div className="px-3 lg:px-10 xl:px-[70px]">
      <div className="grid gap-3 grid-cols-1 lg:grid-cols-3">

        <div className="col-span-2 flex items-center lg:pl-20 relative w-full group overflow-hidden rounded-xl">
          <div className="md:absolute max-w-[350px] bg-black/70 z-4 p-5 rounded-lg shadow-lg">
            <p className="font-semibold">Pemerintah Kabupaten </p>
            <p className="text-[35px] font-bold -mt-3">Konawe Selatan</p>
            <p className="pt-3 text-[14px] line-clamp-4">Kabupaten Konawe Selatan adalah sebuah kabupaten di Provinsi Sulawesi Tenggara, Indonesia, yang ibu kotanya terletak di Andoolo. Wilayah ini terbentuk dari pemekaran Kabupaten Kendari berdasarkan Undang-Undang Nomor 4 Tahun 2003</p>
            <Link href="">
              <button className="mt-3 mb-3 bg-primary border-2 rounded-lg border-primary cursor-pointer h-[45px] px-5 hover:bg-black/30 hover:text-primary">
                <p className="font-bold text-[12px]">Baca Selengkapnya</p>
              </button>
            </Link>
          </div>

          <div>
            <Image
              src="/image/box4.jpeg"
              alt="Image"
              fill
              className="object-cover object-center transform rounded-xl transition-transform duration-700 group-hover:scale-103"
            />

          </div>



        </div>


        <div className="col-span-1 flex flex-col gap-2 ">
          <div className="rounded-lg overflow-hidden group">

            <div className="relative h-[200px]">
              <Image
                src="/image/coba1.jpeg"
                alt="Image"
                fill
                className="object-cover object-center transform transition-transform duration-700 group-hover:scale-102"
              />
            </div>
            <div className="h-[100px] bg-accent p-5">
              <p className="font-bold">Behind The Rise of LNG in Chineasd</p>
            </div>
          </div>

          <div className="h-[300px] bg-amber-500 rounded-lg">

          </div>
        </div>

      </div>
    </div>
  );
}
