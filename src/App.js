import './App.css';
import logo from '../src/assets/img/300_s (1).pdf (1).png'

function App() {
  return (
    <div className="App">
      <div
        className="container w-full h-auto overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100">
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
                  <a href="#" className="menuLink">Цены</a>
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
          <section className="main">
            <h1 className="titlePrice">Прайс</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci architecto aspernatur, aut dolore esse est fugiat maxime mollitia nostrum praesentium quibusdam quis rerum sed soluta? Atque consequuntur enim est eveniet expedita fugiat id, ipsam, ipsum laudantium neque nisi nulla, odit placeat possimus quia reiciendis repellat reprehenderit sed similique tempora vero vitae voluptatibus? Atque consequatur debitis delectus, dolorum eos expedita in, labore magnam maiores nemo perspiciatis, porro quaerat quia quos repellendus ullam vel veniam. Ab culpa deleniti dicta eos nam provident, quod repellat! A atque, commodi consequatur doloremque ducimus eligendi esse ipsa ipsum magnam modi nihil numquam quas rem velit.</h2>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
