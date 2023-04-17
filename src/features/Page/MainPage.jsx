import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import UserList from "../User/UserList";
library.add(fas);

function MainPage() {
    return (
        <div className="MainPage">
            <div className="contain">
                <div className="contain__header">
                    <h1>User management</h1>
                    <Link to={"/add"}>
                        <button className="btn">Add a new user</button>
                    </Link>
                </div>
                <UserList/>
            </div>
        </div>
    );
}

export default MainPage;
