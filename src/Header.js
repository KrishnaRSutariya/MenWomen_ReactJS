import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Dropdown, Row, Col } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsSearch, BsPerson, BsCart2, BsTwitter, BsInstagram, BsBag, BsTextRight } from 'react-icons/bs';
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import './Header.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Header = () => {
    const getname = localStorage.getItem('Name');
    const navigate = useNavigate();
    const logout = () => {

        localStorage.clear();
        navigate('/')

    }

    if (getname != null) {
        return (

            <>
                <div className='bg-dark d-none d-lg-block'>
                    <div className='container'>
                        <div className='row py-3 justify-content-between'>
                            <div className='col-auto'>
                                <FaFacebookF className='icon' /><FaPinterestP className='icon' /><BsTwitter className='icon' /><BsInstagram className='icon' />
                            </div>
                            <div className='col-auto'>
                                <img src={require('./images/watch-logo.png')} width={100} />
                            </div>
                            <div className='col-auto'>
                                <Row className='d-flex align-item-center justify-content-center'>
                                    <Col>
                                        <BsSearch style={{ fontSize: '16px' }} />
                                    </Col>
                                    <Col>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="none" style={{ color: '#fff', padding: '0', backgroundColor: 'transparent' }} id="dropdown-basic">
                                                <BsPerson style={{ fontSize: '19px' }} />
                                            </Dropdown.Toggle>


                                            <Dropdown.Menu className="login">



                                                <a><p onClick={logout}>Logout</p></a>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                    <Col>
                                        <BsBag style={{ fontSize: '16px' }} />
                                    </Col>
                                    <Col>
                                        <BsTextRight style={{ fontSize: '16px' }} />
                                    </Col>




                                </Row>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {['lg'].map((expand) => (
                        <Navbar key={expand} expand={expand}>
                            <Container fluid className='justify-content-lg-center'>
                                <div className='d-flex align-items-center'>
                                    <div>
                                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                                        <Navbar.Offcanvas
                                            id={`offcanvasNavbar-expand-${expand}`}
                                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                            placement="start"
                                        >
                                            <Offcanvas.Header closeButton>
                                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                                    OPTIMAL
                                                </Offcanvas.Title>
                                            </Offcanvas.Header>

                                            <Offcanvas.Body>
                                                <Nav className="justify-content-center flex-grow-1 pe-3">
                                                    <Nav.Link style={{ color: '#000' }}>HOME</Nav.Link>
                                                    <Nav.Link style={{ color: '#000' }}>SHOP</Nav.Link>
                                                    <Nav.Link style={{ color: '#000' }}>PRODUCT</Nav.Link>
                                                    <Nav.Link style={{ color: '#000' }}>PAGES</Nav.Link>
                                                    <Nav.Link style={{ color: '#000' }}>BLOG</Nav.Link>
                                                </Nav>
                                            </Offcanvas.Body>

                                        </Navbar.Offcanvas>
                                    </div>
                                    <div className='col-auto d-lg-none'>
                                        <BsSearch className="icon" />
                                    </div>
                                </div>
                                <div className='col-auto d-lg-none herder_img'>
                                    <img src={require('./images/watch-logo.png')} />
                                </div>
                                <div className='col-auto d-lg-none'>

                                    <Row>
                                        <Col>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="none" style={{ color: '#000', padding: '0', backgroundColor: 'transparent' }} id="dropdown-basic">
                                                    <BsPerson style={{ fontSize: '19px' }} />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="login">
                                                    <a><p onClick={logout}>Logout</p></a>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Col>
                                        <Col>
                                            <BsBag style={{ fontSize: '13px' }} />
                                        </Col>
                                        <Col>
                                            <BsTextRight style={{ fontSize: '13px' }} />
                                        </Col>
                                    </Row>
                                    {/* <BsPerson className='icon' /> */}


                                </div>
                            </Container>
                        </Navbar>
                    ))}
                </div>

            </>
        )
    }

    else {
        return (
            <>
                <div className='bg-dark d-none d-lg-block'>
                    <div className='container'>
                        <div className='row py-3 justify-content-between'>
                            <div className='col-auto'>
                                <FaFacebookF className='icon' /><FaPinterestP className='icon' /><BsTwitter className='icon' /><BsInstagram className='icon' />
                            </div>
                            <div className='col-auto'>
                                <img src={require('./images/watch-logo.png')} width={100} />
                            </div>
                            <div className='col-auto'>
                                <Row className='d-flex align-item-center justify-content-center'>
                                    <Col>
                                        <BsSearch style={{ fontSize: '16px' }} />
                                    </Col>
                                    <Col>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="none" style={{ color: '#fff', padding: '0', backgroundColor: 'transparent' }} id="dropdown-basic">
                                                <BsPerson style={{ fontSize: '19px' }} />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="login">
                                                <Link to="/login"><p>Login</p></Link>
                                                <Link to="/register"><p>signup</p></Link>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                    <Col>
                                        <BsBag style={{ fontSize: '16px' }} />
                                    </Col>
                                    <Col>
                                        <BsTextRight style={{ fontSize: '16px' }} />
                                    </Col>
                                </Row>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {['lg'].map((expand) => (
                        <Navbar key={expand} expand={expand}>
                            <Container fluid className='justify-content-lg-center'>
                                <div className='d-flex align-items-center'>
                                    <div>
                                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                                        <Navbar.Offcanvas
                                            id={`offcanvasNavbar-expand-${expand}`}
                                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                            placement="start"
                                        >
                                            <Offcanvas.Header closeButton>
                                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                                    OPTIMAL
                                                </Offcanvas.Title>
                                            </Offcanvas.Header>

                                            <Offcanvas.Body>
                                                <Nav className="justify-content-center flex-grow-1 pe-3">
                                                    <Nav.Link style={{ color: '#000' }}>HOME</Nav.Link>
                                                    <Nav.Link style={{ color: '#000' }}>SHOP</Nav.Link>
                                                    <Nav.Link style={{ color: '#000' }}>PRODUCT</Nav.Link>
                                                    <Nav.Link style={{ color: '#000' }}>PAGES</Nav.Link>
                                                    <Nav.Link style={{ color: '#000' }}>BLOG</Nav.Link>
                                                </Nav>
                                            </Offcanvas.Body>

                                        </Navbar.Offcanvas>
                                    </div>
                                    <div className='col-auto d-lg-none'>
                                        <BsSearch className="icon" />
                                    </div>
                                </div>
                                <div className='col-auto d-lg-none herder_img'>
                                    <img src={require('./images/watch-logo.png')} />
                                </div>
                                <div className='col-auto d-lg-none'>
                                    <Row>
                                        <Col>
                                            {/* <BsPerson className='icon' /> */}
                                            <Dropdown>
                                            <Dropdown.Toggle variant="none" style={{ color: '#000', padding: '0', backgroundColor: 'transparent' }} id="dropdown-basic">
                                                <BsPerson style={{ fontSize: '18px' }} />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="login" size="sm">
                                                <Link to="/login"><p>Login</p></Link>
                                                <Link to="/register"><p>signup</p></Link>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        </Col>
                                        <Col>
                                            <BsBag style={{ fontSize: '13px' }} />
                                        </Col>
                                        <Col>
                                            <BsTextRight style={{ fontSize: '13px' }}/>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                        </Navbar>
                    ))}
                </div>

            </>

        )
    }


}

export default Header