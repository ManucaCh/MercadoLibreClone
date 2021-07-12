import { useState } from "react";
import { useParams } from "react-router-dom";
import Search from "../../components/Search";
import Products from "../../components/Products";

function Carousel() {
  const { id } = useParams();
  const [products, setProducts] = useState({});

  async function fetchProducts(data) {
    const URL = `https://api.mercadolibre.com/sites/${id}/search?q=${data}`;
    const getProduct = await fetch(URL);
    const getJSON = await getProduct.json();
    setProducts(getJSON.results);
  }

  return (
    <>
      <Search callback={fetchProducts} />
      <section className="products">
        {products.map((product) => {
          return <Products data={product} key={product.id} />;
        })}
      </section>
    </>
  );
}

export default Carousel;
