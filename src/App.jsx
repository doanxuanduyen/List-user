import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { store } from "./app/store";
import Header from "./components/header";
import Nav from "./components/nav";
import MainPage from "./features/Page/MainPage";
import UserDetail from "./features/User/UserDetail";
import UserListAdd from "./features/User/UserListAdd";
import UserListEdit from "./features/User/UserListEdit";
library.add(fas);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="main">
          <Nav />
          <Routes>
            <Route path="" element={<MainPage />}></Route>
            <Route path="/detail/:userID" element={<UserDetail />}></Route>
            <Route path="/add" element={<UserListAdd />}></Route>
            <Route path="/edit/" element={<UserListEdit />}></Route>
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
