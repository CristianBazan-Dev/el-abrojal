import { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import { categories } from "../../../api/Categories";
import { subcategories } from "../../../api/Subcategories";

import "./categoriesCards.css";
import { Link } from "react-router-dom";

function CategoriesCards(props) {
  const state = useContext(GlobalState);

  const [categorySelected, setCategorySelected] =
    state.categories.categorySelected;

  const [subcategorySelected, setSubcategorySelected] =
    state.categories.subcategorySelected;


    
  const firstCategorySelected = (cat) => {
    setCategorySelected(cat.id);
    setHaveSubcategory(cat.haveSubcat);
  };


  return (
    <section className="category-selection-section">
      {categories.map((data, index) => {
            return (
              <Link to={`/products`} key={index}>
                <div
                  className="product-card"
                  style={{ backgroundImage: `url(${data.categoryImg})` }}
                  onClick={() => {
                    firstCategorySelected(data);
                  }}
                >
                  <h2>{data.category}</h2>
                </div>
              </Link>
            );
          })}
    </section>
  );
}

export default CategoriesCards;
