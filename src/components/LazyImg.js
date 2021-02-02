import React, { useEffect, useRef, useState } from "react";
import LazySkeleton from "./LazySkeleton";

const LazyImg = ({ className, src, alt, lqip, aspectRatio = 2 / 3, width }) => {
  const [loaded, setLoaded] = useState({
    loaded: false,
  });
  const imgRef = useRef();
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded({
        loaded: true,
      });
    }
  }, []);
  return (
    <div>
      <div
        // style={{ paddingBottom: `${100 / aspectRatio}%` }}
        className=""
      ></div>
      {/* {lqip && <img src={lqip} alt="" aria-hidden="true" />} */}
      {lqip && <LazySkeleton />}

      <img
        loading="lazy"
        src={src}
        alt={alt}
        ref={imgRef}
        onLoad={() => setLoaded({ loaded: true })}
        className=""
        width={width}
      />
    </div>
  );
};

export default LazyImg;
