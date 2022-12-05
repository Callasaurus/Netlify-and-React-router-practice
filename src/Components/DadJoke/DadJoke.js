import { useState, useEffect } from 'react'
import React from 'react'

function DadJoke() {

    const [dadJoke, setDadJoke] = useState('')

    useEffect(() => {
        getInitialJoke();
    }, []);

    async function getInitialJoke() {
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers: { accept: "application/json" },
        });
        let data = await response.json()
        setDadJoke(data.joke)
    }

    return (
        <div className='dad-joke'>
            <div className='dad-joke-parent'>
                <img id="dad-joke-img" alt="dadjoke" src="https://ichef.bbci.co.uk/news/624/mcs/media/images/81763000/jpg/_81763098_risitas.jpg" />
                <button className='buttons' onClick={getInitialJoke}>Click for a new joke</button>
                <h2>{dadJoke}</h2>
            </div>
        </div>
    )
}

export default DadJoke;
