import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

import { ThemeContext, UserContext } from "./context"



function App() {

  const [theme, setTheme] = useState("");
  const [user, setUser] = useState("");


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <UserContext.Provider value={{ user, setUser }}>
        <div>
          <Header />
          <Main />
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
