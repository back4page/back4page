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
} from "react-icons/fa";
import { BsCurrencyBitcoin } from "react-icons/bs";

export const modalLinks = [
  {
    name: "Sign In",
    link: "/user-signin",
    icon: <FaLock />,
  },
  {
    name: "Sign Up",
    link: "/user-signin",
    // link: "/user-signup",
    icon: <FaCheckSquare />,
  },
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <FaThLarge />,
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
];

export const modalLinksLogged = [
  {
    name: "Post Ad",
    link: "/post-ad",
    icon: <FaEdit />,
  },
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <FaThLarge />,
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
];

export const modalLinks2 = [
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
    name: "Notify Me",
    link: "/",
    icon: <FaBullhorn />,
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
