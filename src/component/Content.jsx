import '../styles/Content.css'
import image1 from '../assets/mouse.jpg'
import image2 from '../assets/keyboard.jpg'
import image3 from '../assets/headset.jpg'
import image6 from '../assets/kitty.jpg'
import image7 from '../assets/dekstop.jpg'

function Content() {
    return (
        <>
       <div className="gambar">
        <img src={image1} alt="" />
        <h2>NEW MOUSE G520 X</h2>
        <h3>NEW 4K 200HZ MODEL AVAILABLE</h3>
       
        </div>
        
        <div className="gambar1">
         <img src={image2} alt="" />
        <h2>LOGITECH G213</h2>
        <h3>PRODIGY KEYBOARD GAMING</h3>
        
        </div>

        <div className="gambar2">
        <img src={image3} alt="" />
        <h2>LOGITECH X PRO</h2>
        <h3>THE PRO-G 50 MM DRIVER</h3>
        </div>
        <div className='gambar3'>
            <div className='small'>
            <img src={image6} alt="" />
            <h1>Hello  Kitty And Friends</h1>

            </div>
            
           <div className='small1'>
           <img src={image7} alt="" />
           <h1>Win At Work & Play</h1>
           </div>

        </div>
        
        <br />
        <hr />

</>        
    )
}
export default Content;