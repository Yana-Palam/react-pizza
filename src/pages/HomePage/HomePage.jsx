import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectCategoryId,
  selectSort,
} from "../../redux/filters/filtersSelectors";

import Categories from "../../components/Categories";
import Sort from "../../components/Sort";
import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";
import Skeleton from "../../components/PizzaBlock/Skeleton";

const BASE_URL = "https://641d88f14366dd7def402699.mockapi.io/api/items";

function HomePage({ searchValue = "" }) {
  const categoryId = useSelector(selectCategoryId);
  const sortValue = useSelector(selectSort);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchItems = (categoryId, sortValue, searchValue) => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const { sortProperty: sortBy, order } = sortValue;
    const search = searchValue && `&search=${searchValue}`;

    fetch(BASE_URL + `?${category}&sortBy=${sortBy}&order=${order}${search}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchItems(categoryId, sortValue, searchValue);
    window.scrollTo(0, 0);
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
