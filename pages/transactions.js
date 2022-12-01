import Layout from "../components/Layout";
import { FaThLarge } from "react-icons/fa";
import Link from "next/link";
import { BsCurrencyBitcoin } from "react-icons/bs";

function TransactionsPage() {
  return (
    <>
      <div className="flex justify-end flex-wrap">
        <Link href="/buy-credit" passHref>
          <a>
            <p className="flex items-center gap-1 link uppercase">
              <span>
                <BsCurrencyBitcoin />
              </span>
              Buy Credit
            </p>
          </a>
        </Link>
        <span className="px-1">|</span>
        <Link href="/dashboard" passHref>
          <a>
            <p className="flex items-center gap-1 link uppercase">
              <span>
                <FaThLarge />
              </span>
              Dashboard
            </p>
          </a>
        </Link>
      </div>

      <div className="font-roboto justify-center font-thin min-h-[770px]">
        <div className="">
          <h1 className="text-center text-[32px] text-white mb-3 uppercase">
            TRANSACTIONS
          </h1>
          <div className="border-t border-custom-yellow2 w-full"></div>
        </div>
      </div>
    </>
  );
}

export default TransactionsPage;
