import React, { useState } from 'react'
import Base from '../Base';
import { getlocalstore } from '../../auth/helper';
import { forgotpassword } from '../../auth/studenthelper/StudentIndex';

const ChangePassword = () => {
    const [Data, setData] = useState({
        password: "",
        Cpassword: "",
        loading: false,
        success: false,
        error: false,
        msg: ""
    });

    const { password, Cpassword, loading, error, msg, success } = Data;

    const handleChange = (val) => (event) => {
        setData({ ...Data, error: false, success: false, loading: false, [val]: event.target.value });
    }
    const loadingmsg = () => {
        return (
            loading && (
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="text-success">Loading....<i class='bx bx-loader bx-spin' ></i></h5>
                    </div>
                </div>
            )
        )
    }
    const errormsg = () => {
        return (
            error && (
                <div className="row">
                    <div className="col-md-12 alert alert-danger">
                        <h4>
                            {msg}
                        </h4>
                    </div>
                </div>
            )
        )
    }
    const successmsg = () => {
        return (
            success && (
                <div className="row">
                    <div className="col-md-12 alert alert-success">
                        <h5 className="text-white">
                            {msg}
                        </h5>
                    </div>
                </div>
            )
        )
    }

    const OnSubmit = () => {
        if (password === "")
            alert("please enter password");
        else if (Cpassword === "")
            alert("please enter confirm password");
        else if (password !== Cpassword){
            alert("password Not match");
            setData({
                ...Data,
                password: "",
                Cpassword: ""
            })
        }
        else {
            if (getlocalstore("student")) {
                var email = getlocalstore("student").email;
                setData({ ...Data, loading: true })
                forgotpassword({ email, password })
                    .then(data => {
                        console.log(data);
                        if (data.status === true) {
                            setData({
                                ...Data,
                                msg: data.msg,
                                success: true,
                                loading: false,
                                error: false,
                                email: "",
                                password: "",
                                Cpassword: ""
                            })
                        } else if (data.status === false) {
                            setData({
                                ...Data,
                                msg: data.msg,
                                error: true,
                                success: false,
                                loading: false
                            })
                        }
                    })
            }
        }
    }
    return (
        <Base>
            <div className="header bg-main pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-center pt-4">
                            <div className="col-lg-6 col-7">
                                <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                    <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                        <li className="breadcrumb-item">Change Password</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="container-fluid mt-1">
                            <div className="row">
                                <div className="col-md-8 offset-md-2">
                                    <div className="card p-4">
                                        {loadingmsg()}
                                        {successmsg()}
                                        {errormsg()}
                                        <div className="wrap-input100 validate-input m-b-15">
                                            <span className="label-input100">New Password<span class="asteriskField">*</span></span>
                                            <input className="input100" type="password" placeholder="Please enter new password" value={password} onChange={handleChange("password")} />
                                            <span className="focus-input100" data-symbol="&#xf190;"></span>
                                        </div>
                                        <div className="wrap-input100 validate-input m-b-15">
                                            <span className="label-input100">Conform Password<span class="asteriskField">*</span></span>
                                            <input className="input100" type="password" placeholder="Please enter Conform password" value={Cpassword} onChange={handleChange("Cpassword")} />
                                            <span className="focus-input100" data-symbol="&#xf190;"></span>
                                        </div>
                                        <button className="btn btn-md btn-primary mt-2" onClick={OnSubmit}>ChangePassword</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}

export default ChangePassword;