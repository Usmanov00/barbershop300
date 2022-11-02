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

          </div>
        </div>
      </>
    </div>
  );
}

export default App;
