import React from 'react';
import './Description.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'; 

function Description(){
    const navigateTo = useNavigate()
    const params =useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/raja8807/grocery-app-data-${params.category}/${params.category}/${params.id}`).then((response) => {
            if (response.ok){
                return response.json()
            }
            navigateTo(`/description/${params.category}/1`)
            return false
        }).then((product) => {
            setProduct(product)
        })
    }, [params])

    let finalPrice = parseInt(product.price - ((product.offer / 100) * product.price))
    console.log(finalPrice);

    return (
        <div className='Description'>
            <div className='container'>
                <button className='addToCartBtn' id='backBtn' onClick={() => {
                    navigateTo("/store/" + params.category)
                }}>Back To Shopping</button>
                <div className='DescriptionWrapper'>
                    <div className='DescriptionImageArea'>
                        <div className='offerBadge'>
                            <h5>{product.offer}%</h5>
                            <p>Off</p>
                        </div>
                        <div className={`dotOuter ${product.veg ? "vegOuter" : "nonVegOuter"}`}>
                            <div className={`dotInner ${product.veg ? "vegInner" : "nonVegInner"}`}>
                            </div>
                        </div>
                        <img src={product.image} alt={product.name}/>
                    </div>

                    
                        <div className='DescriptionDetailsArea'>
                            <h1>{product.name}</h1>
                            <h2>Rs.{finalPrice}</h2>
                            <h4>MRP <del>Rs.{product.price}</del></h4>
                            <h5>You Save Rs.{product.price - finalPrice}</h5>
                            <p>{product.description}</p>
                        </div>
                    

                    <div className='btn btnNext' onClick={() => {
                        navigateTo(`/description/${params.category}/${parseInt(params.id) + 1}`)
                    }}>
                        <i className='fa fa-angle-right'></i>
                    </div>
                    <div className='btn btnPrev' onClick={() => {
                        if (parseInt(params.id) > 1){
                            navigateTo(`/description/${params.category}/${parseInt(params.id) - 1}`)
                        }
                    }}>
                        <i className="fa fa-angle-left"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description;