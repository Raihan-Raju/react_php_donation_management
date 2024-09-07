import "./FormDonnetion.css";
import AdminNavbar from '../../adminComponents/AdminNavbar';
import AdminSidebar from '../../adminComponents/AdminSidebar';
import AdminSlider from '../../adminComponents/AdminSlider';
import AdminFooter from '../../adminComponents/AdminFooter';
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios"; 

const EditVolunteer = () => {
    const { id } = useParams();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [note, setNote] = useState('')
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get(
                `http://localhost/react_php_donation_management/php/volunteers/get_volunteer.php?id=${id}`
            )
            .then((res) => {
                setLastName(res.data.lastName);
                setFirstName(res.data.firstName);
                setEmail(res.data.email);
                setPhone(res.data.phone);
                setAddress(res.data.address);
                setNote(res.data.note);
              
            });
    }, []);
    const save = () => {
        const formdata = new FormData();
        formdata.append('firstName', firstName)
        formdata.append('lastName', lastName)
        formdata.append('email', email)
        formdata.append('phone', phone)
        formdata.append('address', address)
        formdata.append('note', note)
        formdata.append("id", id);

        axios
            .post(
                "http://localhost/react_php_donation_management/php/volunteers/edit_volunteers.php",
                formdata,
                {
                    headers: {
                        "content-type": "multipart/form-data",
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhone('');
                setAddress('');
                setNote('');
                navigate("/manageVolunteer");
            });
    };
  return (
    <>
    <AdminNavbar />
    <AdminSidebar />
    <div id="page-wrapper">
        <div id="page-inner">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="page-head-line">Volunteer:</h1>
                    <AdminSlider />
                    <NavLink to="/manageDonnetion"><button className="btn btn-info btn-lg pull-right">Volunteer_list</button></NavLink>
                </div> <br />
                <div className="row justify-content">
                    <div className="modal-dialog col-md-6">
                        <div className="modal-content col-md-12">
                            <div className="modal-body">
                                <form className="form-donation">
                                    <h3 className="title-style-1 ">
                                        Thank you for your Volunteer <span className="title-under" />
                                    </h3>
                                  
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
                                               Volunteer Submit
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
  )
}

export default EditVolunteer