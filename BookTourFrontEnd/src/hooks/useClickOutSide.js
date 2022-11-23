import { useEffect, useRef, useState } from "react";

export default function useClickOutSide() {
  const [show, setShow] = useState(false);
  const nodeRef = useRef(null);
  const calendarRef = useRef(null);
  useEffect(() => {
    function handleClickOutSide(e) {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        calendarRef.current &&
        !calendarRef.current.contains(e.target)
      ) {
        setShow(false);
      }
    }
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    show,
    setShow,
    nodeRef,
    calendarRef,
  };
}
