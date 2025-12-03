import Image from "next/image";



export default function Home() {
  return (
    <div className="px-[70px]">
      <div className="grid gap-3 grid-cols-3">
        <div className="col-span-2 relative w-full group overflow-hidden rounded-xl">
          <Image
            src="/image/coba1.jpeg"
            alt="Image"
            fill
            className="object-cover object-center transform rounded-xl transition-transform duration-700 group-hover:scale-103"
          />
        </div>
        <div className="col-span-1 bg-blue-300">
          <div>

            <div className="relative bg-amber-100 h-[200px]">
              <Image
                src="/image/coba1.jpeg"
                alt="Image"
                fill
                className="object-cover object-center transform"
              />
            </div>
            <div className="h-[300px] bg-accent">
              <p>Behind The Rise of LNG in Chineasd</p>
            </div>
          </div>

          <div>

          </div>
        </div>

      </div>
    </div>
  );
}
