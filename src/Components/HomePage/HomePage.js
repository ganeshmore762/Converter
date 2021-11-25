import React from 'react'
import '../HomePage/HomePage.css'
import { Link } from 'react-router-dom'
function HomePage() {
    return (
        <>
            <h3 className='header'>  Please select category  </h3>
            <div className="card-container">
                <div className='d1'>
                    <div className='d2'> <label className='card-label'>Age</label></div>
                    <Link to={'/age'}>
                        <div className='card card1'> </div>
                    </Link>
                </div>
                <div className='d1'>
                    <div className='d2'><label className='card-label'>Speed</label></div>
                    <Link to='/speed'>
                    <div className='card card2'> </div>
                    </Link>
                </div>
                <div className='d1'>
                    <div className='d2'><label className='card-label'>Temperature</label></div>
                    <Link to='/temp'>
                    <div className='card card3'> </div>
                    </Link>
                </div>
                <div className='d1'>
                    <div className='d2'><label className='card-label'>Time</label></div>
                    <Link to='/time'>
                    <div className='card card4'> </div>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default HomePage
