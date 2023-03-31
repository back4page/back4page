import Link from "next/link";

function Footer() {
  return (
    <div className="bg-custom-gray3 flex flex-col items-center gap-2 py-4">
      <div className="flex gap-2 text-center  break-words">
        <p className="hover:underline">
          <Link href="/">Home</Link>
        </p>
        |
        <p className="hover:underline">
          <Link href="/about-us">About Us</Link>
        </p>
        |
        <p className="hover:underline">
          <Link href="/contact">Contact</Link>
        </p>
        |
        <p className="hover:underline">
          <Link href="/privacy-and-terms">Privacy &amp; Terms</Link>
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-2 justify-center items-center">
        {/* <p className="cursor-pointer hover:underline">
          Alternative to back4page |
        </p> */}
        <p className="hover:underline">
          <Link href="/similar-website">Website similar to bedpage</Link>
        </p>

        {/* <p className="cursor-pointer hover:underline">
          Best sites like back4page |
        </p> */}
        {/* <p className="cursor-pointer hover:underline">back4page replacement</p> */}
      </div>
      <p className="text-[15px]">
        &copy; 2023 <span className="">back4page.com</span>
      </p>
    </div>
  );
}

export default Footer;
