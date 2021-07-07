import { useParams } from "react-router-dom";
import Search from "../../components/Search";

function Carousel() {
  const { id } = useParams();

  return (
    <>
      <Search />
    </>
  );
}

export default Carousel;
