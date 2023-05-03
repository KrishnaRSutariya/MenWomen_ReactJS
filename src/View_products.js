import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
const axios = require('axios')

var i = false;
const handel = () => {

    if (i == true) {
        document.getElementById('submenu1').style.display = 'none';
        i = false;
    }
    else if (i == false) {
        document.getElementById('submenu1').style.display = 'block';
        i = true;
    }

}

const View_products = () => {

    const [view, setView] = useState([]);
    axios.get('http://localhost:5000/getallproduct')

        .then(function (response) {
            // console.log(response);   
            setView(response.data)

        })
        .catch(function (error) {
            console.log(error);
        })

    const deletehendle = (id) => {
        axios.delete(`http://localhost:5000/deleteproduct/${id}`)

            .then(function (response) {
                // console.log(response.data);
            })

            .catch(function (error) {
                console.log(error);
            })
    }


    return (
        <>
            <div className="hold-transition sidebar-mini">
                <div className="wrapper">
                    {/* Navbar */}
                    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                        {/* Left navbar links */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block">
                                <a className="nav-link">Home</a>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block">
                                <a href="#" className="nav-link">Contact</a>
                            </li>
                        </ul>
                        {/* Right navbar links */}
                        <ul className="navbar-nav ml-auto">
                            {/* Navbar Search */}
                            <li className="nav-item">
                                <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                                    <i className="fas fa-search" />
                                </a>
                                <div className="navbar-search-block">
                                    <form className="form-inline">
                                        <div className="input-group input-group-sm">
                                            <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                            <div className="input-group-append">
                                                <button className="btn btn-navbar" type="submit">
                                                    <i className="fas fa-search" />
                                                </button>
                                                <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                                    <i className="fas fa-times" />
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </li>
                            {/* Messages Dropdown Menu */}
                            <li className="nav-item dropdown">
                                <a className="nav-link" data-toggle="dropdown" href="#">
                                    <i className="far fa-comments" />
                                    <span className="badge badge-danger navbar-badge">3</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                    <a href="#" className="dropdown-item">
                                        {/* Message Start */}
                                        <div className="media">
                                            <img src="../../dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                                            <div className="media-body">
                                                <h3 className="dropdown-item-title">
                                                    Brad Diesel
                                                    <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
                                                </h3>
                                                <p className="text-sm">Call me whenever you can...</p>
                                                <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                                            </div>
                                        </div>
                                        {/* Message End */}
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item">
                                        {/* Message Start */}
                                        <div className="media">
                                            <img src="../../dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                            <div className="media-body">
                                                <h3 className="dropdown-item-title">
                                                    John Pierce
                                                    <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
                                                </h3>
                                                <p className="text-sm">I got your message bro</p>
                                                <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                                            </div>
                                        </div>
                                        {/* Message End */}
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item">
                                        {/* Message Start */}
                                        <div className="media">
                                            <img src="../../dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                            <div className="media-body">
                                                <h3 className="dropdown-item-title">
                                                    Nora Silvester
                                                    <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
                                                </h3>
                                                <p className="text-sm">The subject goes here</p>
                                                <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                                            </div>
                                        </div>
                                        {/* Message End */}
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                                </div>
                            </li>
                            {/* Notifications Dropdown Menu */}
                            <li className="nav-item dropdown">
                                <a className="nav-link" data-toggle="dropdown" href="#">
                                    <i className="far fa-bell" />
                                    <span className="badge badge-warning navbar-badge">15</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                    <span className="dropdown-item dropdown-header">15 Notifications</span>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item">
                                        <i className="fas fa-envelope mr-2" /> 4 new messages
                                        <span className="float-right text-muted text-sm">3 mins</span>
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item">
                                        <i className="fas fa-users mr-2" /> 8 friend requests
                                        <span className="float-right text-muted text-sm">12 hours</span>
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item">
                                        <i className="fas fa-file mr-2" /> 3 new reports
                                        <span className="float-right text-muted text-sm">2 days</span>
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                                    <i className="fas fa-expand-arrows-alt" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                                    <i className="fas fa-th-large" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* /.navbar */}
                    {/* Main Sidebar Container */}
                    <aside className="main-sidebar sidebar-dark-primary elevation-4">
                        {/* Brand Logo */}
                        <a href="../../index3.html" className="brand-link">
                            <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                            <span className="brand-text font-weight-light">Admin</span>
                        </a>
                        {/* Sidebar */}
                        <div className="sidebar">
                            {/* Sidebar user (optional) */}
                            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                                <div className="image">
                                    <img src="../../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                                </div>
                                <div className="info">
                                    <a href="#" className="d-block">Alexander Pierce</a>
                                </div>
                            </div>
                            {/* SidebarSearch Form */}
                            <div className="form-inline">
                                <div className="input-group" data-widget="sidebar-search">
                                    <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                                    <div className="input-group-append">
                                        <button className="btn btn-sidebar">
                                            <i className="fas fa-search fa-fw" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Sidebar Menu */}
                            <nav className="mt-2">
                                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                    {/* Add icons to the links using the .nav-icon className
         with font-awesome or any other icon font library */}
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="nav-icon fas fa-tachometer-alt" />
                                            <p>
                                                Dashboard
                                                <i className="right fas fa-angle-left" />
                                            </p>
                                        </a>
                                    </li>
                                    <li className="nav-item menu-open">
                                        <a className="nav-link active" >
                                            <i className="nav-icon fas fa-edit" />
                                            <p>
                                                Forms
                                                <i className="fas fa-angle-left right" />
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview" >
                                            <li className="nav-item">
                                                <Link to="/Dashboard/form/Addproduct" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Add Product</p>
                                                </Link>
                                            </li>
                                            {/* <li className="nav-item">
                                                <a className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>View Product</p>
                                                </a>
                                            </li> */}
                                            <li class="nav-item">
                                                <a href="#" class="nav-link active">
                                                    <i class="far fa-circle nav-icon"></i>
                                                    <p>View Product</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">
                                            <i className="nav-icon fas fa-table" />
                                            <p>
                                                Tables
                                                <i className="fas fa-angle-left right" />
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview" >
                                            <li className="nav-item">
                                                <Link to="/Dashboard/Table" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>DataTables</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                            {/* /.sidebar-menu */}
                        </div>
                        {/* /.sidebar */}
                    </aside>
                    {/* Content Wrapper. Contains page content */}
                    <div className="content-wrapper">
                        {/* Content Header (Page header) */}
                        <section className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                        <h1>View Product</h1>
                                    </div>
                                    <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item active">View Product</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>{/* /.container-fluid */}
                        </section>
                        {/* Main content */}
                        <section className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    {/* left column */}

                                    <div className='product'>
                                        {
                                            view.map((val, i) => {
                                                return (
                                                    <div className='view_product' key={i}>
                                                        <img src={val.product_image} className='viewproduct_img'></img>
                                                        <h2>{val.product_name}</h2>
                                                        <p>{val.product_description}</p>
                                                        <h4>₹{val.product_price}</h4>
                                                        <Link to={`/Dashboard/form/editproduct/${val._id}`}>
                                                            <button className='mt-3 me-5 btn btn-primary' style={{ border: 'none', padding: '6px 25px' }}>Edit</button>
                                                        </Link>
                                                        <button className='mt-3 btn btn-danger' style={{ border: 'none', padding: '6px 25px' }} onClick={() => deletehendle(val._id)} >Delete</button>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>{/* /.container-fluid */}
                        </section>
                        {/* /.content */}
                    </div>
                    {/* /.content-wrapper */}

                    {/* /.control-sidebar */}
                </div>
                {/* ./wrapper */}
            </div>
        </>
    )
}

export default View_products;