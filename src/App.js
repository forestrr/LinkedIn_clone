import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className= "app">
      <Header avatar="https://img.search.brave.com/buXrLRDRn_L-z4nHMAfMAP9uwBqU5uUnhWzfQacQvOg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9hcGku/dGltZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTYvMDUv/MTYwNTA0LXNhbHZh/ZG9yLWRhbGktMDEu/anBn"/>
      {/* App body */}
      <div className="app_body">
        <Sidebar/>
        <Feed avatar="https://img.search.brave.com/buXrLRDRn_L-z4nHMAfMAP9uwBqU5uUnhWzfQacQvOg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9hcGku/dGltZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTYvMDUv/MTYwNTA0LXNhbHZh/ZG9yLWRhbGktMDEu/anBn"/>
        
      {/* widgets */}
      </div>
    </div>
  );
}

export default App;
