import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import { Provider } from 'react-redux';
import store from './Redux/store/store';
import SearchingPosts from './Components/Main/searching-posts';
import TrendingPosts from './Components/Main/trending-posts';
import MainContent from './Components/MainContent/MainContent';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<MainContent />} />
            <Route path='trending-posts/:hashtag' element={<TrendingPosts />} />
            <Route path='searching-posts' element={<SearchingPosts />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
