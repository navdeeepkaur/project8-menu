import React from "react";
import "./menu.css"

export default function Menu(props)
{
    return(
        <div className="menu">
            {props.items.map((item)=>{
                const {id,title,img,desc,price}=item;
                return (
                    <article key={id} className="menu-items">
                        <div className="menu-photo">
                            <img src={img} className="item-pic"/>
                        </div>
                        <div className="info">
                            <header>
                            <h4 className="Title">{title.toUpperCase()}</h4>
                            <h4 className="price">${price+"/pp"}</h4>
                            </header>
                            <p className="description">{desc}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}