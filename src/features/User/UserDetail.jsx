import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './css/style.css'


function UserDetail(props) {
    return (
        <div className="container">
            <div className="form__container">
                <h1 className="header__title">
                    Infor detail
                </h1>
                <div className="user__detail">
                    <div className="short__infor">
                        <div className="ava"></div>
                        <h2 className="user__name">Email</h2>
                        <p className="name">Sincere@april.biz</p>
                    </div>
                    <div className="long__infor">
                        <div className="long__infor__items">
                            <div className="long__infor__item">
                                <p className="title__infor">Name</p>
                                <p className="user__infor">Leanne Graham</p>
                            </div>
                            <div className="long__infor__item">
                                <p className="title__infor">Phone</p>
                                <p className="user__infor">1-770-736-8031 x56442</p>
                            </div>
                            <div className="long__infor__item">
                                <p className="title__infor">Website</p>
                                <p className="user__infor">hildegard.org</p>
                            </div>
                        </div>
                        <div className="long__infor__items">
                            <div className="long__infor__item">
                                <p className="title__infor">Address</p>
                                <p className="user__infor">Kulas Light</p>
                            </div>
                            <div className="long__infor__item">
                                <p className="title__infor">Company</p>
                                <p className="user__infor">Romaguera-Crona</p>
                            </div>
                            <div className="long__infor__item">
                                <p className="title__infor">Zipcode</p>
                                <p className="user__infor">92998-3874</p>
                            </div>
                        </div>
                        <div className="btn">
                            <div className="space"></div>
                            <Link to={"/edit"}>
                                <button className="btn__edit">Edit</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDetail;