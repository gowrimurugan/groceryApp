import React from 'react';
import './Category.css';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

function Category(props) {
    const navigateTo = useNavigate()

    let currentCatagory = window.location.pathname.split("/")[2]
    let isActive = currentCatagory == props.name.toLowerCase()

    return (
        <div className={`category ${isActive&&'active'}`}>
            <Link to={'/store/' + props.path}>
                <div className='categoryImage'>
                    <img src={props.image} alt='img' />
                </div>
                <div className='categoryName'>
                    <h4>{props.name}</h4>
                </div>
            </Link>
        </div>
    )
}

export default Category;