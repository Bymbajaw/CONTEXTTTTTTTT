import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import ContextService from "./util/ContextService";

function App() {
  const [theme, setTheme] = useState("bg-dark");
  const [user, setUser] = useState("");

  return (
    <ContextService
      user={user}
      theme={theme}
      setTheme={setTheme}
      setUser={setUser}
    >
      <div>
        <Header />
        <Main />
      </div>
    </ContextService>
  );
}

export default App;
