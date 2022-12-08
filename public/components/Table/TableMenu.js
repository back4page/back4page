import { AnimatePresence, motion } from "framer-motion";
import { FaTrash, FaEdit, FaTimes } from "react-icons/fa";

function TableMenu({ i, active, setActive, node }) {
  // const {
  //   showDropdown: active,
  //   setShowDropdown: setActive,
  //   node,
  // } = useDropdown();

  // const showMenu = (i) => {
  //   if (active === i) {
  //     return setActive(null);
  //   }

  //   setActive(i);
  // };

  return (
    <AnimatePresence>
      {active === i && (
        <motion.div
          ref={node}
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute overflow-hidden right-[40px] z-20 min-w-[130px] bg-white text-custom-gray3 font-semibold cursor-pointer shadow  border text-sm"
        >
          <div className="py-2">
            <div
              className="px-5 py-2 hover:bg-slate-100 hover:text-indigo-500 transition duration-300 flex items-center gap-2"
              onClick={() => setActive(null)}
            >
              <FaTimes /> <p>Close</p>
            </div>
            <div className="px-5 py-2 hover:bg-slate-100 hover:text-indigo-500 transition duration-300 flex items-center gap-2">
              <FaEdit /> <p>Edit</p>
            </div>
            <div className="px-5 py-2 hover:bg-slate-100 hover:text-indigo-500 transition duration-300 flex items-center gap-2">
              <FaTrash /> <p>Delete</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default TableMenu;
