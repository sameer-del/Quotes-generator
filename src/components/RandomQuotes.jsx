import React, { useState } from 'react'
import './RandomQuotes.css'
const RandomQuotes = () => {
    let quotes = [];
    async function loadQuotes(){
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }
       
  
    const [quote,setQuote] = useState({
        text:"suffering and pain build the character",
        author:"sameer",
    });
    const random =() =>{
        const select =quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }
    loadQuotes();
  return (
    <div>
        <div className="container">
            <div className="quotes">
                {quote.text}
            </div>
            <div className="line"></div>
            <div className="cont-btn">
            <div className="author">
               - {quote.author.split(",")[0]}
            </div>
            <div className="loader">
                <button onClick={()=>{random()}}>next</button>
            </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default RandomQuotes;