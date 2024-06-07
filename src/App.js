import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import { Provider } from 'react-redux';
import store from './Redux/store/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
      </Routes>
      </Provider>
      
    </BrowserRouter>

  );

}

export default App;
