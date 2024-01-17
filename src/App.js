import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';
import Todos from './pages/Todos';

function App() {
  return (
    <div className='bg-gray-100'>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/todo' element={<Todos />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
