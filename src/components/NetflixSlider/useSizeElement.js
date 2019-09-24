import { useState, useRef, useEffect } from "react";

export default function useSizeElement() {
  const elementRef = useRef(null);
  const [width, setWidth] = useState(0);

  const refCurrent = elementRef.current;
  useEffect(() => {
    setWidth(refCurrent.clientWidth);
  }, [refCurrent]);

  return { width, elementRef };
}
