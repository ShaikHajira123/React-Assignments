import '../styles/Navbar.css'
import {Link} from 'react-router-dom'

export const Navbar = ()=>{
    return(
        <div className="box">

            <h1>SHOPPING PALACE</h1>
            <Link id="link" to="">
            <div>Home</div>
            </Link>
            <Link id="link" to={'/mobiles'}>
            <div>Mobiles</div>
            </Link>
            <Link id="link" to={'/kitchen'}>
            <div>Kitchen</div>
               </Link>
               <Link id="link" to={'/laptop'}>
            <div>Laptop</div>
            </Link>
        </div>
    )
}