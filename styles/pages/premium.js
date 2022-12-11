import Link from "next/link";
import React from "react";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { FaThLarge, FaDollarSign, FaClock } from "react-icons/fa";
import BuyCredit from "../components/Dashboard/BuyCredit";
import PremiumMembership from "../components/Dashboard/PremiumMembership";
import UpdatePassword from "../components/Dashboard/UpdatePassword";
import UpdateProfile from "../components/Dashboard/UpdateProfile";
import Layout from "../components/Layout";

function PremiumPage() {
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
              TRNS.
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
              History
            </p>
          </a>
        </Link>
      </div>

      <PremiumMembership />
    </>
  );
}

export default PremiumPage;
