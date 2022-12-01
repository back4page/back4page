import Link from "next/link";
import React from "react";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { FaThLarge } from "react-icons/fa";
import UpdatePassword from "../components/Dashboard/UpdatePassword";
import UpdateProfile from "../components/Dashboard/UpdateProfile";
import Layout from "../components/Layout";

function UserProfilePage() {
  return (
    <>
      <div className="flex justify-end">
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

      <UpdateProfile />
      <UpdatePassword />
    </>
  );
}

export default UserProfilePage;
