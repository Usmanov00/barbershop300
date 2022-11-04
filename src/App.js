import './App.css';
import logo from '../src/assets/img/300_s (1).pdf (1).png'
import img1 from '../src/assets/img/Дизайн без названия (14) (1).png'
import img2 from '../src/assets/img/Дизайн без названия (15) (1).png'
import img3 from '../src/assets/img/Дизайн без названия (13) (1).png'
import img4 from '../src/assets/img/Дизайн без названия (9) (1).png'
import img5 from '../src/assets/img/Дизайн без названия (10).png'
import img6 from '../src/assets/img/Дизайн без названия (16) (1).png'
import img7 from '../src/assets/img/Дизайн без названия (11) (1).png'
import img8 from '../src/assets/img/Дизайн без названия (17) (1).png'
import img9 from '../src/assets/img/Дизайн без названия (12).png'
import whatsapp from '../src/assets/img/WhatsApp.png'


function App() {
  return (
    <div className="App">
      <div className="container w-full h-auto overflow-scroll block h-screen bg-gradient-to-r from-red-700 via-gray-900">
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
                  <a href="#about" className="menuLink">Мастера</a>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                </nav>
              </div>
              <a href="https://wa.me/+996502300440">
                <div className="img">
                  <img src={logo} alt=""/>
                </div>
                <div className="whatsapp">
                  <img src={whatsapp} alt=""/>
                  Записаться
                </div>
              </a>
            </div>
          </section>
          <section id="main" className="main">
            <h1 className="titlePrice">Прайс</h1>
            <div className="barber1">Барбер</div>
            <div className="barber2">Топ барбер</div>
            <ul className="title">
              <li className="liPrice">
              <p className="liPriceTitle">Мужская стрижка ...</p>
                <div className="div">
                  <span className="liPricePrice">400c |</span>
                  <span className="liPricePrice">500c |</span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Детская стрижка ...</p>
                <div className="div">
                  <span className="liPricePrice">350c |</span>
                  <span className="liPricePrice">400c |</span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Бритье головы ...</p>
                <div className="div">
                  <span className="liPricePrice">350c |</span>
                  <span className="liPricePrice">400c |</span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Стрижка бороды ...</p>
                <div className="div">
                  <span className="liPricePrice">350c |</span>
                  <span className="liPricePrice">400c |</span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Бритье бороды ...</p>
                <div className="div">
                  <span className="liPricePrice">350c |</span>
                  <span className="liPricePrice">400c |</span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Укладка волос ...</p>
                <div className="div">
                  <span className="liPricePrice">200c |</span>
                  <span className="liPricePrice">250c |</span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Камуфляж волос ...</p>
                <div className="div">
                  <span className="liPricePrice">350c |</span>
                  <span className="liPricePrice">400c |</span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Маска лица 3 в 1 ...</p>
                <div className="div">
                  <span className="liPricePrice">500c |</span>
                  <span className="liPricePrice">500c |</span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Массаж головы ...</p>
                <div className="div">
                  <span className="liPricePrice">100c |</span>
                  <span className="liPricePrice">100c |</span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Восковая Дипеляция</p>
                <div className="div">
                  <span className="liPricePrice">100c |</span>
                  <span className="liPricePrice">150c |</span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Кудри+Стрижка ...</p>
                <div className="div">
                  <span className="liPricePrice">1500c |</span>
                  <span className="liPricePrice">1700c |</span>
                </div>
              </li>
              <h1 className="sale"><u><b>Акции</b></u></h1>
              <li className="liPrice">
                <p className="liPriceTitle">Отец + сын</p>
                <div className="div">
                  <span className="liPricePrice">700c |</span>
                </div>
              </li>
            </ul>
          </section>
          <section id="about" className="about">
            <div className="titleLocation">
              <b><u>Адрес: Токтогула 194/Манаса</u></b>
            </div>
            <div className="scroller box">
              <ul className="scroller-wrapper people">
                <li className="person-card">
                  <div className="div-img">
                    <img src={img1} alt=""/>
                    <h2>Бакдоолот</h2>
                    <h2><u>Top Barber</u></h2>
                  </div>
                </li>
                <li className="person-card">
                  <div>
                    <img src={img2} alt=""/>
                    <h2>Адилет</h2>
                    <h2><u>Barber</u></h2>
                  </div>
                </li>
                <li className="person-card">
                  <div>
                    <img src={img3} alt=""/>
                    <h2>Билал</h2>
                    <h2><u>Barber</u></h2>
                  </div>
                </li>
                <li className="person-card">
                  <div>
                    <img src={img9} alt=""/>
                    <h2>Абдукерим</h2>
                    <h2><u>Barber</u></h2>
                  </div>
                </li>
              </ul>
            </div>
            <div className="titleLocation">
              <b><u>Адрес: Токтогула 157/Шопокова</u></b>
            </div>
            <div className="scroller box">
              <ul className="scroller-wrapper people">
                <li className="person-card">
                  <div className="div-img">
                    <img src={img4} alt=""/>
                    <h2>Темирлан</h2>
                    <h2><u>Top Barber</u></h2>
                  </div>
                </li>
                <li className="person-card">
                  <div>
                    <img src={img5} alt=""/>
                    <h2>Адилет</h2>
                    <h2><u>Top Barber</u></h2>
                  </div>
                </li>
                <li className="person-card">
                  <div>
                    <img src={img6} alt=""/>
                    <h2>Бекзат</h2>
                    <h2><u>Top Barber</u></h2>
                  </div>
                </li>
              </ul>
            </div>
            <div className="titleLocation">
              <b><u>Адрес: 5 Мкр</u></b>
            </div>
            <div className="scroller box">
              <ul className="scroller-wrapper people">
                <li className="person-card">
                  <div className="div-img">
                    <img src={img7} alt=""/>
                    <h2>Рауль</h2>
                    <h2><u>Top Barber</u></h2>
                  </div>
                </li>
                <li className="person-card">
                  <div>
                    <img src={img8} alt=""/>
                    <h2>Азамат</h2>
                    <h2><u>Barber</u></h2>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section className="footer">

          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
