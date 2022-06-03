import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import axios from "axios";
import Navbar from "./components/Navbar.js"
import Home from "./pages/Home.js"
import Favorites from './pages/Favorites.js';
import Detail from "./pages/Detail.js"
import { setPosts } from "./store/posts"

// SUDAH BENAR
function App() {
  // const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dispact = useDispatch();

  useEffect(() => {
    setIsLoading(true);

    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=fe9c2107e7e76afb20fd484f3d893e7f&language=en-US&page=1')
      .then(data => {
        dispact(setPosts(data.data.results));
      })
      .catch(err => {
        console.log(err, 'ini error dari catch');
      })
      .finally(() => {
        setIsLoading(false)
      });

  }, [])

  return (
      <BrowserRouter>
        <div className='background-color'>
          <Navbar />

          <div>
            {isLoading ? (<p className='text-center'>Loading...</p>) : (
              <Routes>
                <Route path="/" element={<Home posts={[]} />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/detail/:id" element={<Detail />} />
              </Routes>
            )}
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
