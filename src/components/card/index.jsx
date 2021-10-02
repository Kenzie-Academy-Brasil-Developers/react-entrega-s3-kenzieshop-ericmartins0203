import { Button } from "@material-ui/core";
import { addToCartThunk } from "../../store/modules/cart/thunks";
import { useDispatch } from "react-redux";

function Card({
  item,
  type = "adicionar ao",
  color = "primary",
  active = addToCartThunk,
}) {
  const dispatch = useDispatch();
  const productName = item.name;
  return (
    <li>
      <h2> {item.name}</h2>
      <img src={item.image} alt={item.name} width="200px" height="200px" />
      <p>{item.anime}</p>
      <p>{item.price}</p>
      <Button onClick={() => dispatch(active(productName))} color={color}>
        {type} carrinho
      </Button>
    </li>
  );
}

export default Card;
