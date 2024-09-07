import "./FormDonnetion.css";
import AdminNavbar from '../../adminComponents/AdminNavbar';
import AdminSidebar from '../../adminComponents/AdminSidebar';
import AdminSlider from '../../adminComponents/AdminSlider';
import AdminFooter from '../../adminComponents/AdminFooter';
import { useNavigate, NavLink } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
const AddDonation = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [note, setNote] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [amount, setAount] = useState('')
    const navigate = useNavigate();
    const save = () => {
        const formdata = new FormData()
        formdata.append('firstName', firstName)
        formdata.append('lastName', lastName)
        formdata.append('email', email)
        formdata.append('phone', phone)
        formdata.append('address', address)
        formdata.append('amount', amount)
        formdata.append('note', note)
        axios.post("http://localhost/react_php_donation_management/php/donnetions/add_donnetion.php", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                console.log(res.data);
                setFirstName('');
                setLastName('');
                setNote('');
                setEmail('');
                setPhone('');
                setAount('');
                setAddress('');
                navigate('/manageDonnetion');

            })
    }
    return (
        <>
            <AdminNavbar />
            <AdminSidebar />
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Donation:</h1>
                            <AdminSlider />
                            <NavLink to="/manageDonnetion"><button className="btn btn-info btn-lg pull-right">Donnetion_list</button></NavLink>
                        </div> <br />
                        <div className="row justify-content">
                            <div className="modal-dialog col-md-6">
                                <div className="modal-content col-md-12">
                                    <div className="modal-body">
                                        <form className="form-donation">
                                            <h3 className="title-style-1 ">
                                                Thank you for your donation <span className="title-under" />
                                            </h3>
                                            <div className="row">
                                                <div className="form-group col-md-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="amount"
                                                        onChange={(e) => setAount(e.target.value)}
                                                        value={amount}
                                                        placeholder="AMOUNT(€)"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-6">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        onChange={(e) => setFirstName(e.target.value)}
                                                        value={firstName}
                                                        placeholder="First name*"
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        onChange={(e) => setLastName(e.target.value)}
                                                        value={lastName}
                                                        placeholder="Last name*"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-6">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        value={email}
                                                        placeholder="Email*"
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
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        onChange={(e) => setAddress(e.target.value)}
                                                        value={address}
                                                        placeholder="Address"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-12">
                                                    <textarea
                                                        cols={30}
                                                        rows={4}
                                                        className="form-control"
                                                        onChange={(e) => setNote(e.target.value)}
                                                        value={note}
                                                        placeholder="Additional note"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-12">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary pull-right"
                                                        onClick={save}
                                                    >
                                                        DONATE NOW
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
        </>
    );
};

export default AddDonation;
