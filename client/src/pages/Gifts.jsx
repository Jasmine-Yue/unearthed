import React, { useState, useEffect } from 'react'
import './Gifts.css'
import Card from '../components/Card'


const Gifts = (props) => {

    const [gifts, setGifts] = useState([])

    const fetchGifts=async ()=>{
        const response=  await fetch('http://localhost:3001/gifts');
        const data= await response.json();
        return data;
    }       
    

    useEffect(  () => {
        fetchGifts()
        .then(data=>{
            setGifts([...data])});
    }, [props.data])
    
    return (
        <div className="Gifts">
            <main>
            {
                gifts && gifts.length > 0 ?
                gifts.map((gift,index) => 
                    
                   <Card id={gift.id} 
                         image={gift.image} 
                         name={gift.name} 
                         pricepoint={gift.pricepoint} 
                         audience={gift.audience} />

                ) : <h3 className="noResults">{'No Gifts Yet 😞'}</h3>
            }
            </main>
        </div>  
    )
}

export default Gifts