import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AdminNavbar from '../../adminComponents/AdminNavbar';
import AdminSidebar from '../../adminComponents/AdminSidebar';
import AdminFooter from '../../adminComponents/AdminFooter';
import AdminSlider from '../../adminComponents/AdminSlider';
import { NavLink } from "react-router-dom";
const ManageDonnetion = () => {
  const [items, setItems] = useState([]);

  const itemDelete = (id) => {
    axios.post("http://localhost/react_php_donation_management/php/donnetions/delete_donnetion.php?id=" + id)
      .then((res) => (console.log(res)))

    axios.get("http://localhost/react_php_donation_management/php/donnetions/list_donnetion.php")
      .then((res) => setItems(res.data))
  }

  useEffect(() => {
    axios.get("http://localhost/react_php_donation_management/php/donnetions/list_donnetion.php")
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
              <h1 className="page-head-line">Donations:</h1>
              <AdminSlider />
              <NavLink to="/addDonnetion"><button className="btn btn-info btn-lg ">Add Donations</button></NavLink>
            </div>

            {/* Hello world */}
            <div className="row">
              <div className="col-md-12">
                {/*   Kitchen Sink */}
                <div className="panel panel-default">
                  <div className="panel-heading">Manage Donations</div>
                  <div className="panel-body">
                    <div className="table-responsive">
                      <table className="table table-striped table-bordered table-hover">
                        <thead>
                          <tr>
                            <th>#No</th>
                            <th>Amount</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>note</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {items.map((data, i) => {
                            return (

                              <tr key={i}>
                                <th scope="row">{++i}</th>
                                <td>{data.amount}</td>
                                <td>{data.firstName + ' ' + data.lastName}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>{data.address}</td>
                                <td>{data.note}</td>
                                <td>
                                  <NavLink to={`/editDonations/${data.id}`}>
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
  );
};

export default ManageDonnetion;