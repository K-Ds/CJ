import React, { Component, useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { GiChefToque, GiForkKnifeSpoon } from "react-icons/gi";
import { SlLocationPin } from "react-icons/sl";
import { TbMessageCircle2 } from "react-icons/tb"
import { VscFeedback } from "react-icons/vsc"
import "../styles/NavBar.css";

//Images
const img1 = require(`../assets/sliders/1.jpg`);
const img2 = require(`../assets/sliders/2.jpg`);
const img3 = require(`../assets/sliders/3.jpg`);
const img4 = require(`../assets/sliders/4.jpg`);
const img5 = require(`../assets/sliders/5.jpg`);
const img6 = require(`../assets/sliders/6.jpg`);
const img7 = require(`../assets/sliders/7.jpg`);

const NavBar = () => {
    const sliders = [img1, img2, img3, img4, img5, img6, img7];
    const [currentImgId, setCurrentImgId] = useState(1);
    setInterval(() => {
        if (currentImgId == (sliders.length - 1)) {
            setCurrentImgId(1);
        }
        else {
            let i = currentImgId + 1;
            console.log("IIII", i);
            setCurrentImgId(i);
            console.log("done");
        }
    }, 5000)

    const imageElement = (id) => {
        console.log("ImageElemnt", id)
        return <img src={sliders[currentImgId]} className="bg-image" />
    }
    return (

        <section className='hero-section'>
            <div className="bg-slider">
                {imageElement(currentImgId)}
            </div>

            <nav className='nav'>
                <span className='nav-brand'><img className='nav-logo' src={require('../assets/logo-white.png')} /></span>
                <ul className='nav-items'>
                    <li className='nav-link'>
                        <IconContext.Provider value={{
                            className: 'nav-icon',
                        }}>
                            <GiChefToque />
                        </IconContext.Provider>
                        <a href="">MENU</a>
                    </li>
                    <li className='nav-link'>
                        <IconContext.Provider value={{
                            className: 'nav-icon',
                        }}>
                            <SlLocationPin />
                        </IconContext.Provider>
                        <a href="">LOCATIONS</a>
                    </li>
                    <li className='nav-link'>
                        <IconContext.Provider value={{
                            className: 'nav-icon',
                        }}>
                            <TbMessageCircle2 />
                        </IconContext.Provider>
                        <a href="">CAREERS</a>
                    </li>
                    <li className='nav-link'>
                        <IconContext.Provider value={{
                            className: 'nav-icon',
                        }}>
                            <VscFeedback />
                        </IconContext.Provider>
                        <a href="">FEEDBACK</a>
                    </li>
                    <li className='nav-link'>
                        <IconContext.Provider value={{
                            className: 'nav-icon',
                        }}>
                            <GiForkKnifeSpoon />
                        </IconContext.Provider>
                        <a href="">ABOUT US</a>
                    </li>
                </ul>
            </nav>
        </section >


    )
}

export default NavBar;