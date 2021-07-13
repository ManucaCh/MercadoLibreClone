import style from "./style.module.scss";

function Product({ data }) {
  console.log(style);
  return (
    <div className={style.card}>
      <p className={style.title}>{data.title}</p>
      <img className={style.img} src={data.thumbnail}></img>
      <p className={style.price}>${data.price}</p>
    </div>
  );
}

export default Product;
