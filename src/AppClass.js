import React from 'react';
import './App.css';
import axios from "axios";
import Navbar from "./components/Navbar.js"
import Home from "./pages/Home.js"
import Favorites from './pages/Favorites.js';

class App extends React.Component {
  state = {
    activePage: 'Home',
    posts: [],
    isLoading: false,
  };

  componentDidMount(){
    this.setState({
      isLoading: true
    })

    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=fe9c2107e7e76afb20fd484f3d893e7f&language=en-US&page=1')
      .then(data => {
        this.setState({
          posts: data.data.results
        })
      })
      .catch(err => {
        console.log(err, 'ini error dari catch');
      })
      .finally(() => {
        this.setState({
          isLoading: false
        })
      })
  }

  render() {
    return (
      <div className='background-color'>      
      
        <Navbar currentPage={(page) => {
          this.setState({
            activePage: page,
          });
        }}/>

        <div>
          {this.state.isLoading ? (<p className='text-center'>Loading...</p>) : (
            <>
              {this.state.activePage === 'Home' && <Home posts={this.state.posts} />}
              {this.state.activePage === 'Favorites' && <Favorites />}
            </>
          )}
        </div>
      </div>
    );
  }
  
}

export default App;
