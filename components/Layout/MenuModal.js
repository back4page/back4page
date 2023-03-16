import Link from "next/link";
import { FaSignOutAlt, FaTimes } from "react-icons/fa";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { modalLinks, modalLinks2, modalLinksLogged } from "./modalLinks";
import useLogOut from "../../hooks/useLogOut";
import Router from "next/router";

function MenuModal({ showMenu, setShowMenu, node, status }) {
  Router.events.on("routeChangeStart", (url) => {
    setShowMenu(false);
  });

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
      if (window.innerWidth >= 768 && document.body.scrollHeight > 947) {
        document.body.style.marginRight = "17px";
      }
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.marginRight = "auto";
    };
  }, [showMenu]);

  const { logoutUser } = useLogOut();

  const handleLogOut = () => {
    logoutUser();
  };

  const slide = {
    initial: {
      opacity: 0,
      y: "-100px",
    },
    animate: {
      opacity: 1,
      y: "-35px",
      transition: {
        delay: 0.15,
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: "-100px",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const fade = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.2,
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {showMenu && (
        <motion.div
          className="relative z-20"
          variants={fade}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="fixed inset-0 bg-black/50" />

          <motion.div
            variants={slide}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="fixed top-2 bg-white text-gray-900 lg:w-[498px] rounded">
              <div className="" ref={node}>
                <div className="p-4 ">
                  <h2 className="text-2xl font-bold text-gray-700">
                    Back4page
                  </h2>
                  <button
                    className="absolute top-[2px] right-[2px] focus:ring-2 ring-slate-800 transition duration-100 rounded px-[14px] py-[18px] text-gray-400 hover:text-gray-600"
                    onClick={() => setShowMenu(false)}
                  >
                    <FaTimes />
                  </button>
                </div>
                <div className="bg-gray-300 w-full h-[.1px]"></div>
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-[30px] text-custom-yellow2">
                    <div className="">
                      <div className="rounded bg-custom-gray2">
                        {status === "authenticated" ? (
                          <div className="divide-y divide-gray-800/50">
                            {modalLinksLogged.map((link, i) => (
                              <div key={i}>
                                <Link href={link.link} passHref>
                                  <a>
                                    <button className="flex items-center gap-[7px] w-full px-4 lg:px-5 py-[13px] text-left hover:bg-custom-gray5 hover:text-custom-gray4 focus:bg-custom-gray5 focus:text-custom-gray4 active:text-custom-gray6 hover:rounded focus:rounded">
                                      <span className="text-[15px]">
                                        {link.icon}
                                      </span>
                                      {link.name}
                                    </button>
                                  </a>
                                </Link>
                              </div>
                            ))}
                            <button
                              className="flex items-center gap-[7px] w-full px-4 lg:px-5 py-[13px] text-left hover:bg-custom-gray5 hover:text-custom-gray4 focus:bg-custom-gray5 focus:text-custom-gray4 active:text-custom-gray6 hover:rounded focus:rounded"
                              onClick={handleLogOut}
                            >
                              <span className="text-[15px]">
                                <FaSignOutAlt />
                              </span>
                              Log Out
                            </button>
                          </div>
                        ) : (
                          modalLinks.map((link, i) => (
                            <div key={i}>
                              <Link href={link.link} passHref>
                                <a>
                                  <button className="flex items-center gap-[7px] w-full px-4 lg:px-5 py-[13px] text-left hover:bg-custom-gray5 hover:text-custom-gray4 focus:bg-custom-gray5 focus:text-custom-gray4 active:text-custom-gray6 hover:rounded focus:rounded">
                                    <span className="text-[15px]">
                                      {link.icon}
                                    </span>
                                    {link.name}
                                  </button>
                                </a>
                              </Link>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                    <div className="">
                      <div className="rounded divide-y divide-gray-800/50 bg-custom-gray2">
                        {modalLinks2.map((link, i) => (
                          <div key={i}>
                            <Link href={link.link} passHref>
                              <a>
                                <button className="flex items-center gap-[7px] w-full px-5 py-[13px] text-left hover:bg-custom-gray5 hover:text-custom-gray4 focus:bg-custom-gray5 focus:text-custom-gray4 active:text-custom-gray6 hover:rounded focus:rounded">
                                  <span className="text-[15px]">
                                    {link.icon}
                                  </span>
                                  {link.name}
                                </button>
                              </a>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-300 w-full h-[.1px]"></div>
                <div className="px-5 py-[14px] flex justify-end">
                  <button
                    className="px-4 py-2 focus:ring-[3px] ring-blue-200 rounded transition duration-300"
                    onClick={() => setShowMenu(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MenuModal;
