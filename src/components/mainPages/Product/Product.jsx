import { useContext, useEffect} from "react";

import { GlobalState } from "../../../GlobalState";
import CategoriesCards from "../../utils/categories-cards/CategoriesCards.jsx";
import SubcategoriesCards from "../../utils/subcategories-cards/SubcategoriesCards.jsx";

import "./product.css";

import CategoriesSection from "../../utils/categories-section/Categories.jsx";
import ProductsSection from "../../utils/product-section/Product.jsx";
import ResponsiveSubcat from "../../utils/resp-subcat/ResponsiveSubcat.jsx";
import Categories from "../../utils/categories-section/Categories.jsx";

function Products(props) {
  const state = useContext(GlobalState);

  const [showModal, setShowModal] = state.showModal;

  const [categorySelected, setCategorySelected] =
    state.categories.categorySelected;
  const [subcategorySelected, setSubcategorySelected] =
    state.categories.subcategorySelected;

  const [productSelected, setProductSelected] =
    state.categories.productSelected;

  const [blurred, setBlurred] = state.blurred; 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <div className={!showModal ? "products-page" : "products-page blurred"}>
        <div className="categories">
          <Categories/>

     
      

      </div>

         
      <ProductsSection />
      </div>
    </section>
  );
}

export default Products;
