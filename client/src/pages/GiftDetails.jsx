

import React, {useState, useEffect} from 'react';
import './GiftDetails.css'
import { useParams } from 'react-router-dom';

const GiftDetails = ({data}) => {

    const [gift, setGift] = useState({id: 0, name: "", pricepoint: "", audience: "", image: "", description: "", submittedby: "", submittedon: ""})

    const {id}=useParams();

    console.log('id:',id);

    const fetchGift=async (id)=>{
        const response=await fetch(`/gifts/${id}`);
        const data= await response.json();
        return data;
    }

    useEffect(() => {
     if (id){
      fetchGift(id)
      .then(data=>setGift(...data))
     }
    }, [id]);


    return (
        <div className="GiftDetails">
            <main id="gift-content" class="gift-info">
                <div class="image-container">
                    <img id="image" src={gift.image} />
                </div>
                <div class="gift-details">
                    <h2 id="name">{gift.name}</h2>
                    <p id="submittedBy">{'Submitted By: ' + gift.submittedby}</p>
                    <p id="pricePoint">{'Price: ' + gift.pricepoint}</p>
                    <p id="audience">{'Great For: ' + gift.audience}</p>
                    <p id="description">{gift.description}</p>
                </div>
            </main>
        </div>
    )
}

export default GiftDetails