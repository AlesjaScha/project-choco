function Buttons({filteredProducts}){
    return( 
    <div>
        <button className="submit"onClick={()=>filteredProducts("milk")}>Milchschokolade</button>
        <button className="submit"onClick={()=>filteredProducts("black")}>Dunkleschokolade</button>
    </div>
    )
}
export default Buttons;