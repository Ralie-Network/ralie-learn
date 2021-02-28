import React, { useState } from "react";
//import logo from '../ui/logo-coral.svg';

import {
    NavLink,    
} from "react-router-dom";


function Sidebar(){

    const [nav, setNav] = useState([
        {label: "Home", slug: "/", icon: "icon-home"},
        {label: "Discover", slug: "discover", icon: "icon-ul"},
        {label: "Categories", slug: "cates", icon: "icon-tag"},
        {label: "My Courses", slug: "my-courses", icon: "icon-briefcase"}
    ])
    const [currentPage, setCurrentPage] = useState("/");

    var navigation = [];
    for(let i = 0; i < nav.length; i++){
        navigation.push(
            <li key={"nav-" + i + "-" + nav[i].slug}>
                <NavLink to={nav[i].slug} className={"aic link noul flex c333"}>
                    <div className={"ico s20 " + nav[i].icon} />
                    <h2 className="lbl s20">{nav[i].label}</h2>
                </NavLink>
            </li>
        );
    }

    console.log(global.fire);

    return (
        <div className="sidebar rel">
            <a href="#" className="logo bl">
                <img src="https://i.imgur.com/O3SGjXa.png"  />
            </a>

            <ul className="nav">
                {navigation}
            </ul>

            <div className="updated-course flex aic">
                <div className="icon-lamp-bright cfff s24 ico" />
                <div className="lbl s15 fontb c333">
                    Blockchain Update
                    <h2 className="author s13 c777">Ralie Network</h2>
                </div>
            </div>

            <div className="stats aic flex">

                <div className="stats-box flex">
                    <div className="ico ico-points s24 icon-shield" />
                    <h2 className="val s15 c333 fontb">10</h2>
                    <h2 className="lbl s13 c777">Reward points</h2>
                </div>

                <div className="stats-box flex">
                    <div className="ico ico-battery s24 icon-battery-90" />
                    <h2 className="val s15 c333 fontb">11.3%</h2>
                    <h2 className="lbl s13 c777">complete</h2>
                </div>

            </div>


            <div className="me flex aic">
                {global.fire.ID ? <React.Fragment><div className="photo cfff s24">
                    <img src="http://placeimg.com/100/100/people" className="bl" />
                </div>
                <div className="lbl s15 fontb c333">
                    Ralie Learn          
                </div>
                </React.Fragment>
                : 
                <NavLink to={"home"} className={"aic link noul flex c333"}>
                    <div className={"ico s24 rel cfff icon-portrait-male"} />
                    <h2 className="lbl s20 fontb">Sign in</h2>
                </NavLink>
                }
            </div>

        </div>
    )
}

export default Sidebar;