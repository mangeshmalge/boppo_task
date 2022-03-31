import{BrowserRouter,Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Home from "./pages/Home";
function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar/>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/product/:id" component={Product} />
        <Route  path="/cart/:id?" component={Cart} />
        <Route  path="/checkout" component={CheckOut} />
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
