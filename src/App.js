import React from 'react';
import './App.css';

function App() {
  return (
    <main className="main">
      <header className="header">
        <nav className="nav">
          <ul className="menu">
            <li className="menu-item">
              <a href="#" className="menu-item-link">Home</a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-item-link">About</a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-item-link">Contact us</a>
            </li>
          </ul>
        </nav>
      </header>
      
      <aside className="aside">
        <ul className="menu">
          <li className="menu-item"><h2>Lo más comentado</h2></li>
          <li className="menu-item"><h2>Últimas entradas</h2></li>
        </ul>
      </aside>
      
      <section className="section">
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            
      </section>
      
      <footer className="footer">
        <p className="copyright">Todos los derechos reservados, 2019</p>
      </footer>
      
    </main>
  );
}

export default App;
