import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import MobileMenu from './components/header/MobileMenu';
import { useState } from 'react';

function App() {
  
  const [menuVisible, setMenuVisible] = useState(false);
 
  const showMenuHandler = () => {
    setMenuVisible(PrevVal => !PrevVal)
  }

  menuVisible === true ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";

  return (
      <div className="wrapper">
          {menuVisible && <MobileMenu />}
          <Header showMenuHandler={showMenuHandler}/>
          <Main />
          <Footer />
      </div>
  );
}

export default App;
