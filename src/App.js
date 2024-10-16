import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';
import WishlistTable from './pages/Wishlist';
import SingleView from './pages/SingleView';
import MyProfile from './pages/Profile';
import Aboutus from './pages/Aboutus';
import OrderStatus from './pages/OrderStatus';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ShippingAddress from './pages/Shipping';
import PaymentOptions from './pages/Payment';
import OrderPlaced from './pages/OrderPlaced';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={< Home/>} />
      <Route path='/login' element={< LoginPage/>} />
      <Route path='/register' element={< RegisterPage/>} />
      <Route path='/products' element={< ProductsPage/>} />
      <Route path='/cart' element={< CartPage/>} />
      <Route path='/wishlist' element={< WishlistTable/>} />
      <Route path='/singleproduct' element={< SingleView/>} />
      <Route path='/profile' element={< MyProfile/>} />
      <Route path='/aboutus' element={< Aboutus/>} />
      <Route path='/orderstatus' element={< OrderStatus/>} />
      <Route path='/shipping' element={< ShippingAddress/>} />
      <Route path='/payment' element={< PaymentOptions/>} />
      <Route path='/orderplaced' element={< OrderPlaced/>} />





      </Routes>
    </div>
  );
}

export default App;
