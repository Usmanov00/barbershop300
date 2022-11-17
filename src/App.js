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
import img10 from '../src/assets/img/erlan.jpeg'
import whatsapp from '../src/assets/img/WhatsApp.png'
import instagram from '../src/assets/img/instagram.png'
import appointments from '../src/assets/img/appointments.png'
import placeholder from '../src/assets/img/placeholder.png'
import whatsappRed from '../src/assets/img/whatsappRed.png'
import phone from '../src/assets/img/phone.png'
import touch from '../src/assets/img/touch.png'
import gmail from '../src/assets/img/gmail.png'

function App() {
  return (
    <div className="App">
      <div className="container w-full h-auto overflow-scroll block h-screen bg-black">
        <div className="background">
          <section className="header">
            <div className="headerBox">
              <div className="container header-container">
                <nav className="menu">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#location" className="menuLink">О нас</a>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#main" className="menuLink">Услуги</a>
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
                  <span className="liPricePrice">400c </span>
                  <span className="liPricePrice1">500c </span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Детская стрижка ...</p>
                <div className="div">
                  <span className="liPricePrice">350c </span>
                  <span className="liPricePrice1">400c </span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Бритье головы ...</p>
                <div className="div">
                  <span className="liPricePrice">350c </span>
                  <span className="liPricePrice1">400c </span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Стрижка бороды ...</p>
                <div className="div">
                  <span className="liPricePrice">350c </span>
                  <span className="liPricePrice1">400c </span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Бритье бороды ...</p>
                <div className="div">
                  <span className="liPricePrice">350c </span>
                  <span className="liPricePrice1">400c </span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Укладка волос ...</p>
                <div className="div">
                  <span className="liPricePrice">200c </span>
                  <span className="liPricePrice1">250c </span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Камуфляж волос ...</p>
                <div className="div">
                  <span className="liPricePrice">350c </span>
                  <span className="liPricePrice1">400c </span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Камуфляж бороды ...</p>
                <div className="div">
                  <span className="liPricePrice">350c </span>
                  <span className="liPricePrice1">400c </span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Маска лица 3 в 1 ...</p>
                <div className="div">
                  <span className="liPricePrice">500c </span>
                  <span className="liPricePrice1">500c </span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Массаж головы ...</p>
                <div className="div">
                  <span className="liPricePrice">100c </span>
                  <span className="liPricePrice1">100c </span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Восковая Депиляция</p>
                <div className="div">
                  <span className="liPricePrice">100c </span>
                  <span className="liPricePrice1">150c </span>
                </div>
              </li>
              <li className="liPrice">
                <p className="liPriceTitle">Кудри+Стрижка ...</p>
                <div className="div">
                  <span className="liPricePrice">1500c </span>
                  <span className="liPricePrice1">1700c </span>
                </div>
              </li>
              <h1 className="sale"><u><b>Акции</b></u></h1>
              <li className="liPrice">
                <p className="liPriceTitle">Отец + сын</p>
                <div className="div">
                  <span className="liPricePrice">700c </span>
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
                <li className="person-card">
                  <div>
                    <img src={img10} alt=""/>
                    <h2>Эрлан</h2>
                    <h2><u>Top Barber</u></h2>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section className="footer">
          </section>
          <section id="location" className="location">
            <hr/>
            <ul className="locationUl">
              <h1 className="locationTitle">Токтогула 194</h1>
              <li className="locationLi">
                <div className="locationImg">
                  <img src={appointments} alt=""/>
                </div>
                <a href="https://wa.me/+996551300550">
                  <span> Записаться сейчас</span>
                </a>
              </li>
              <li className="locationLi">
                <div className="locationImg">
                  <img src={placeholder} alt=""/>
                </div>
                <a href="#">
                  <span> Токтогула 194, 1 этаж</span>
                </a>
              </li>
              <li className="locationLi">
                <div className="locationImg">
                  <img src={touch} alt=""/>
                </div>
                <a href="https://2gis.kg/bishkek/geo/15763234351062910">
                  <span> Посмотреть на карте</span>
                </a>
              </li>
              <li className="locationLi">
                <div className="locationImg">
                  <img src={phone} alt=""/>
                </div>
                <a href="№">
                  <span> +996 501 300 550</span>
                </a>
              </li>
              <li className="locationLi">
                <div className="locationImg">
                  <img src={whatsappRed} alt=""/>
                </div>
                <a href="https://wa.me/+996551300550">
                  <span> +996 551 300 550</span>
                </a>
              </li>
              <li className="locationLi">
                <div className="locationImg">
                  <img src={instagram} alt=""/>
                </div>
                <a href="https://www.instagram.com/barbershop_300/">
                  <span>barbershop_300</span>
                </a>
              </li>
              <li className="locationLi">
                <div className="locationImg">
                  <img src={gmail} alt=""/>
                </div>
                <a href="#">
                  <span>chyngyzalakov@gmail.com</span>
                </a>
              </li>
            </ul>
            <hr/>
            <ul className="locationUl">
              <h1 className="locationTitle">5 мкр</h1>
              <li className="locationLi">
                <div className="locationImg">
                  <img src={appointments} alt=""/>
                </div>
                <a href="https://wa.me/+996552300440">
                  <span> Записаться сейчас</span>
                </a>
              </li>
              <li className="locationLi">
                <div className="locationImg">
                  <img src={placeholder} alt=""/>
                </div>
                <a href="#">
                  <span>5-й миккрорайон, 2</span>
                </a>
              </li>
              <li className="locationLi">
                <div className="locationImg">
                  <img src={touch} alt=""/>
                </div>
                <a href="https://2gis.kg/bishkek/branches/70000001029793774/firm/70000001037722812/74.624564%2C42.835262?m=74.64607%2C42.844512%2F14.37">
                  <span> Посмотреть на карте</span>
                </a>
              </li>
              <li className="locationLi">
                <div className="locationImg">
                  <img src={phone} alt=""/>
                </div>
                <a href="#">
                  <span> +996 502 300 550</span>
                </a>
              </li>
              <li className="locationLi">
                <div className="locationImg">
                  <img src={whatsappRed} alt=""/>
                </div>
                <a href="https://wa.me/+996552300440">
                  <span> +996 552 300 440</span>
                </a>
              </li>
              <li className="locationLi">
                <div className="locationImg">
                  <img src={instagram} alt=""/>
                </div>
                <a href="https://www.instagram.com/barbershop_300/">
                  <span>barbershop_300</span>
                </a>
              </li>
              <li className="locationLi">
                <div className="locationImg">
                  <img src={gmail} alt=""/>
                </div>
                <a href="#">
                  <span>chyngyzalakov@gmail.com</span>
                </a>
              </li>
            </ul>
            <hr/>
            <ul className="locationUl">
              <h1 className="locationTitle">Токтогула 57</h1>
              <li className="locationLi">
                <div className="locationImg">
                  <img src={appointments} alt=""/>
                </div>
                <a href="#">
                  <span> Записаться сейчас</span>
                </a>
              </li>
              <li className="locationLi">
                <div className="locationImg">
                  <img src={placeholder} alt=""/>
                </div>
                <a href="#">
                  <span> Токтогула 57, первый этаж</span>
                </a>
              </li>
              <li className="locationLi">
                <div className="locationImg">
                  <img src={touch} alt=""/>
                </div>
                <a href="https://2gis.kg/bishkek/branches/70000001029793774/firm/70000001047664646/74.615393%2C42.871915?m=74.610783%2C42.870545%2F16">
                  <span> Посмотреть на карте</span>
                </a>
              </li>
              <li className="locationLi">
                <div className="locationImg">
                  <img src={phone} alt=""/>
                </div>
                <a href="#">
                  <span> +996 501 300 440</span>
                </a>
              </li>
              <li className="locationLi">
                <div className="locationImg">
                  <img src={whatsappRed} alt=""/>
                </div>
                <a href="https://wa.me/+996551300440">
                  <span> +996 551 300 440</span>
                </a>
              </li>
              <li className="locationLi">
                <div className="locationImg">
                  <img src={instagram} alt=""/>
                </div>
                <a href="https://www.instagram.com/barbershop_300/">
                  <span>barbershop_300</span>
                </a>
              </li>
              <li className="locationLi">
                <div className="locationImg">
                  <img src={gmail} alt=""/>
                </div>
                <a href="#">
                  <span>chyngyzalakov@gmail.com</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
