
import { useState } from 'react';
import { data } from './data';
import Buttons from './Buttons';
import image from './logo.jpg';
import imageTwo from './Weihnachten.jpg';
import Product from './Product';



function Chocolate(){ 

    const[products,setProducts]=useState(data);
    const chosenProducts=(searchTerm)=>{ 
    const newProducts=data.filter(element=>element.searchTerm===searchTerm);
    setProducts(newProducts);
    }

    


        return(
            <div>
        
        <div className="par">
            <img src={image}width="150px" alt="par"/>
        </div>

        <div className='santa'>
            <h1 className='title'>Schweizer Schokolade</h1>
        </div>

        <div className='santa'>
            <img src ={imageTwo}width="1050px"alt="two"/>
        </div>

        <div className='heading'>
            <button className='sumbitOne'>Sortiment</button>
        </div>


        <div className='btn'>
            <Buttons filteredProducts={chosenProducts} />
        </div>
 
        <div>
            <Product anyProducts={products}/>
        </div>

            </div>
        )

}  
export default Chocolate;

