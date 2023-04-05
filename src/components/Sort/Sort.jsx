import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSort } from "../../redux/filters/filtersSelectors";
import { setSortValue } from "../../redux/filters/filtersSlice";

const sortValues = [
  {
    name: "популярністю (за зменшенням)",
    sortProperty: "rating",
    order: "desc",
  },
  {
    name: "популярністю (за збільшенням)",
    sortProperty: "rating",
    order: "asc",
  },
  {
    name: "ціною (за зменшенням)",
    sortProperty: "price",
    order: "desc",
  },
  {
    name: "ціною (за збільшенням)",
    sortProperty: "price",
    order: "asc",
  },
  {
    name: "алфавітом (від А до Я)",
    sortProperty: "title",
    order: "asc",
  },
  {
    name: "алфавітом (від Я до А)",
    sortProperty: "title",
    order: "desc",
  },
];

function Sort() {
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();

  const sortValue = useSelector(selectSort);

  const onSelectValue = (value) => {
    dispatch(setSortValue(value));
    setIsVisible(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <div>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
          <b>Сортування за:</b>
        </div>

        <span
          onClick={() => {
            setIsVisible((prev) => !prev);
          }}
        >
          {sortValue.name}
        </span>
      </div>
      {isVisible && (
        <div className="sort__popup">
          <ul>
            {sortValues.map((obj, index) => (
              <li
                onClick={() => {
                  onSelectValue(obj);
                }}
                key={index}
                className={
                  obj.sortProperty === sortValue.sortProperty &&
                  obj.order === sortValue.order
                    ? "active"
                    : ""
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Sort;
