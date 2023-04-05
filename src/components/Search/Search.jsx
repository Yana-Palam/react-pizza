import React, { useRef, useState, useCallback } from "react";
import s from "./Search.module.scss";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/search/searchSlice";

import { ReactComponent as SearchIcon } from "../../assets/img/search_icon.svg";
import { ReactComponent as ClearIcon } from "../../assets/img/close_icon.svg";

const DEBOUNCE_DELAY = 300;

function Search() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const inputRef = useRef();

  const onClickClear = () => {
    setSearch("");
    dispatch(setSearchValue(""));
    inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((value) => {
      dispatch(setSearchValue(value));
    }, DEBOUNCE_DELAY),
    []
  );

  const onChangeInput = (value) => {
    setSearch(value);
    updateSearchValue(value);
  };

  return (
    <div className={s.wrapper}>
      <SearchIcon width={22} height={22} className={s.iconSearch} />
      <input
        ref={inputRef}
        onChange={({ target }) => {
          onChangeInput(target.value);
        }}
        value={search}
        className={s.input}
        placeholder="Пошук піци..."
      />
      {search && (
        <button
          onClick={() => {
            onClickClear();
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
