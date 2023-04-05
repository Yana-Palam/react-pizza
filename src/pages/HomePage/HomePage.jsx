import axios from "axios";
import qs from "qs";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFilters } from "../../redux/filters/filtersSlice";
import {
  selectCategoryId,
  selectSort,
} from "../../redux/filters/filtersSelectors";
import { selectSearchValue } from "../../redux/search/searchSelectors";

import Categories from "../../components/Categories";
import Sort from "../../components/Sort";
import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";
import Skeleton from "../../components/PizzaBlock/Skeleton";

const BASE_URL = "https://641d88f14366dd7def402699.mockapi.io/api/items";

function HomePage() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const isSearchParams = useRef(false);
  const isMounted = useRef(false);

  const categoryId = useSelector(selectCategoryId);
  const sortValue = useSelector(selectSort);
  const searchValue = useSelector(selectSearchValue);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchItems = async (categoryId, sortValue, searchValue) => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const { sortProperty: sortBy, order } = sortValue;
    const search = searchValue && `&search=${searchValue}`;

    try {
      const { data } = await axios.get(
        BASE_URL + `?${category}&sortBy=${sortBy}&order=${order}${search}`
      );
      setItems(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
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
      fetchItems(categoryId, sortValue, searchValue);
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
