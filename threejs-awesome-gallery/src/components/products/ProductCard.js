import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const ProductCard = ({product, details}) => {

    const dispatch = useDispatch();

    return (
        <div className="">
           
            <div className="card h-100 ">
            {!details && <h5 className="card-title text-center">{product.name}</h5>}
            {details &&  <h1 className="text-center">{product.name}</h1>}
              <Link to={`/products/${product._id}`}><img src={product.image} alt="..."  className="card-img-top frame hover-shadow"/></Link>
                
              
            </div>
        </div>
    )
}

ProductCard.defaultProps = {
    details: false
}

export default ProductCard
