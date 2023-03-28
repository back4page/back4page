import {
  FaLock,
  FaCheckSquare,
  FaThLarge,
  FaUser,
  FaDollarSign,
  FaUserSecret,
  FaEnvelope,
  FaBullhorn,
  FaPhoneAlt,
  FaEdit,
  FaList,
  FaSignOutAlt,
} from "react-icons/fa";
import { BsCurrencyBitcoin } from "react-icons/bs";

export const dashboardLinks = [
  {
    name: "POST AD",
    link: "/post-ad",
    icon: <FaEdit />,
  },
  {
    name: "My Ads",
    link: "/my-ads",
    icon: <FaList />,
  },

  {
    name: "Profile",
    link: "/user-profile",
    icon: <FaUser />,
  },
  {
    name: "Buy Credit",
    link: "/buy-credit",
    icon: <BsCurrencyBitcoin />,
  },
  {
    name: "Earn Money",
    link: "/",
    icon: <FaDollarSign />,
  },
  // {
  //   name: "Log Out",
  //   link: "/",
  //   icon: <FaSignOutAlt />,
  // },
];

export const dashboardLinks2 = [
  {
    name: "Credits: 0",
    link: "/buy-credit",
    icon: <FaDollarSign />,
  },
  // {
  //   name: "Buy Credit",
  //   link: "/buy-credit",
  //   icon: <BsCurrencyBitcoin />,
  // },

  {
    name: "Premium",
    link: "/premium",
    icon: <FaUserSecret />,
  },
  {
    name: "Message Blast",
    link: "/message-blast",
    icon: <FaEnvelope />,
  },
  {
    name: "Promote",
    link: "/",
    icon: <FaBullhorn />,
  },
  {
    name: "Contact Us",
    link: "/contact-no-spam",
    icon: <FaPhoneAlt />,
  },
];
