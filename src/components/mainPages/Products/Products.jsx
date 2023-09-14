import { useContext, useEffect} from "react";

import { GlobalState } from "../../../GlobalState";
import CategoriesCards from "../../utils/categories-cards/CategoriesCards.jsx";
import SubcategoriesCards from "../../utils/subcategories-cards/SubcategoriesCards.jsx";

import "./products.css";

import Categories from "../../utils/categories-section/Categories.jsx";
import Product from "../../utils/product-section/Product.jsx";
import ResponsiveSubcat from "../../utils/resp-subcat/ResponsiveSubcat.jsx";

function Products(props) {
  const state = useContext(GlobalState);

  const [showModal, setShowModal] = state.showModal;

  const [categorySelected, setCategorySelected] =
    state.categories.categorySelected;
  const [subcategorySelected, setSubcategorySelected] =
    state.categories.subcategorySelected;

  const [productSelected, setProductSelected] =
    state.categories.productSelected;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <div className="products-page">
        <div className="categories">

          <Categories />
          {categorySelected &&     <ResponsiveSubcat />}
      
        </div>

        {productSelected ? (
          <Product />
        ) : categorySelected ? (
          <SubcategoriesCards />
        ) : (
          <CategoriesCards />
        )}

      </div>
    </section>
  );
}

export default Products;
