import './App.css';
import logo from '../src/assets/img/300_s (1).pdf (1).png'

function App() {
  return (
    <div className="App">
      <div className="container w-full h-auto overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100">
        <div className="background">
          <section className="header">
            <div className="headerBox">
              <div className="container header-container">
                <nav className="menu">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="menuLink">О нас</a>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="menuLink">Услуги</a>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#main" className="menuLink">Цены</a>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="menuLink">Мастера</a>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                </nav>
              </div>
              <div className="img">
                <img src={logo} alt=""/>
              </div>
            </div>
          </section>
          <section id="main" className="main">
            <h1 className="titlePrice">Прайс</h1>
            <div className="barber1">Барбер</div>
            <div className="barber2">Топ барбер</div>
            <div className="barber3">Вип барбер</div>
            <ul className="title">
              <li className="liPrice">
              <p className="liPriceTitle">Мужская стрижка ...</p>
                <div className="div">
                  <span className="liPricePrice">400c |</span>
                  <span className="liPricePrice">500c |</span>
                  <span className="liPricePrice">800c</span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Детская стрижка ...</p>
                <div className="div">
                  <span className="liPricePrice">350c |</span>
                  <span className="liPricePrice">400c |</span>
                  <span className="liPricePrice">500c</span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Бритье головы ...</p>
                <div className="div">
                  <span className="liPricePrice">350c |</span>
                  <span className="liPricePrice">400c |</span>
                  <span className="liPricePrice">600c</span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Стрижка бороды ...</p>
                <div className="div">
                  <span className="liPricePrice">350c |</span>
                  <span className="liPricePrice">400c |</span>
                  <span className="liPricePrice">600c</span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Бритье бороды ...</p>
                <div className="div">
                  <span className="liPricePrice">350c |</span>
                  <span className="liPricePrice">400c |</span>
                  <span className="liPricePrice">600c</span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Укладка волос ...</p>
                <div className="div">
                  <span className="liPricePrice">200c |</span>
                  <span className="liPricePrice">250c |</span>
                  <span className="liPricePrice">300c</span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Камуфляж волос ...</p>
                <div className="div">
                  <span className="liPricePrice">350c |</span>
                  <span className="liPricePrice">400c |</span>
                  <span className="liPricePrice">500c</span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Маска лица 3 в 1 ...</p>
                <div className="div">
                  <span className="liPricePrice">500c |</span>
                  <span className="liPricePrice">500c |</span>
                  <span className="liPricePrice">600c</span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Массаж головы ...</p>
                <div className="div">
                  <span className="liPricePrice">100c |</span>
                  <span className="liPricePrice">100c |</span>
                  <span className="liPricePrice">200c</span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Восковая Дипеляция</p>
                <div className="div">
                  <span className="liPricePrice">100c |</span>
                  <span className="liPricePrice">150c |</span>
                  <span className="liPricePrice">200c</span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Кудри+Стрижка ...</p>
                <div className="div">
                  <span className="liPricePrice">1500c |</span>
                  <span className="liPricePrice">1700c |</span>
                  <span className="liPricePrice">2000c</span>
                </div>
              </li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}

export default App;
