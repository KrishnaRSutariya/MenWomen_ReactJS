import { Row, Col, Container } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';
import { AiTwotoneStar } from 'react-icons/ai';
import { BsTruck } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'
import { FcCheckmark } from 'react-icons/fc'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './Buynow.css';
import Login from './Login'
import Register from './Register'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link ,useNavigate} from 'react-router-dom';
const axios = require('axios')

function Buynow() {
    
    var data = "";
    const navigate = useNavigate()
    const [user, setUser] = useState([]);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isget, issetget] = useState(false);

    const ID = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/getsingleproduct/${ID.id}`)

            .then(function (response) {
                // console.log(response.data);
                setUser(response.data)

            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    


    const checkval = () =>{

        var getname = localStorage.getItem('Name');
        console.log(getname);
        if(getname!=null)
        {
            // navigate('/cart')
            return(
                <Link to={`/cart/`}></Link>
                // <Link to={`/cart/${_id}`}></Link>
                // <Link to={`/cart/${_id}`}></Link>

            )
        }
        else
        {
            navigate('/Login')
        }
    }


    return (
        <>
            <Header />
            {/* <Row className='container1'>
                <Col className="product_view" lg={7}>
                    <img src={require('./images/product-image-1711440348_350x.png')} />
                </Col>
                <Col className='product_view' lg={5}>
                    <h5>FASHIONABLE CASUAL MEN</h5>
                    <AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><br></br>
                    <p>Rs. 293.48</p>
                    <button>ADD TO CART</button>
                    <button id="buynow">BUY IT NOW</button>
                    <h6><BsTruck className='me-2' />Spent <b>Rs. 23,214.11</b> more for free shipping</h6>
                    <h6><BiTimeFive className='me-2' />Estimated Delivery between <b>Friday 10 June</b> and <b>Thursday 16 June</b>.</h6>
                    <h6><FcCheckmark className='me-2' />Free Shipping & Return <FcCheckmark className='ms-4 me-2' />  Money back guarantee</h6>
                </Col>
            </Row> */}

            <Container>
                <Row>
                    <Col className="product_view view" lg={7} md={6}>
                        <img src={user.product_image} />
                    </Col>
                    <Col className='product_view' lg={5} md={6}>
                        <h5>{user.product_name}</h5>
                        <AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><br></br>
                        <p>Rs. {user.product_price}</p>
                    <button onClick={checkval}>ADD TO CART</button>
                        <button id="buynow">BUY IT NOW</button>
                        <h6><BsTruck className='me-2' />Spent <b>Rs. 23,214.11</b> more for free shipping</h6>
                        <h6><BiTimeFive className='' />Estimated Delivery between <b>Friday 10 June</b> and <b>Thursday 16 June</b>.</h6>
                        <h6><FcCheckmark className='me-2' />Free Shipping & Return <FcCheckmark className='ms-4 me-2' />  Money back guarantee</h6>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}
export default Buynow;