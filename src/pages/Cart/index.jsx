import Nav from "../../components/Nav";
import { useSelector } from "react-redux";
import Card from "../../components/card";
import { removeCartThunk } from "../../store/modules/cart/thunks";

function Cart() {
  const state = useSelector((state) => state.cart);

  console.log(state);
  return (
    <>
      <header>
        <Nav />
      </header>
      <ul>
        {state.length > 0 &&
          state.map((item) => (
            <Card
              key={item.id}
              item={item}
              type="remove do"
              color="secondary"
              active={removeCartThunk}
            />
          ))}
      </ul>
    </>
  );
}

export default Cart;
