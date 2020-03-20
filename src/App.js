import React from 'react';
import './App.css';
import { Header, Footer } from './components/Layouts'
import Content from './components/Content'

function App() {
  return (
    <div className="App">
      <Header />
      <Content/>
      <Footer />
    </div>
  );
}

export default App;
