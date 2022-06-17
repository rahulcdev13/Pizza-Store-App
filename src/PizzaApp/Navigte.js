import React from 'react'
import { Link } from 'react-router-dom';
import "./Pizza.css"

const Navigte = () => {
    const cartStyle ={
        backgroundColor:'gray',
        display:"flex",
        padding:"6px 12px",
        borderRadius:"15px",
        color:"black"

    }
    return (
        <>
            <div className='containerss'>
            
            <nav className='container mx-auto flex items-center justify-between py-2'>
                <ul className='flex items-center'>
                <Link to="/">
                    <img src="/images/pizza5.png" alt="logo" style={{ height: "50px", width: "50px" }} />
                </Link>&nbsp;
                <li style={{fontWeight:"bold"}}>Pizza</li>
                </ul>
                <ul className='flex items-center'>
                    <li className="nav-link"><Link to='/' >Home</Link></li>
                    <li className="nav-link"><Link to='/Products' >Products</Link></li>
                    <li className="nav-link">
                        <Link to='/Cart' >
                        <div style={cartStyle}>
                        <span className='mt-1'>10</span>
                             <img src="/images/cart-icon.png" alt='cart-icon' style={{ height: "30px", width: "60px" }}/>                        
                        </div>
                        </Link>
                    </li>
                </ul>
            </nav>
                
            </div>
        </>
    )
}
export default Navigte;
