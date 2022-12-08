import Link from "next/link";
import { FaSignOutAlt, FaTimes } from "react-icons/fa";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { modalLinks, modalLinks2, modalLinksLogged } from "./modalLinks";
import useLogOut from "../../hooks/useLogOut";
import Router, { useRouter } from "next/router";

// Modal.setAppElement("#__next");

// const customStyles = {
//   overlay: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     // overflow: "hidden",
//     backgroundColor: "rgba(0, 0, 0, 0.50)",
//     // height: "50vh",
//   },
//   content: {
//     position: "absolute",
//     top: "31%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     padding: 0,
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     backgroundColor: "white",
//   },
// };

function MenuModal({ showMenu, setShowMenu, node, status }) {
  const { pathname } = useRouter();

  // useEffect(() => {
  //   setShowMenu(false);
  // }, [pathname, setShowMenu]);

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
  // useEffect(() => {
  //   let oldWidth = document.documentElement.clientWidth;

  //   // toggle CSS class that sets overflow to hidden
  //   document.body.classList.toggle("MenuOpen");

  //   // get new width after hiding scrollbar
  //   let newWidth = document.documentElement.clientWidth;

  //   // set margin-right value equal to width of the scrollbar
  //   let scrollbarWidth = Math.max(0, newWidth - oldWidth);
  //   document.body.style.marginRight = `${scrollbarWidth}px`;
  // }, []);

  // const styles = useSpring({
  //   opacity: showMenu ? 1 : 0,
  //   position: showMenu ? "fixed" : "",
  //   // y: showMenu ? 0 : 24,
  // });

  // const styles2 = useSpring({
  //   y: showMenu ? 0 : 24,
  // });

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
    // showMenu && (

    <AnimatePresence>
      {/* <motion.div
        // className="fixed h-screen bg-black/50"
        variants={overlay}
        initial={false}
        animate={showMenu ? "animate" : "initial"}
        transition={{ duration: 0.3, ease: "easeOut" }}
      > */}
      {showMenu && (
        <motion.div
          className="relative z-20"
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
          variants={fade}
          initial="initial"
          animate="animate"
          exit="exit"
          // // initial={{ opacity: 0 }}
          // // animate={{ opacity: 1 }}
          // transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {/* <AnimatePresence> */}
          {/* {showMenu && ( */}
          <div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            // variants={overlay}
            // initial="initial"
            // animate="animate"
            // exit="initial"
            // transition={{ duration: 0.2 }}
            // style={styles}
            className="fixed inset-0 bg-black/50"
            // onClick={() => setShowMenu(false)}
          />
          {/* )} */}
          {/* </AnimatePresence> */}

          {/* </motion.div> */}

          <motion.div
            variants={slide}
            initial="initial"
            animate="animate"
            exit="exit"
            // initial={{ y: "-100px" }}
            // animate={{ y: "-35px" }}
            // exit={{ y: "-100px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            // ref={node}
            className="flex justify-center"
          >
            <div
              // variants={slide}
              // initial={false}
              // animate={showMenu ? "animate" : "initial"}
              // transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-2 bg-white text-gray-900 lg:w-[498px] rounded"
            >
              <div className="" ref={node}>
                <div className="p-4 ">
                  <h2 className="text-2xl lg:font-semibold">
                    Bedpage Menu
                    {/* Backpage Alter Menu */}
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
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  placeat ducimus dignissimos similique libero nemo, magnam
                  debitis molestias itaque quae animi vitae, sed perferendis
                  consectetur iste nulla laudantium cum ipsam harum totam
                  quisquam minus ex beatae? In molestiae velit, ipsam quisquam
                  dignissimos aliquid. Corrupti, fuga? Laudantium perspiciatis,
                  sed quidem, sit vitae pariatur natus, magnam molestias
                  blanditiis cumque nostrum similique reprehenderit ducimus
                  quibusdam incidunt libero eligendi ea a iste necessitatibus
                  labore. Molestias tempore tenetur optio, nisi atque id sunt
                  harum omnis esse, deleniti rerum aliquam, voluptate maiores
                  fuga voluptas reprehenderit asperiores nulla voluptatibus
                  alias unde ad ullam soluta eveniet! Tempore nam voluptate hic
                  sunt porro, quas repellat, atque, blanditiis exercitationem
                  facilis consequuntur. Animi porro aliquid id deserunt vel. */}
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

    // )
  );

  // return (
  //   <animated.div style={styles}>
  //     <Modal
  //       isOpen={showMenu}
  //       onRequestClose={() => setShowMenu(false)}
  //       style={customStyles}
  //       closeTimeoutMS={300}
  //     >
  //       <div className="text-gray-900 w-[498px] relative">
  //         <div className="p-4 ">
  //           <h2 className="text-2xl font-semibold">Backpage Alter Menu</h2>
  //           <button
  //             className="absolute top-[2px] right-[2px] focus:ring-2 ring-slate-800 transition duration-100 rounded px-[14px] py-[18px] text-slate-600"
  //             onClick={() => setShowMenu(false)}
  //           >
  //             <FaTimes />
  //           </button>
  //         </div>
  //         <div className="bg-gray-300 w-full h-[.1px]"></div>
  //         <div className="p-4">
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
  //           placeat ducimus dignissimos similique libero nemo, magnam debitis
  //           molestias itaque quae animi vitae, sed perferendis consectetur iste
  //           nulla laudantium cum ipsam harum totam quisquam minus ex beatae? In
  //           molestiae velit, ipsam quisquam dignissimos aliquid. Corrupti, fuga?
  //           Laudantium perspiciatis, sed quidem, sit vitae pariatur natus,
  //           magnam molestias blanditiis cumque nostrum similique reprehenderit
  //           ducimus quibusdam incidunt libero eligendi ea a iste necessitatibus
  //           labore. Molestias tempore tenetur optio, nisi atque id sunt harum
  //           omnis esse, deleniti rerum aliquam, voluptate maiores fuga voluptas
  //           reprehenderit asperiores nulla voluptatibus alias unde ad ullam
  //           soluta eveniet! Tempore nam voluptate hic sunt porro, quas repellat,
  //           atque, blanditiis exercitationem facilis consequuntur. Animi porro
  //           aliquid id deserunt vel.
  //         </div>
  //         <div className="bg-gray-300 w-full h-[.1px]"></div>
  //         <div className="px-6 py-[14px] flex justify-end">
  //           <button
  //             className="px-4 py-2 focus:ring-[3px] ring-blue-200 rounded transition duration-300"
  //             onClick={() => setShowMenu(false)}
  //           >
  //             Close
  //           </button>
  //         </div>
  //       </div>
  //     </Modal>
  //   </animated.div>
  // );
}

export default MenuModal;
