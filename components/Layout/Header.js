import Image from "next/image";
import { FaBars } from "react-icons/fa";
// import { useState } from "react";
import MenuModal from "./MenuModal";
import useMenu from "../../hooks/useMenu";
import Link from "next/link";
import { useSession } from "next-auth/react";

function Header() {
  // const [showMenu, setShowMenu] = useState(false);

  const { showMenu, setShowMenu, node } = useMenu();

  const { data, status } = useSession();

  // console.log("status", status);
  // console.log("data", data);

  // useEffect(() => {
  //   showMenu &&
  //     typeof window != "undefined" &&
  //     document.body.style.overflow === "hidden";
  // }, []);

  // useEffect(() => {
  //   if (showMenu) {
  //     document.body.style.overflow = "hidden";
  //   }
  //   // else {
  //   //   document.body.style.overflow = "unset";
  //   // }

  //   return () => {
  //     document.body.style.overflow = "unset";
  //   };
  // }, [showMenu]);

  return (
    <>
      <div className="flex items-center gap-[15px] justify-between pt-[1px] border-b border-gray-500 pb-2">
        <div className="">
          <Link href="/" passHref>
            <a href="">
              <div className="mt-1 relative w-[120px] h-[60px]">
                <Image
                  src="/images/back4page-logo3.jpg"
                  alt="back4page logo"
                  // width={176}
                  // height={60}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              {/* <h1 className="py-[7px] px-2 text-orange-400 font-serif text-4xl font-medium tracking-wide border border-gray-500 select-none">
                back4page
              </h1> */}
            </a>
          </Link>
          {/* <Image src="/images/logo.png" alt="logo" width={176} height={60} /> */}
        </div>
        {/* <div className="flex items-center gap-10 text-custom-yellow2 mr-[10px] lg:mr-[140px]"> */}
        <div className="flex items-center gap-10 text-custom-yellow2">
          {/* {status === "authenticated" && token && (
            <div className="hidden lg:block">
              <div className="px-2 py-1 bg-cyan-600 text-white text-sm rounded">
                Signed In
              </div>
            </div>
          )} */}

          {status === "authenticated" && (
            <div className="flex items-center gap-3 text-white">
              {/* <p className="">username: {data.user.name}</p> */}
              <p className="hidden lg:block text-sm">{data.user.email}</p>

              {/* <div className="rounded-full overflow-hidden"> */}
              <Image
                src={data.user.image}
                alt="user picture"
                className="rounded-full"
                width={30}
                height={30}
              />
              {/* </div> */}
            </div>
          )}

          {/* <div className="">
   
            <Link href="/post-ad" passHref>
              <a>
                <button className="button px-[8px] py-[6px] text-sm uppercase">
                  Post Ad
                </button>
              </a>
            </Link>
          </div> */}

          <button className="text-[23px]" onClick={() => setShowMenu(true)}>
            <FaBars />
          </button>
        </div>
      </div>

      <MenuModal
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        node={node}
        status={status}
      />
    </>
  );
}

export default Header;
