import React from 'react';
import './CategoryHolder.css';
import Category from './Category';

import fruits from '../../assets/category/fruits.jpg';
import vegetables from '../../assets/category/vegetables.jpg';
import meats from '../../assets/category/meats.jpg';
import snacks from '../../assets/category/breads.jpg';

function CategoryHolder(){
    const catagories = [
        {id: "fruits", name: 'Fruits', image: fruits},
        {id: "vegetables", name: 'Vegetables', image: vegetables},
        {id: "snacks", name: 'Snacks', image: snacks},
        {id: "meats", name: 'Meats', image: meats}
    ]

    return (
        <div className='categoryHolder'>
            <div className='container'>
                <h2 className='sectionHeading'>Shop By Categories</h2>
                <div className='categoryHolderWrapper'>
                    {
                        catagories.map((cat) => {
                            return <Category key={cat.id} name={cat.name} image={cat.image} path={cat.id} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CategoryHolder;
