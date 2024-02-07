import CartWidget from "../common/CartWidget"
import "./NavBar.css"


export const Navbar = ()=>{
    return (
        <div className= "NavBar">
        <ul>
            <li><h2>Inicio</h2></li>
            <li><h2>Celulares</h2></li>
            <li><h2>PC</h2></li>
            <li><h2>Laptops</h2></li>
            </ul> 
            <CartWidget />
           
        </div>
    )
}
