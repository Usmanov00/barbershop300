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
                <p className="RegistrationTitle">Записаться</p>
                <a href="#">
                  <img src={whatsapp} alt=""/>
                </a>
              </div>
            </div>
          <div className="main">
            <h2 className="service">Наши услуги</h2>
            <p className="circle">Барбер</p>
            <p className="circle1">Топ барбер</p>
            <p className="circle2">Вип барбер</p>
            <ul className="ulBlock">
              <li className="UlBlockPrice">
                <p>Мужская стрижка:</p>
                  <p>400c\</p>
                <p>500с\</p>
                <p>800с</p>
              </li>
              <li className="UlBlockPrice">
                <p>Детская стрижка:</p>
                <p>350c\</p>
                <p>400с\</p>
                <p>500с</p>
              </li><li className="UlBlockPrice">
              <p>Бритье головы:</p>
              <p>350c\</p>
              <p>400с\</p>
              <p>600с</p>
            </li><li className="UlBlockPrice">
              <p>Стрижка бороды:</p>
              <p>350c\</p>
              <p>400с\</p>
              <p>600с</p>
            </li>
              <li className="UlBlockPrice">
              <p>Бритье бороды:</p>
              <p>350c\</p>
              <p>400с\</p>
              <p>600с</p>
            </li>
              <li className="UlBlockPrice">
                <p>Укладка волс:</p>
                <p>200c\</p>
                <p>250с\</p>
                <p>300с</p>
              </li>
              <li className="UlBlockPrice">
                <p>Камуфляж волос:</p>
                <p>350c\</p>
                <p>400с\</p>
                <p>500с</p>
              </li>
              <li className="UlBlockPrice">
                <p>Камуфляж бороды:</p>
                <p>350c\</p>
                <p>350с\</p>
                <p>500с</p>
              </li>
              <li className="UlBlockPrice">
                <p>Маска лица 3 в 1:</p>
                <p>500c\</p>
                <p>500с\</p>
                <p>600с</p>
              </li>
            </ul>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
