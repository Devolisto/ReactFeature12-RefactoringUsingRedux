// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import {useSelector} from "react-redux";
// import AddButton from "./buttons/AddButton";
import {Link} from "react-router-dom"

import {BsPlusSquare} from "react-icons/bs";

const ProductList = ({ deleteProduct }) => {
  const [query, setQuery] = useState("");
  const products = useSelector(state => state.products);

  const productList = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <ProductItem
        product={product}
        key={product.id}
        deleteProduct={deleteProduct}
      />
    ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <Link to="/products/new" >
        <BsPlusSquare className="float-right" size="2em" />
      </Link>  
      <ListWrapper>{productList}</ListWrapper>
      
    </div>
  );
};

export default ProductList;



// {/* <AddButton /> */}