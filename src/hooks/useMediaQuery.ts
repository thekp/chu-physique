import { useState, useEffect } from "react";

const useMediaQuery = mediaQueryString => {
  const [queryMatch, setQueryMatch] = useState(null);

  useEffect(() => {
    const setMediaMatchHandler = e => setQueryMatch(e.matches);

    const mediaQueryList = window.matchMedia(mediaQueryString);

    setMediaMatchHandler(mediaQueryList);

    mediaQueryList.addListener(setMediaMatchHandler);

    return () => mediaQueryList.removeListener(setMediaMatchHandler);
  }, [mediaQueryString]);

  console.log(queryMatch);

  return queryMatch;
};

export default useMediaQuery;
