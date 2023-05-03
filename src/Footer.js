import './Footer.css';
import { Row, Col, Container } from 'react-bootstrap'
import { ImFacebook } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { FaPinterestP } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

function Footer() {
    return (
        <>

            <div style={{ background: '#fafafa', padding: '10px' }}>
                <Container>
                    <Row className='py-4'>
                        <Col className='footer' lg={6} md={12}>
                            <h2>STORY</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                            <ImFacebook className='mx-2' />
                            <BsTwitter className='mx-2' />
                            <FaPinterestP className='mx-2' />
                            <BsInstagram className='mx-2' />
                        </Col>
                        <Col className='footer' lg={6} md={12} >
                            <h2>NEWSLETTER SIGN UP</h2>
                            <p>Enter your email to receive daily news and get 20% off coupon for all items.</p>
                            <input type="email" placeholder='Email address' /><button>SUBSCRIBE</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Footer;