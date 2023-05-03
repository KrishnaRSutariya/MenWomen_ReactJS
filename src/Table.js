
import {Link} from 'react-router-dom'

function Table() {
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
                                <a href="../../index3.html" className="nav-link">Home</a>
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
                        <a href="../../index3.html" className="brand-link" style={{textDecoration:'none'}}>
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
                                    <a href="#" className="d-block" style={{textDecoration:'none'}} >Alexander Pierce</a>
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
                                    {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                                    <li className="nav-item">
                                        <Link to="/Dashboard" className="nav-link">
                                            <i className="nav-icon fas fa-tachometer-alt" />
                                            <p>
                                                Dashboard
                                                <i className="right fas fa-angle-left" />
                                            </p>
                                        </Link>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <a href="../../index.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Dashboard v1</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Dashboard/form" className="nav-link">
                                            <i className="nav-icon fas fa-edit" />
                                            <p>
                                                Forms
                                                <i className="fas fa-angle-left right" />
                                            </p>
                                        </Link>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <a /*href="../forms/general.html"*/ className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>General Elements</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item menu-open">
                                        <Link to="/Dashboard/Table" className="nav-link active">
                                            <i className="nav-icon fas fa-table" />
                                            <p>
                                                Tables
                                                <i className="fas fa-angle-left right" />
                                            </p>
                                        </Link>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <a className="nav-link active">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>DataTables</p>
                                                </a>
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
                                        <h1>DataTables</h1>
                                    </div>
                                    <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item active">DataTables</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>{/* /.container-fluid */}
                        </section>
                        {/* Main content */}
                        <section className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">DataTable with minimal features &amp; hover style</h3>
                                            </div>
                                            {/* /.card-header */}
                                            <div className="card-body">
                                                <table id="example2" className="table table-bordered table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Rendering engine</th>
                                                            <th>Browser</th>
                                                            <th>Platform(s)</th>
                                                            <th>Engine version</th>
                                                            <th>CSS grade</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Trident</td>
                                                            <td>Internet
                                                                Explorer 4.0
                                                            </td>
                                                            <td>Win 95+</td>
                                                            <td> 4</td>
                                                            <td>X</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Trident</td>
                                                            <td>Internet
                                                                Explorer 5.0
                                                            </td>
                                                            <td>Win 95+</td>
                                                            <td>5</td>
                                                            <td>C</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Trident</td>
                                                            <td>Internet
                                                                Explorer 5.5
                                                            </td>
                                                            <td>Win 95+</td>
                                                            <td>5.5</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Trident</td>
                                                            <td>Internet
                                                                Explorer 6
                                                            </td>
                                                            <td>Win 98+</td>
                                                            <td>6</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Trident</td>
                                                            <td>Internet Explorer 7</td>
                                                            <td>Win XP SP2+</td>
                                                            <td>7</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Trident</td>
                                                            <td>AOL browser (AOL desktop)</td>
                                                            <td>Win XP</td>
                                                            <td>6</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Firefox 1.0</td>
                                                            <td>Win 98+ / OSX.2+</td>
                                                            <td>1.7</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Firefox 1.5</td>
                                                            <td>Win 98+ / OSX.2+</td>
                                                            <td>1.8</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Firefox 2.0</td>
                                                            <td>Win 98+ / OSX.2+</td>
                                                            <td>1.8</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Firefox 3.0</td>
                                                            <td>Win 2k+ / OSX.3+</td>
                                                            <td>1.9</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Camino 1.0</td>
                                                            <td>OSX.2+</td>
                                                            <td>1.8</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Camino 1.5</td>
                                                            <td>OSX.3+</td>
                                                            <td>1.8</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Netscape 7.2</td>
                                                            <td>Win 95+ / Mac OS 8.6-9.2</td>
                                                            <td>1.7</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Netscape Browser 8</td>
                                                            <td>Win 98SE+</td>
                                                            <td>1.7</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Netscape Navigator 9</td>
                                                            <td>Win 98+ / OSX.2+</td>
                                                            <td>1.8</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Mozilla 1.0</td>
                                                            <td>Win 95+ / OSX.1+</td>
                                                            <td>1</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Mozilla 1.1</td>
                                                            <td>Win 95+ / OSX.1+</td>
                                                            <td>1.1</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Mozilla 1.2</td>
                                                            <td>Win 95+ / OSX.1+</td>
                                                            <td>1.2</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Mozilla 1.3</td>
                                                            <td>Win 95+ / OSX.1+</td>
                                                            <td>1.3</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Mozilla 1.4</td>
                                                            <td>Win 95+ / OSX.1+</td>
                                                            <td>1.4</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Mozilla 1.5</td>
                                                            <td>Win 95+ / OSX.1+</td>
                                                            <td>1.5</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Mozilla 1.6</td>
                                                            <td>Win 95+ / OSX.1+</td>
                                                            <td>1.6</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Mozilla 1.7</td>
                                                            <td>Win 98+ / OSX.1+</td>
                                                            <td>1.7</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Mozilla 1.8</td>
                                                            <td>Win 98+ / OSX.1+</td>
                                                            <td>1.8</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Seamonkey 1.1</td>
                                                            <td>Win 98+ / OSX.2+</td>
                                                            <td>1.8</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Epiphany 2.20</td>
                                                            <td>Gnome</td>
                                                            <td>1.8</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Webkit</td>
                                                            <td>Safari 1.2</td>
                                                            <td>OSX.3</td>
                                                            <td>125.5</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Webkit</td>
                                                            <td>Safari 1.3</td>
                                                            <td>OSX.3</td>
                                                            <td>312.8</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Webkit</td>
                                                            <td>Safari 2.0</td>
                                                            <td>OSX.4+</td>
                                                            <td>419.3</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Webkit</td>
                                                            <td>Safari 3.0</td>
                                                            <td>OSX.4+</td>
                                                            <td>522.1</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Webkit</td>
                                                            <td>OmniWeb 5.5</td>
                                                            <td>OSX.4+</td>
                                                            <td>420</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Webkit</td>
                                                            <td>iPod Touch / iPhone</td>
                                                            <td>iPod</td>
                                                            <td>420.1</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Webkit</td>
                                                            <td>S60</td>
                                                            <td>S60</td>
                                                            <td>413</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Presto</td>
                                                            <td>Opera 7.0</td>
                                                            <td>Win 95+ / OSX.1+</td>
                                                            <td>-</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Presto</td>
                                                            <td>Opera 7.5</td>
                                                            <td>Win 95+ / OSX.2+</td>
                                                            <td>-</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Presto</td>
                                                            <td>Opera 8.0</td>
                                                            <td>Win 95+ / OSX.2+</td>
                                                            <td>-</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Presto</td>
                                                            <td>Opera 8.5</td>
                                                            <td>Win 95+ / OSX.2+</td>
                                                            <td>-</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Presto</td>
                                                            <td>Opera 9.0</td>
                                                            <td>Win 95+ / OSX.3+</td>
                                                            <td>-</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Presto</td>
                                                            <td>Opera 9.2</td>
                                                            <td>Win 88+ / OSX.3+</td>
                                                            <td>-</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Presto</td>
                                                            <td>Opera 9.5</td>
                                                            <td>Win 88+ / OSX.3+</td>
                                                            <td>-</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Presto</td>
                                                            <td>Opera for Wii</td>
                                                            <td>Wii</td>
                                                            <td>-</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Presto</td>
                                                            <td>Nokia N800</td>
                                                            <td>N800</td>
                                                            <td>-</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Presto</td>
                                                            <td>Nintendo DS browser</td>
                                                            <td>Nintendo DS</td>
                                                            <td>8.5</td>
                                                            <td>C/A<sup>1</sup></td>
                                                        </tr>
                                                        <tr>
                                                            <td>KHTML</td>
                                                            <td>Konqureror 3.1</td>
                                                            <td>KDE 3.1</td>
                                                            <td>3.1</td>
                                                            <td>C</td>
                                                        </tr>
                                                        <tr>
                                                            <td>KHTML</td>
                                                            <td>Konqureror 3.3</td>
                                                            <td>KDE 3.3</td>
                                                            <td>3.3</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>KHTML</td>
                                                            <td>Konqureror 3.5</td>
                                                            <td>KDE 3.5</td>
                                                            <td>3.5</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Tasman</td>
                                                            <td>Internet Explorer 4.5</td>
                                                            <td>Mac OS 8-9</td>
                                                            <td>-</td>
                                                            <td>X</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Tasman</td>
                                                            <td>Internet Explorer 5.1</td>
                                                            <td>Mac OS 7.6-9</td>
                                                            <td>1</td>
                                                            <td>C</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Tasman</td>
                                                            <td>Internet Explorer 5.2</td>
                                                            <td>Mac OS 8-X</td>
                                                            <td>1</td>
                                                            <td>C</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Misc</td>
                                                            <td>NetFront 3.1</td>
                                                            <td>Embedded devices</td>
                                                            <td>-</td>
                                                            <td>C</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Misc</td>
                                                            <td>NetFront 3.4</td>
                                                            <td>Embedded devices</td>
                                                            <td>-</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Misc</td>
                                                            <td>Dillo 0.8</td>
                                                            <td>Embedded devices</td>
                                                            <td>-</td>
                                                            <td>X</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Misc</td>
                                                            <td>Links</td>
                                                            <td>Text only</td>
                                                            <td>-</td>
                                                            <td>X</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Misc</td>
                                                            <td>Lynx</td>
                                                            <td>Text only</td>
                                                            <td>-</td>
                                                            <td>X</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Misc</td>
                                                            <td>IE Mobile</td>
                                                            <td>Windows Mobile 6</td>
                                                            <td>-</td>
                                                            <td>C</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Misc</td>
                                                            <td>PSP browser</td>
                                                            <td>PSP</td>
                                                            <td>-</td>
                                                            <td>C</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Other browsers</td>
                                                            <td>All others</td>
                                                            <td>-</td>
                                                            <td>-</td>
                                                            <td>U</td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <th>Rendering engine</th>
                                                            <th>Browser</th>
                                                            <th>Platform(s)</th>
                                                            <th>Engine version</th>
                                                            <th>CSS grade</th>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                            {/* /.card-body */}
                                        </div>
                                        {/* /.card */}
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">DataTable with default features</h3>
                                            </div>
                                            {/* /.card-header */}
                                            <div className="card-body">
                                                <table id="example1" className="table table-bordered table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>Rendering engine</th>
                                                            <th>Browser</th>
                                                            <th>Platform(s)</th>
                                                            <th>Engine version</th>
                                                            <th>CSS grade</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Trident</td>
                                                            <td>Internet
                                                                Explorer 4.0
                                                            </td>
                                                            <td>Win 95+</td>
                                                            <td> 4</td>
                                                            <td>X</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Trident</td>
                                                            <td>Internet
                                                                Explorer 5.0
                                                            </td>
                                                            <td>Win 95+</td>
                                                            <td>5</td>
                                                            <td>C</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Trident</td>
                                                            <td>Internet
                                                                Explorer 5.5
                                                            </td>
                                                            <td>Win 95+</td>
                                                            <td>5.5</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Trident</td>
                                                            <td>Internet
                                                                Explorer 6
                                                            </td>
                                                            <td>Win 98+</td>
                                                            <td>6</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Trident</td>
                                                            <td>Internet Explorer 7</td>
                                                            <td>Win XP SP2+</td>
                                                            <td>7</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Trident</td>
                                                            <td>AOL browser (AOL desktop)</td>
                                                            <td>Win XP</td>
                                                            <td>6</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Firefox 1.0</td>
                                                            <td>Win 98+ / OSX.2+</td>
                                                            <td>1.7</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Firefox 1.5</td>
                                                            <td>Win 98+ / OSX.2+</td>
                                                            <td>1.8</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Firefox 2.0</td>
                                                            <td>Win 98+ / OSX.2+</td>
                                                            <td>1.8</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Firefox 3.0</td>
                                                            <td>Win 2k+ / OSX.3+</td>
                                                            <td>1.9</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Camino 1.0</td>
                                                            <td>OSX.2+</td>
                                                            <td>1.8</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Camino 1.5</td>
                                                            <td>OSX.3+</td>
                                                            <td>1.8</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Netscape 7.2</td>
                                                            <td>Win 95+ / Mac OS 8.6-9.2</td>
                                                            <td>1.7</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Netscape Browser 8</td>
                                                            <td>Win 98SE+</td>
                                                            <td>1.7</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Netscape Navigator 9</td>
                                                            <td>Win 98+ / OSX.2+</td>
                                                            <td>1.8</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Mozilla 1.0</td>
                                                            <td>Win 95+ / OSX.1+</td>
                                                            <td>1</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Mozilla 1.1</td>
                                                            <td>Win 95+ / OSX.1+</td>
                                                            <td>1.1</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Mozilla 1.2</td>
                                                            <td>Win 95+ / OSX.1+</td>
                                                            <td>1.2</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Mozilla 1.3</td>
                                                            <td>Win 95+ / OSX.1+</td>
                                                            <td>1.3</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Mozilla 1.4</td>
                                                            <td>Win 95+ / OSX.1+</td>
                                                            <td>1.4</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Mozilla 1.5</td>
                                                            <td>Win 95+ / OSX.1+</td>
                                                            <td>1.5</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Mozilla 1.6</td>
                                                            <td>Win 95+ / OSX.1+</td>
                                                            <td>1.6</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Mozilla 1.7</td>
                                                            <td>Win 98+ / OSX.1+</td>
                                                            <td>1.7</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Mozilla 1.8</td>
                                                            <td>Win 98+ / OSX.1+</td>
                                                            <td>1.8</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Seamonkey 1.1</td>
                                                            <td>Win 98+ / OSX.2+</td>
                                                            <td>1.8</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gecko</td>
                                                            <td>Epiphany 2.20</td>
                                                            <td>Gnome</td>
                                                            <td>1.8</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Webkit</td>
                                                            <td>Safari 1.2</td>
                                                            <td>OSX.3</td>
                                                            <td>125.5</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Webkit</td>
                                                            <td>Safari 1.3</td>
                                                            <td>OSX.3</td>
                                                            <td>312.8</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Webkit</td>
                                                            <td>Safari 2.0</td>
                                                            <td>OSX.4+</td>
                                                            <td>419.3</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Webkit</td>
                                                            <td>Safari 3.0</td>
                                                            <td>OSX.4+</td>
                                                            <td>522.1</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Webkit</td>
                                                            <td>OmniWeb 5.5</td>
                                                            <td>OSX.4+</td>
                                                            <td>420</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Webkit</td>
                                                            <td>iPod Touch / iPhone</td>
                                                            <td>iPod</td>
                                                            <td>420.1</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Webkit</td>
                                                            <td>S60</td>
                                                            <td>S60</td>
                                                            <td>413</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Presto</td>
                                                            <td>Opera 7.0</td>
                                                            <td>Win 95+ / OSX.1+</td>
                                                            <td>-</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Presto</td>
                                                            <td>Opera 7.5</td>
                                                            <td>Win 95+ / OSX.2+</td>
                                                            <td>-</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Presto</td>
                                                            <td>Opera 8.0</td>
                                                            <td>Win 95+ / OSX.2+</td>
                                                            <td>-</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Presto</td>
                                                            <td>Opera 8.5</td>
                                                            <td>Win 95+ / OSX.2+</td>
                                                            <td>-</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Presto</td>
                                                            <td>Opera 9.0</td>
                                                            <td>Win 95+ / OSX.3+</td>
                                                            <td>-</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Presto</td>
                                                            <td>Opera 9.2</td>
                                                            <td>Win 88+ / OSX.3+</td>
                                                            <td>-</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Presto</td>
                                                            <td>Opera 9.5</td>
                                                            <td>Win 88+ / OSX.3+</td>
                                                            <td>-</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Presto</td>
                                                            <td>Opera for Wii</td>
                                                            <td>Wii</td>
                                                            <td>-</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Presto</td>
                                                            <td>Nokia N800</td>
                                                            <td>N800</td>
                                                            <td>-</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Presto</td>
                                                            <td>Nintendo DS browser</td>
                                                            <td>Nintendo DS</td>
                                                            <td>8.5</td>
                                                            <td>C/A<sup>1</sup></td>
                                                        </tr>
                                                        <tr>
                                                            <td>KHTML</td>
                                                            <td>Konqureror 3.1</td>
                                                            <td>KDE 3.1</td>
                                                            <td>3.1</td>
                                                            <td>C</td>
                                                        </tr>
                                                        <tr>
                                                            <td>KHTML</td>
                                                            <td>Konqureror 3.3</td>
                                                            <td>KDE 3.3</td>
                                                            <td>3.3</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>KHTML</td>
                                                            <td>Konqureror 3.5</td>
                                                            <td>KDE 3.5</td>
                                                            <td>3.5</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Tasman</td>
                                                            <td>Internet Explorer 4.5</td>
                                                            <td>Mac OS 8-9</td>
                                                            <td>-</td>
                                                            <td>X</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Tasman</td>
                                                            <td>Internet Explorer 5.1</td>
                                                            <td>Mac OS 7.6-9</td>
                                                            <td>1</td>
                                                            <td>C</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Tasman</td>
                                                            <td>Internet Explorer 5.2</td>
                                                            <td>Mac OS 8-X</td>
                                                            <td>1</td>
                                                            <td>C</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Misc</td>
                                                            <td>NetFront 3.1</td>
                                                            <td>Embedded devices</td>
                                                            <td>-</td>
                                                            <td>C</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Misc</td>
                                                            <td>NetFront 3.4</td>
                                                            <td>Embedded devices</td>
                                                            <td>-</td>
                                                            <td>A</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Misc</td>
                                                            <td>Dillo 0.8</td>
                                                            <td>Embedded devices</td>
                                                            <td>-</td>
                                                            <td>X</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Misc</td>
                                                            <td>Links</td>
                                                            <td>Text only</td>
                                                            <td>-</td>
                                                            <td>X</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Misc</td>
                                                            <td>Lynx</td>
                                                            <td>Text only</td>
                                                            <td>-</td>
                                                            <td>X</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Misc</td>
                                                            <td>IE Mobile</td>
                                                            <td>Windows Mobile 6</td>
                                                            <td>-</td>
                                                            <td>C</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Misc</td>
                                                            <td>PSP browser</td>
                                                            <td>PSP</td>
                                                            <td>-</td>
                                                            <td>C</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Other browsers</td>
                                                            <td>All others</td>
                                                            <td>-</td>
                                                            <td>-</td>
                                                            <td>U</td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <th>Rendering engine</th>
                                                            <th>Browser</th>
                                                            <th>Platform(s)</th>
                                                            <th>Engine version</th>
                                                            <th>CSS grade</th>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                            {/* /.card-body */}
                                        </div>
                                        {/* /.card */}
                                    </div>
                                    {/* /.col */}
                                </div>
                                {/* /.row */}
                            </div>
                            {/* /.container-fluid */}
                        </section>
                        {/* /.content */}
                    </div>
                    {/* Control Sidebar */}
                    <aside className="control-sidebar control-sidebar-dark">
                        {/* Control sidebar content goes here */}
                    </aside>
                    {/* /.control-sidebar */}
                </div>
                {/* ./wrapper */}
            </div>

        </>
    )
}
export default Table;