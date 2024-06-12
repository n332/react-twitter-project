import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import { Provider } from 'react-redux';
import store from './Redux/store/store';
import SearchingPosts from './Components/Main/searching-posts';
import TrendingPosts from './Components/Main/trending-posts';
import MainContent from './Components/MainContent/MainContent';
import ProfileComponent from "./Components/Profile/Profile";
import Bookmarks from './Components/Bookmarks/Bookmarks';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<MainContent />} />
            <Route path='trending-posts/:hashtag' element={<TrendingPosts />} />
            <Route path='searching-posts' element={<SearchingPosts />} />
            <Route path='/profile/:id' element={<ProfileComponent/>} />
            <Route path='/bookmarks' element={<Bookmarks />} /> {/* Add the Bookmarks route */}
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
