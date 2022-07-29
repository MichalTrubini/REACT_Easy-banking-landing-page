import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import MobileMenu from './components/header/MobileMenu';
import useWindowDimensions from './functions/WindowDimensions';
import { useState } from 'react';

function App() {
  
  const {width} = useWindowDimensions(); 

  const [menuVisible, setMenuVisible] = useState(false);
 
  const showMenuHandler = () => {
    setMenuVisible(PrevVal => !PrevVal)
  }

  if (menuVisible === true) {document.body.style.overflow = "hidden"}
  else {{document.body.style.overflow = "visible"}};

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
