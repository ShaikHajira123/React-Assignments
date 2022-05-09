import axios from 'axios';
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
 import "../styles/home.css"




export const Home = () => {
  const [allprod, setAllpro] = useState([]);


  useEffect(() => {
    setData()
  }, [])
 
  const setData = () => {
    axios.get("https://morning-scrubland-78864.herokuapp.com/all").then((res) => {
      setAllpro(res.data);
    });
  };
 

  return (
    <div className="mainDiv">
    <h2 id='Recomm'>RECOMMENDED FOR YOU</h2>
      <div className="recommendDiv">
        {allprod.map((e) => (

          <div className="categoryDiv">
            <Link to={`/home/${e._id}`}>
              <img src={e.imgUrl} />
            </Link>
            <p className="titleP">{e.title}</p>
            <span>
              <p>${e.price}.00</p>
              <p>$ {(e.price * 1.2).toFixed(2)} </p>
            </span>
          </div>
         
        ))
}
</div>
</div>

  )
 
}