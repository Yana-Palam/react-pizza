import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <div className="pizza-block-wrapper">
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={466}
      viewBox="0 0 280 466"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="132" cy="124" r="124" />
      <rect x="1" y="265" rx="9" ry="9" width="280" height="27" />
      <rect x="2" y="312" rx="10" ry="10" width="280" height="89" />
      <rect x="2" y="429" rx="10" ry="10" width="100" height="27" />
      <rect x="128" y="419" rx="30" ry="30" width="152" height="45" />
    </ContentLoader>
  </div>
);

export default Skeleton;
