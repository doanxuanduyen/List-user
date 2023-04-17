import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import UserList from "./UserList";
import { useParams } from "react-router-dom";
import "./css/style.css";

function UserListEdit() {
    

    return (
        <div className="container">
            <div className="form__container">
                <h1 className="header__title">
                    Edit user
                </h1>
            </div>
        </div>
    );
}

export default UserListEdit;
