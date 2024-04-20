import Link from "next/link";

export default function Services() {
  return (
    <>
      <div>
        <div className="max-w-[1280px] m-auto p-3">
          <h2 className=" text-2xl border-b-4 border-blue-600 inline-block">Our Services</h2>
          <div className="grid">
            <Link href={''} className=" border-4 block">
              <div className=" w-full h-[250px] bg-slate-400">Image</div>
              <div>
                <h2>Sevice Name</h2>
              </div>
            </Link>
            <Link href={''} className=" border-4 block">
              <div className=" w-full h-[250px] bg-slate-400">Image</div>
              <div>
                <h2>Sevice Name</h2>
              </div>
            </Link>
            <Link href={''} className=" border-4 block">
              <div className=" w-full h-[250px] bg-slate-400">Image</div>
              <div>
                <h2>Sevice Name</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}