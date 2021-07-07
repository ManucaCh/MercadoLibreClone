import { useParams } from "react-router-dom";
import Search from "../../components/Search";

function Carousel() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <Search />
    </>
  );
}

export default Carousel;
