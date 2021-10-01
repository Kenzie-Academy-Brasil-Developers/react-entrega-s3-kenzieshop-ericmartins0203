import Nav from "../../components/Nav";
import Card from "./../../components/card";
import { useSelector } from "react-redux";

function Store() {
  const state = useSelector((state) => state.product);
  return (
    <div className="store">
      <header>
        <Nav />
      </header>
      <ul>
        {state.map((item) => (
          <Card item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Store;
