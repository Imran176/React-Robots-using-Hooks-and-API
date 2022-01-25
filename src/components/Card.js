import React from 'react';

//https://robohash.org/

const Card = (props) => {
    const { id, name, email }=props
    return(
        <div className= 'tc dib grow br3 bw3 pa3 ma3 bg-light-green shadow-5'>
            <img alt='robot' src={`https://robohash.org/1'${id}?200*200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;