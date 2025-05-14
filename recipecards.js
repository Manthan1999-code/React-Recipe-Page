import { Link } from "react-router"

export const RecipeCard = ({ObjList})=>{
    console.log(ObjList)
return(
    <>
   <div className="cardmaindiv">
          <h2>{ObjList.name}</h2>
        <img className="cardimage" src={ObjList.image}></img>

        <div className="cartmaindiv">
        <h3>{ "Rating - "+ObjList.rating+"⭐"}</h3>
        <button className="cart">Add to Cart</button>
        </div>
        
  
    
    
   </div>
 

    </>
)
}