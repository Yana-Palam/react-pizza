import React from "react";
import { Oval } from "react-loader-spinner";
import s from "./Loader.module.scss";

const Loader: React.FC = () => (
  <div className={s.loader}>
    <Oval
      height={80}
      width={80}
      color="#fe5f1e"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#cf5a2b"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  </div>
);

export default Loader;
