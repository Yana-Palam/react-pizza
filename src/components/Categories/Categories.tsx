import { useSelector, useDispatch } from "react-redux";

import { selectCategoryId } from "../../redux/filters/filtersSelectors";
import { setCategoryId } from "../../redux/filters/filtersSlice";

const categories = [
  "Всі",
  "М'ясні",
  "Вегетаріанські",
  "Гриль",
  "Гострі",
  "Закриті",
];

const Categories: React.FC = () => {
  const dispatch = useDispatch();

  const categoryId = useSelector(selectCategoryId);

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            onClick={() => {
              onChangeCategory(index);
            }}
            key={index}
            className={categoryId === index ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
