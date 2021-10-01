import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Store from "./pages/Store";
import { Route, Switch } from "react-router";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/store">
          <Store />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
