import style from "./style.module.scss";

function Product({ data }) {
  return (
    <div className={style.card}>
      <p className={style.title}>{data.title}</p>
      <img className={style.img} alt="thumbnail" src={data.thumbnail}></img>
      <p className={style.price}>${data.price}</p>
    </div>
  );
}

export default Product;
