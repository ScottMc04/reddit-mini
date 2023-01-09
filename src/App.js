import React from 'react';
import './App.css';
import img from './media/default_person.jpg'

function App() {
  return (
    <div className="App">
      <body>
        <h1>Reddit Mini</h1>
        <nav>
          <input type="text" placeholder='Search' ></input>
        </nav>
        <header>
          <button className='sub'>
            <img src={img} alt="logo 1"/>
            <div id="text">text</div>
          </button>
          <button className='sub'>
            <img src={img} alt="logo 2"/>
            <div id="text">text</div>
          </button>
          <button className='sub'>
            <img src={img} alt="logo 3"/>
            <div id="text">text</div>
          </button>
        </header>
        <main>
          <div>POST 1</div>
          <div>POST 2</div>
           
        </main>
        <footer>

        </footer>
      </body>
    </div>
  );
}

export default App;
