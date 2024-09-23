import '../styles/Footer.css'
import image1 from '../assets/facebook.png'
import image2 from '../assets/twitter.png'
import image3 from '../assets/instagram.png'

function Content() {
    return (
        <>
       <div className='footer'>
        <div className='footer1'>
            <h4>About</h4>
            <a href="">Logitech Story</a>
            <br />
            <a href="">Careers</a>
            <br />
            <a href="">Investors</a>
            <br />
            <a href="">Blog</a>
            <br />
            <a href="">Press</a>
            <br />
            <a href="">Contact Us</a>
        </div>
        <div className='footer2'>
            <h4>Values</h4>
            <a href="">Social Impact</a>
           <br />
            <a href="">Sustainability</a>
            <br />
            <a href="">Recycling</a>
        </div>
        <div className='footer3'>
            <h4>Customers</h4>
            <a href="">Email Preferences</a>
        </div>
    <div className='logo1'> 
         <div className='gambarf'>
            <img src={image1} alt="" />
         </div>
         <div className='gambart'>
            <img src={image2} alt="" />
            </div>
         <div className='gambari'>
            <img src={image3} alt="" />
         </div>
    </div>
    <div className='copyright'>
        <p>&copy; {new Date().getFullYear()} Logitech. All rights reserved.</p>
    </div>
       </div>
       
        

</>        
    )
}
export default Content;