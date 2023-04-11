import qs from "qs";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFilters } from "../../redux/filters/filtersSlice";
import { fetchPizzas } from "../../redux/pizzas/pizzasOperations";
import {
  selectCategoryId,
  selectSort,
} from "../../redux/filters/filtersSelectors";
import { selectSearchValue } from "../../redux/search/searchSelectors";
import {
  selectPizzasItems,
  selectIsLoading,
} from "../../redux/pizzas/pizzasSelectors";

import Categories from "../../components/Categories";
import Sort from "../../components/Sort";
import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";
import Skeleton from "../../components/PizzaBlock/Skeleton";

function HomePage() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const isSearchParams = useRef(false);
  const isMounted = useRef(false);

  const categoryId = useSelector(selectCategoryId);
  const sortValue = useSelector(selectSort);
  const searchValue = useSelector(selectSearchValue);
  const items = useSelector(selectPizzasItems);
  const isLoading = useSelector(selectIsLoading);

  const getPizzas = async (categoryId, sortValue, searchValue) => {
    dispatch(fetchPizzas({ categoryId, sortValue, searchValue }));
  };

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        categoryId,
        sort: sortValue,
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [categoryId, sortValue, searchValue]);

  useEffect(() => {
    const queryString = window.location.search;
    if (queryString) {
      const params = qs.parse(queryString.substring(1));
      console.log(params);
      dispatch(setFilters(params));
      isSearchParams.current = true;
    }
  }, []);

  useEffect(() => {
    if (!isSearchParams.current) {
      getPizzas(categoryId, sortValue, searchValue);
      window.scrollTo(0, 0);
    }
  }, [categoryId, sortValue, searchValue]);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Всі піци</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((item, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
}

export default HomePage;
