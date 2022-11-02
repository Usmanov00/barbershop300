import './App.css';
import logo from '../src/assets/img/logo.png'
import whatsapp from '../src/assets/img/whatsappLogo.png'

function App() {
  return (
    <div className="App">
      <>
        <div className="container">
          <div className="logo">
            <img src={logo} alt=""/>
          </div>
          <div className="headerLine">
            ----------
          </div>
            <div className="header">
              <div className="whatsappLogo">
                <div className="pointer">
                  --->
                </div>
                <p className="RegistrationTitle">Записаться</p>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#">
                  <img src={whatsapp} alt=""/>
                </a>
              </div>
            </div>
          <div className="main">
            <h2 className="service">Прайс:</h2>
            <p className="circle">Барбер</p>
            <p className="circle1">Топ барбер</p>
            <p className="circle2">Вип барбер</p>
            <ul className="ulBlock">
              <li className="UlBlockPrice">
                <p className="name">Мужская стрижка :</p>
                  <p>400c\</p>
                <p>500с\</p>
                <p>800с</p>
              </li>
              <li className="UlBlockPrice">
                <p className="name">Детская стрижка:</p>
                <p>350c\</p>
                <p>400с\</p>
                <p>500с</p>
              </li><li className="UlBlockPrice">
              <p className="name">Бритье головы:</p>
              <p>350c\</p>
              <p>400с\</p>
              <p>600с</p>
            </li><li className="UlBlockPrice">
              <p className="name">Стрижка бороды:</p>
              <p>350c\</p>
              <p>400с\</p>
              <p>600с</p>
            </li>
              <li className="UlBlockPrice">
              <p className="name">Бритье бороды:</p>
              <p>350c\</p>
              <p>400с\</p>
              <p>600с</p>
            </li>
              <li className="UlBlockPrice">
                <p className="name">Укладка волс:</p>
                <p>200c\</p>
                <p>250с\</p>
                <p>300с</p>
              </li>
              <li className="UlBlockPrice">
                <p className="name">Камуфляж волос:</p>
                <p>350c\</p>
                <p>400с\</p>
                <p>500с</p>
              </li>
              <li className="UlBlockPrice">
                <p className="name">Камуфляж бороды:</p>
                <p>350c\</p>
                <p>350с\</p>
                <p>500с</p>
              </li>
              <li className="UlBlockPrice">
                <p className="name">Маска лица 3 в 1:</p>
                <p>500c\</p>
                <p>500с\</p>
                <p>600с</p>
              </li>
              <li className="UlBlockPrice">
                <p className="name">Массаж головы:</p>
                <p>100c\</p>
                <p>100с\</p>
                <p>200с</p>
              </li>
              <li className="UlBlockPrice">
                <p className="name">Восковая дипиляция:</p>
                <p>100c\</p>
                <p>150с\</p>
                <p>200с</p>
              </li>
              <li className="UlBlockPrice">
                <p className="name">Кудри + Срижка:</p>
                <p>1500c\</p>
                <p>1700с\</p>
                <p>2000с</p>
              </li>
            </ul>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
