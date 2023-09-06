import { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import { categories } from "../../../api/Categories";
import { subcategories } from "../../../api/Subcategories";

import "./categoriesCards.css";

function CategoriesCards(props) {
  const state = useContext(GlobalState);

  const [categorySelected, setCategorySelected] =
    state.categories.categorySelected;

  const [subcategorySelected, setSubcategorySelected] =
    state.categories.subcategorySelected;

  return (
    <section className="category-selection-section">
      {categories.map((cat, index) => {
        return (
          <div
            className="category-card"
            onClick={() => {
              setCategorySelected(cat.id);
            }}
            key={index}
          >
            <img
              src={cat.categoryImg}
              alt={`imagen de la categoría ${cat.category}`}
            />
            <h2>{cat.category}</h2>
          </div>
        );
      })}
    </section>
  );
}

export default CategoriesCards;
