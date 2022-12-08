import { useState, useRef, useEffect } from "react";

function useMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const node = useRef(null);

  const clickOutside = (e) => {
    if (node?.current?.contains(e.target)) {
      return;
    }
    setShowMenu(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  return { showMenu, setShowMenu, node };
}

export default useMenu;
