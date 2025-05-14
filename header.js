import { Link } from "react-router"

export const Header = ()=>{
    return(

        <>
        <div className="nav-container">
            <div className="logo-container">
                <img className="logo" src="https://i.im.ge/2025/03/27/p0PVTP.Screenshot-from-2025-03-27-13-41-41.png"></img>
            </div>
            <div className="items">
                <ul className="nav-ul">
                 <Link to={"/"}><li>Home</li> </Link>
                 <Link to={"/AboutUS"}><li>About Us</li></Link>   
                 <Link to={"/Contact"}><li>Contact</li> </Link>
                </ul>
            </div>
        </div>
        
        
        </>
    )



}