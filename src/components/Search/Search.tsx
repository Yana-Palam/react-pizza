import React, { useRef, useState, useCallback } from "react";
import s from "./Search.module.scss";
import debounce from "lodash.debounce";
import { setSearchValue } from "../../redux/search/searchSlice";
import { fetchPizzas } from "../../redux/pizzas/pizzasOperations";
import { useAppDispatch } from "../../redux/store";

import { ReactComponent as SearchIcon } from "../../assets/img/search_icon.svg";
import { ReactComponent as ClearIcon } from "../../assets/img/close_icon.svg";

const DEBOUNCE_DELAY = 150;

const Search: React.FC = () => {
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    setSearch("");
    dispatch(setSearchValue(""));
    inputRef.current?.focus();
    dispatch(
      fetchPizzas({
        categoryId: 0,
        sortValue: {
          name: "популярністю (за зменшенням)",
          sortProperty: "rating",
          order: "desc",
        },
        searchValue: "",
      })
    );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = useCallback(
    debounce((value: string) => {
      dispatch(setSearchValue(value));
    }, DEBOUNCE_DELAY),
    []
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
    updateSearchValue(value);
  };

  return (
    <div className={s.wrapper}>
      <SearchIcon width={22} height={22} className={s.iconSearch} />
      <input
        ref={inputRef}
        onChange={onChangeInput}
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
};

export default Search;
