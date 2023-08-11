import React from "react";
import "./categories.css"
export default function Categories(props)
{
    return(
        <div className="cat">
       {props.categories.map((category,index)=>
       (
   
        <button type="button" className={`${props.activeCategory===category? "fitler-btn active" : "filter-btn" }`} key={index} onClick={()=>props.filterItems(category)}>{category}</button>
     
       ))}

        </div>
    )
}
