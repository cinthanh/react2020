import React from 'react';
import './App.css';
import { Header, Footer } from './components/Layouts'
import Content from './components/Content'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
