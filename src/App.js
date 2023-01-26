import { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/Header/Header";

import { LoginForm } from "./component/loginPage/LoginPage";
import { Card } from "./component/UI/Card/Card";

function App() {
  const [isloggedIn, setisloggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("users");

  const handlerNavigationClick = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const storageUserLoggedInfo = localStorage.getItem("isloggedIn");
    if (storageUserLoggedInfo === "1") {
      setisloggedIn("true");
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isloggedIn", "1");
    setisloggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn")
    setisloggedIn(false)
  }


  return (
    <>
      <Header
        onChangePage={handlerNavigationClick}
        isAuthenticated={isloggedIn}
        onLogout={logoutHandler}/>

      
        {!isloggedIn && <LoginForm onLogin={loginHandler} />}
        {isloggedIn && <Card currentPage={currentPage} />}
    
    </>
  );
}

export default App;
