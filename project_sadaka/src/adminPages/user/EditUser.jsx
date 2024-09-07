import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios"; 
import AdminNavbar from "../../adminComponents/AdminNavbar";
import AdminSidebar from "../../adminComponents/AdminSidebar";
import AdminFooter from "../../adminComponents/AdminFooter";
import AdminSlider from "../../adminComponents/AdminSlider";
const EditUser = () => {
    const { id } = useParams();
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [photo, setPhoto] = useState('')
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get(
                `http://localhost/react_php_donation_management/php/user/edit_user.php?id=${id}`
            )
            .then((res) => {
                setUsername(res.data.username);
                setPhoto(res.data.photo);
                setEmail(res.data.email);
                setPassword(res.data.password);
                setPhone(res.data.phone);
                setAddress(res.data.minutes);
            });
    }, []);
    const save = () => {
        const formdata = new FormData();
        formdata.append("username", username);
        formdata.append("photo", photo);
        formdata.append("email", email);
        formdata.append("password", password);
        formdata.append("phone", phone);
        formdata.append("address", address);
        formdata.append("id", id);

        axios
            .post(
                "http://localhost/react_php_donation_management/php/user/update_users.php",
                formdata,
                {
                    headers: {
                        "content-type": "multipart/form-data",
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
                setUsername("");
                setPhoto("");
                setEmail("");
                setPassword("");
                setPhone("");
                setAddress("");
                navigate("/manageUser");
            });
    };
    return (
        <div>
            <AdminNavbar />
            <AdminSidebar />
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Update-User</h1>

                            <AdminSlider />
                            <NavLink to={`/manageUser`}>
                                <button className="btn btn-info btn-lg">User List</button>
                            </NavLink>
                        </div>
                        <br />
                        <div className=" row-center">
                            <div className="modal-dialog col-md-6">
                                <div className="modal-content col-md-12">
                                    <div className="modal-body">
                                        <form className="form-donation">
                                            <h3 className="title-style-1 text-center">
                                                Update Form <span className="title-under" />
                                            </h3>
                                            <div className="row"></div>
                                            <div className="row">
                                                <div className="form-group col-md-6">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        onChange={(e) => setUsername(e.target.value)}
                                                        value={username}

                                                        placeholder="User Name*"
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        value={email}

                                                        placeholder="Email*"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-6">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        value={password}

                                                        placeholder="password*"
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        onChange={(e) => setPhone(e.target.value)}
                                                        value={phone}

                                                        placeholder="Phone"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-12">
                                                    <textarea
                                                        cols={30}
                                                        rows={4}
                                                        className="form-control"
                                                        onChange={(e) => setAddress(e.target.value)}
                                                        value={address}

                                                        placeholder="Address"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-12">
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    onChange={(e) => setPhoto(e.target.files[0])}
                                                />                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-md-12">
                                                    <button
                                                        onClick={save}
                                                        className="btn btn-primary pull-right"
                                                    >
                                                        SUBMMIT NOW
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AdminFooter />
            </div>
        </div>
    );
};

export default EditUser;