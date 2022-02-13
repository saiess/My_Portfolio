import { useEffect, useState } from "react";

function useInterval() {
  const [interval, setInterval] = useState(0);
  useEffect(() => {
    // setInterval(window.innerWidth / 2);
    setInterval(600);
  }, []);
  return interval;
}

export default useInterval;
