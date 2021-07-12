function Products({ data }) {
  console.log(data);
  return (
    <>
      <p>{data.title}</p>
      <p>{data.price}</p>
    </>
  );
}

export default Products;
