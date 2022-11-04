import './App.css';
import logo from '../src/assets/img/300_s (1).pdf (1).png'

function App() {
  return (
    <div className="App">
      <div className="container w-full h-auto overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100">
       <section className="header">
         <div className="headerBox">
             <div className="container header-container">
               <nav className="menu">
                 {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                 <a href="#" className="menu-link">О нас</a>
                 {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                 <a href="#" className="menu-link">Услуги</a>
                 {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                 <a href="#" className="menu-link">Цены</a>
                 {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                 <a href="#" className="menu-link">Мастера</a>
                 {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
               </nav>
             </div>
           <div className="img">
             <img src={logo} alt=""/>
           </div>
         </div>
       </section>
      </div>
    </div>
  );
}

export default App;
