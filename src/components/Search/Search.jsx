import React from "react";
import s from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/img/search_icon.svg";
import { ReactComponent as ClearIcon } from "../../assets/img/close_icon.svg";

function Search({ searchValue, setSearchValue }) {
  return (
    <div className={s.wrapper}>
      <SearchIcon width={22} height={22} className={s.iconSearch} />
      <input
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        value={searchValue}
        className={s.input}
        placeholder="Пошук піци..."
      />
      {searchValue && (
        <button
          onClick={() => {
            setSearchValue("");
          }}
          className={s.clearBtn}
        >
          <ClearIcon width={20} height={20} />
        </button>
      )}
    </div>
  );
}

export default Search;
