import React, { useState, useEffect } from "react";
import HeroText from "../HeroText";
import "./index.css";

function HeroImage(props) {

    const [title, setTitle] = useState("");
    const [anim, setAnim] = useState(true);

    const preSetQuotes = [
        "“Who controls the present, now?” - Zach De La Rocha",
        "“I have a dream” - MLK",
        "“Did I do that?” - Steve Urkle"
    ];

    useEffect(() => {

        if(props.randomQuote){
            if(props.quotes){
    
            }
            else { 
                let ran = Math.floor(Math.random() * preSetQuotes.length);
                setTitle(preSetQuotes[ran]);
            }
        }

        if(anim){
            iterateText();
            setAnim(false);
        }

    }, [props.quotes, props.randomQuote, preSetQuotes])

    function iterateText(){
        setInterval(() => {
            
            let ran = Math.floor(Math.random() * preSetQuotes.length);
            let newTitle = preSetQuotes[ran];
            if(newTitle === title){

            }
            else{
                setTitle(newTitle);
            }
            console.log("iterate")
        }, 4000);
    }

    
    return (
        <div className="hero-image" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.image})` }}>
            <div className="hero-text">
                {props.randomQuote ? <HeroText text={title} iterateText={iterateText}/> : console.log("QuoteNotAdded")}
            </div>
        </div>
    );
}

export default HeroImage;