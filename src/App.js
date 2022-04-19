import React from 'react';
import './App.css';
import Navbar from "./components/Navbar.js"
import Home from "./pages/Home.js"
import Favorites from './pages/Favorites.js';

class App extends React.Component {
  state = {
    activePage: 'Home'
  };

  render() {
    return (
      <div className='background-color'>
        <Navbar currentPage={(page) => {
          this.setState({
            activePage: page,
          });
        }}/>
        { this.state.activePage === 'Home' && <Home />}
        { this.state.activePage === 'Favorites' && <Favorites />}
      </div>
    );
  }
  
}

export default App;
