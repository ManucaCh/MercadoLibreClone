import { useState } from "react";
import { useParams } from "react-router-dom";
import Search from "../../components/Search";
import Product from "../../components/Product";
import style from "./style.module.scss";

function Carousel() {
  const { id } = useParams();
  const [products, setProducts] = useState(null);

  async function fetchProducts(data) {
    const URL = `https://api.mercadolibre.com/sites/${id}/search?q=${data}`;
    const getProduct = await fetch(URL);
    const getJSON = await getProduct.json();
    setProducts(getJSON.results);
  }

  return (
    <>
      <Search callback={fetchProducts} />
      <section className={style.products}>
        {products?.map((product) => {
          return <Product data={product} key={product.id} />;
        })}
      </section>
    </>
  );
}

export default Carousel;
