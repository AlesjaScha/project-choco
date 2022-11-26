import imageSeven from './bear.jpg';
import imageEight from  './bild.jpg';



function Contact(){
    return(
    <div>
        <div className="titleGift">
            <h4>Kontaktieren Sie uns</h4>
        </div>

        <div className="address">
                <h2>Läderach (Schweiz) AG </h2>
                <h2>Bleiche 14, 8755 Ennenda ,</h2>
                <h2>Telefon +41 55 645 44 44</h2>
        </div>

        <div className='address'>
            <img src={imageSeven}width="500px"alt="seven"/>

        </div>

        <div className='address'>
                <img src={imageEight}width="800px"alt="eight"/>
        </div>

        
    
 </div>
    )


}
export default Contact;