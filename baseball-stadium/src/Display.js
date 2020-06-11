import React, {useState} from 'react';

const Display = (props) => {

    return(
        <div>
            <h1>Baseball At Bat Information</h1>
            <h3 data-testid="strike-count">Strikes: {props.strikeDisplay} </h3>
            <h3 data-testid="ball-count">Balls: {props.ballDisplay} </h3>
        </div>
    );

};

export default Display;