import { useState } from "react";
import { useParams } from "react-router-dom";
import Search from "../../components/Search";
import Card from "../../components/Card";

function Carousel() {
  const { id } = useParams();
  const [products, setProducts] = useState({});

  async function fetchProducts(data) {
    const requestURL = `https://api.mercadolibre.com/sites/${id}/search?q=${data}`;
    const getProduct = await fetch(requestURL);
    const getJSON = await getProduct.json();
    setProducts(getJSON);
    console.log(getJSON);
  }

  return (
    <>
      <Search callback={fetchProducts} />
      <section className="products">
        {Object.keys(products).map((item, key) => {
          return;
        })}
      </section>
    </>
  );
}

export default Carousel;
