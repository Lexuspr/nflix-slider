import { useState, useRef, useEffect } from "react";

export default function useSizeElement() {
  const elementRef = useRef(null);
  const [width, setWidth] = useState(0);

  const refCurrent = elementRef.current;
  useEffect(() => {
    setWidth(elementRef.current.clientWidth);
  }, [refCurrent]);

  return { width, elementRef };
}
