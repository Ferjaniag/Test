import { loadStripe } from '@stripe/stripe-js';
import './App.css';
import { Elements } from '@stripe/react-stripe-js';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import { ToastContainer } from 'react-toastify';
import SignInPage from './components/SignIn/signIn';

function App() {
  return (
      <>
        <BrowserRouter>
          <Header />
          <Routes>
          <Route path='/' element={<SignInPage/>} />
              <Route path='/home' element={<Home />} />
             
              <Route path='/cart' element={<Cart />} />
             
            </Routes>
        </BrowserRouter>
        <ToastContainer />
      </>
  );
}

export default App;
