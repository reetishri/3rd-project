
import './App.css';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';


import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  CartProvider,
} from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';
import Cart from '.screens/Cart'
import MyOrder from './screens/MyOrder';



function App() {
  return (
    <CartProvider>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/myorder" element={<MyOrder />} />
          <Route exact path="/cart" element={<Cart/>} />
        </Routes>

      </div>
    </Router>
    </CartProvider>

  );


}

export default App;
