import Link from 'next/link';
import Image from 'next/image';

function NavBar() {
  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#29374C] px-10 py-3">
        <div className="flex items-center gap-4 text-[#F8F9FB]">
          <Image
            width={200}
            height={100}
            src="/logo.png"
            alt="Direct Drilling & Sawing Logo"
          />
          <div>
            <h2 className="text-[#F8F9FB] text-lg font-bold leading-tight tracking-[-0.015em]">
              Direct Drilling &amp; Sawing
            </h2>
            <h4>Daryl Oakes</h4>
          </div>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <Link
              className="text-[#F8F9FB] text-sm font-medium leading-normal"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-[#F8F9FB] text-sm font-medium leading-normal"
              href="/about-us"
            >
              About Us
            </Link>
            <Link
              className="text-[#F8F9FB] text-sm font-medium leading-normal"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="text-[#F8F9FB] text-sm font-medium leading-normal"
              href="/contact-us"
            >
              Contact Us
            </Link>
            {/* <Link
              className="text-[#F8F9FB] text-sm font-medium leading-normal"
              href="#"
            >
              Blog
            </Link> */}
          </div>
          {/* <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/7ef0ed6b-32e1-4ca6-8151-7ddc2e8ea9df.png")`,
            }}
          ></div> */}
        </div>
      </header>
    </>
  );
}

export default NavBar;
