import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AdminFooter from '../../adminComponents/AdminFooter'
import AdminNavbar from '../../adminComponents/AdminNavbar'
import AdminSidebar from '../../adminComponents/AdminSidebar'
import AdminSlider from '../../adminComponents/AdminSlider'
import { Link, NavLink } from 'react-router-dom'

const ManageUser = () => {
    const [items, setItems] = useState([]);

    const itemDelete = (id) => {
        axios.post("http://localhost/react_php_donation_management/php/user/delete_user.php?id=" + id)
            .then((res) => (console.log(res)))

        axios.get("http://localhost/react_php_donation_management/php/user/list_user.php")
            .then((res) => setItems(res.data))
    }

    useEffect(() => {
        axios.get("http://localhost/react_php_donation_management/php/user/list_user.php")
            .then((res) => setItems(res.data))
    }, [])
    return (

        <>
            <AdminNavbar />
            <AdminSidebar />

            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">User:</h1>
                            <AdminSlider />
                            <NavLink to="/addUser"><button className="btn btn-info btn-lg ">Add User</button></NavLink>
                        </div>

                        {/* Hello world */}
                        <div className="row">
                            <div className="col-md-12">
                                {/*   Kitchen Sink */}
                                <div className="panel panel-default">
                                    <div className="panel-heading">Manage User</div>
                                    <div className="panel-body">
                                        <div className="table-responsive">
                                            <table className="table table-striped table-bordered table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>#No</th>
                                                        <th>User Name</th>
                                                        <th>Email</th>
                                                        <th>Password</th>
                                                        <th>Phone</th>
                                                        <th>Address</th>
                                                        <th>Photo</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {items.map((data, i) => {
                                                        return (

                                                            <tr key={i}>
                                                                <th scope="row">{++i}</th>
                                                                <td>{data.username}</td>
                                                                <td>{data.email}</td>
                                                                <td>{data.password}</td>
                                                                <td>{data.phone}</td>
                                                                <td>{data.address}</td>
                                                                <td>
                                                                    <img className='w-50' height={100} src={`http://localhost/react_php_donation_management/php/images/${data.photo}`} />
                                                                </td>
                                                                <td>
                                                                    <NavLink to={`/editUser/${data.id}`}>
                                                                        <button className='btn btn-info mb-2 mt-2'>Update</button>
                                                                    </NavLink>
                                                                    <button className='btn btn-danger' onClick={() => { itemDelete(data.id) }}>Delete</button>
                                                                </td>
                                                            </tr>

                                                        )
                                                    })}

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                {/* End  Kitchen Sink */}
                            </div>

                        </div>


                    </div>
                </div>
                <AdminFooter />
            </div>


        </>


    )
}

export default ManageUser