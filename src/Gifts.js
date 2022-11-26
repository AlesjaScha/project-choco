
import imageThree from './geschenk1.jpg';
import imageFour from './geschenk2.jpg';
import imageFive from './geschenk3.jpg';


function Gifts(){
    return(
    <div>
        <div className='titleGift'>
            <h4>Geschenke</h4>
        </div>

        <div className='chocoGifts'>
            <img src={imageThree}width="500px"alt="three"/>
            <img src={imageFour}width="500px" alt="four"/>
            <img src={imageFive}width="500px" alt="five"/>

        </div>
    </div>

    
    
    )
}
export default Gifts;