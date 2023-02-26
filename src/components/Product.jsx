import React from 'react'
import { NavLink } from 'react-router-dom';
import DATA from '../Data'

const Product = () => {

    const cardItem = (item) => {
        return (
            <div className="card my-5 py-4" key={item.id} style={{width: "20rem"}}>

                <img src={item.img} className="card-img-top" alt={item.title}/>

                <div className="card-body text-center">

                    <h5 className="card-title">{item.title}</h5>

                    <p className="lead" id='price'>${item.price}</p>
                    {/* <p className="lead">{item.rating}</p> */}

                        
    <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary" id='btn'>Buy Now</NavLink>
                </div>
                
            </div>
        );
    }

return (
    <div>
        <div className="container py-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 style={{color:"RED"}}>iSHOP</h1>
                    <hr />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row justify-content-around">
                {DATA.map(cardItem)}
            </div>
        </div>
    </div>
    )
}

export default Product
