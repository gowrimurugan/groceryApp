import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
import banner1 from '../../assets/banner/banner.jpg'

function Banner () {
    return (
        <div className='Banner'>
            <div className='bannerImageArea'>
                <div className='headerLogo bannerLogo'>
                    <Link to='/'>
                        <h1 className='logo'><span className='logoSpan'>Choo</span>fe<span className='logospan'>'</span></h1>
                        <p>The <span className='logospan'>Morden</span>Cafe'</p>
                    </Link>
                </div>
                <img src={banner1} />
            </div>

        </div>
    )
}

export default Banner;