import { useState } from "react";
import Menu from "./Menu";
import Categories from "./categories"
import {items} from "./data"
import "./main.css"
import Nav from "./nav";
export default function Main()

{    const allTitles=[...new Set(items.map((item)=>item.title))];
    const allCategories=["all",...new Set(items.map((item)=>item.category))];
    const[input,setInput]=useState("");
    const [menuItems,setMenuItems]=useState(items);
    const [activeCategory,setActiveCategory]=useState("all");
    const[categories,setCategories]=useState(allCategories);
     const[titles,setTitles]=useState(allTitles);

    const handleCHange=event=>
    {
        console.log("called");
        setInput(event.target.value);
        handle();
    }
    const handle=()=>{
        const filterByTitle=items.filter((item)=>item.title.includes(input.toLowerCase()));
        console.log(filterByTitle);
        setMenuItems(filterByTitle);
        if(input.length===0)
        {
            setMenuItems(items);
        }
    }
    const filterItems=(category)=>
    {
        setActiveCategory(category);
        if(category ==="all")
        {
        setMenuItems(items)
        return;
    }
    const newItems=items.filter((item)=>item.category === category);
    setMenuItems(newItems);
};
    return(
        <div className="Main">
            <Nav/>
            <div className="header">
                <h1 className="title">Discover Your Perfect Destination With Us</h1>
                <div className="search">
                    <input type="text" className="Products" value={input} onChange={handleCHange} placeholder="Find your Destination"/>
                    <button onClick={handle} id="btn"><i className="fa-solid fa-magnifying-glass-location" ></i></button>
                </div>
            </div>
            <div className="photo">
                <img src="img.png" alt="" />
            </div>
            <Categories categories={categories} activeCategory={activeCategory} filterItems={filterItems}/>
            <Menu items={menuItems}/>
        </div>
    )
}