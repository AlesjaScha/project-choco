function Product ({anyProducts}){

return(
    <div className="item">
        {anyProducts.map((element=>{

            const{id,name,searchTerm,price,image}=element;

       return(
        <div className="product-card"key={id}>

        <div>
        <h3 className="nameChoco">{name}</h3>
        </div>

        
        <div className="product-info">
    
            <img src ={image}width="300px"alt="candy"/>
            <h4 className="price">{price}</h4>
            <button className="order">in den Warenkorb</button>

        </div>
        </div>

        )
        }))}

        </div>
       )


}
export default Product;