import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-blue-700 text-white font-serif">
        <div className="max-w-[1280px] m-auto py-4 md:flex md:justify-between md:items-center text-center">
          <div className=" text-lg">
            <Link className=" p-2" href='/about'>About</Link>|
            <Link className=" p-2" href='/contact'>Contact</Link>|
            <Link className=" p-2" href='/services'>Services</Link>
          </div>
          <div className=" space-x-3 flex justify-center mt-3 md:mt-0 md:mr-2">
            <Link className=" border rounded-lg p-2 hover:bg-blue-900" href='/'>
              <Image src='/icon/facebook.png' width={18} height={18} />
            </Link>
            <Link className=" border rounded-lg p-2 hover:bg-blue-900" href='/'>
              <Image src='/icon/instagram.png' width={18} height={18} />
            </Link>
            <Link className=" border rounded-lg p-2 hover:bg-blue-900" href='/'>
              <Image src='/icon/whatsapp.png' width={18} height={18} />
            </Link>
          </div>
        </div>
        <p className="text-center p-2 py-3 border-t border-gray-400 text-lg"><Link href='/'>Brand</Link> &copy; 2023. All rights reserved.</p>
      </footer>
    </>
  )
}