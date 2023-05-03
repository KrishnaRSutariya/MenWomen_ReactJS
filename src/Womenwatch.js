import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
const axios = require('axios')

const Womenwatch = () => {

    const [item, setItem] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:5000/womenwatch')

            .then(function (response) {
                console.log(response.data);
                setItem(response.data)
            })

            .catch(function (error) {
                console.log(error);
            })

    }, [])

    return (
        <div>

            <Header />
            {
                item.map((elem, i) => {
                    return (
                        <>
                            <div key={i} >
                                <img src={elem.product_image} />
                                <p>{elem.product_name}</p>
                                <p>₹{elem.product_price}</p>
                            </div>
                        </>
                    )
                })
            }
            <Footer />

        </div>
    )
}

export default Womenwatch