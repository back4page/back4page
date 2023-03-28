import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

function AdBanner() {
  return (
    <div className="mt-10 w-full">
      <div className="mb-3 flex justify-end">
        <button className="px-2 py-[6px] flex justify-center items-center gap-1 text-red-400 border border-red-400 uppercase">
          <FaExclamationTriangle />
          <span>REPORT</span>
        </button>
      </div>
      <div className="text-gray-800 bg-custom-blue rounded-md  px-8 py-4">
        <p>
          Post your own ad {">"} get emails {">"} Select one {">"} Start dating.
        </p>
        <p>*You must be 18+.</p>

        <Link href="/post-ad" passHref>
          <a>
            <button className="mt-7 px-4 py-2 rounded text-white bg-custom-gray9 hover:bg-custom-gray10 focus:ring-[3px] ring-custom-gray10/40 transition duration-300 uppercase">
              POST AD NOW
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default AdBanner;
