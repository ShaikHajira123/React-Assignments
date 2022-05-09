import axios from "axios"
import { useParams } from "react-router-dom"
import {useState ,useEffect} from 'react'
 import '../styles/details.css'
import {Link} from 'react-router-dom'



 

export const LaptopDetail = () => {
  const [product,setProduct] = useState([])
    

  let {id} = useParams()
 
    useEffect(() => {
      axios.get(`https://morning-scrubland-78864.herokuapp.com/laptop/${id}`).then(({data})=>{
          setProduct(data)
          
  })
  },[])
  console.log(product)
  const setData=()=>{
    fetch(`https://morning-scrubland-78864.herokuapp.com/addtocart`,{
    method:'POST',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(product)
  })
   localStorage.setItem('addtocart',JSON.stringify(product))
   
  }

 
    return (
      <div className="product_details">
          <div className="flex_container">
              <div className="flex_image">
                 <img className="product_image" src={product.imgUrl}/>
              </div>
              <div className="about_product">
                 <h3 className="product_name">{product.title}</h3>
                <span>
                  <p className="product">Price  : </p>
                  <h2 className="product_price"> ${product.price}</h2>
                  <p> $ {(product.price*1.2).toFixed(2)} </p>
                </span>
                  <p>Ship between: May 09 - May 13, Estimated Shipping Time: 7-30 business days 
                  </p>
                  <div className="color">
                   <p className="product"> Color : </p>
                   <div>Blue</div>
                   <div>Grey</div>
                   <div>Black</div>
                  </div>
                
          <div className="cartbtn">
            <Link id="linkbutton" to={`/productDetails/cart/${product._id}`}>
          <button className="linkbtn"  onClick={setData}>Add To Cart</button>
          </Link>
         
           </div>
           </div>
                </div>
                  </div>
    )
}