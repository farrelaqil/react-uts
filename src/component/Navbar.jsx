import '../styles/Navbar.css'
import image1 from '../assets/logitech.png'
import image2 from '../assets/keranjang.png'
import image3 from '../assets/search.png'


function navbar(){
    return(
        <>

        <nav>
           
            <ul>
                <li> <h1><img className='logo' src={image1} alt="" /></h1></li>
                <li><a href=""><h1>Store</h1></a></li>
                <li><a href=""><h1>PC</h1></a></li> 
                <li><a href=""><h1>Console</h1></a></li>
                <li><a href=""><h1>Mobile</h1></a></li> 
                <li><a href=""><h1>Lifestyle</h1></a></li>
                <li><a href=""><h1>Service</h1></a></li>
                <li><a href=""><h1>Support</h1></a></li>
                <li><a href=""><h1><img className='search' src={image3} alt="" /></h1></a></li>
                <li><a href=""><h1><img className='keranjang' src={image2} alt="" /></h1></a></li>                                                           
            </ul>
            
        </nav>
 
     </>
    )
}

export default navbar;