import Link from "next/link";
import React from "react";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { FaThLarge, FaDollarSign, FaClock } from "react-icons/fa";
import BuyCredit from "../components/Dashboard/BuyCredit";
import UpdatePassword from "../components/Dashboard/UpdatePassword";
import UpdateProfile from "../components/Dashboard/UpdateProfile";
import Layout from "../components/Layout";

function BuyCreditpage() {
  return (
    <>
      <div className="flex justify-end flex-wrap">
        <p className="flex items-center gap-1 uppercase">
          <span>
            <FaDollarSign />
          </span>
          CR: $0
        </p>
        <span className="px-1">|</span>
        <Link href="/transactions" passHref>
          <a>
            <p className="flex items-center gap-1 link uppercase">
              <span>
                <FaClock />
              </span>
              Transactions
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

      <div className="mt-1 flex flex-col items-center">
        <div className="">
          <p className="text-green-300">
            GET FREE $0.50 Credit. Post a FREE AD. No Card required.
            <span className="font-bold cursor-pointer"> Click Here</span>
          </p>
          <p className="text-custom-gray7">
            <i>*Monday to Thursday.</i>
          </p>
        </div>
      </div>

      <BuyCredit />
    </>
  );
}

export default BuyCreditpage;
