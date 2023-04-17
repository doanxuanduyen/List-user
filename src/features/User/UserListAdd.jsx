import React from "react";
import { useForm } from "react-hook-form";
import "./css/style.css";

function UserListAdd() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className="container">
            <div className="form__container">
                <h1 className="header__title">
                    Create new user
                </h1>
                <form
                    className="form"
                    onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <label>
                            Username
                            <input {...register("username")} />
                        </label>
                        <label>
                            Name
                            <input {...register("name")} />
                        </label>
                    </div>
                    <div className="row">
                        <label>
                            Email
                            <input {...register("email")} />
                        </label>
                        <label>
                            Phone
                            <input {...register("phone")} />
                        </label>
                    </div>
                    <div className="row">
                        <label>
                            Company
                            <input {...register("company", { required: true })} />
                        </label>
                        {/* <label>
                            Address
                            <input {...register("address")} />
                        </label>
                        <label>
                            Company
                            <input {...register("company")} />
                        </label> */}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default UserListAdd;
