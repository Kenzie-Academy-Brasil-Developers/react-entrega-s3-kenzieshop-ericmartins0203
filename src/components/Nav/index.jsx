import * as React from "react";
import { Button } from "@material-ui/core";
import { Container } from "./styles";
import { useHistory } from "react-router-dom";

export default function Nav() {
  const history = useHistory();

  const changeChanel = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <Button
        onClick={() => changeChanel("/")}
        color="primary"
        variant="contained"
      >
        Home
      </Button>
      <Button
        onClick={() => changeChanel("/store")}
        color="primary"
        variant="contained"
      >
        Loja
      </Button>
      <Button
        onClick={() => changeChanel("/cart")}
        color="primary"
        variant="contained"
      >
        Carrinho
      </Button>
    </Container>
  );
}
