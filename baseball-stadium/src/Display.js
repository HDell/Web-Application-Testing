import React, {useState} from 'react';
import Dashboard from './Dashboard';

const Display = () => {

    return(
        <div>
            <h1>Baseball At Bat Information</h1>
            <h3>Strikes: {Dashboard.state.strikes} </h3>
            <h3>Balls: {Dashboard.state.balls}</h3>
        </div>
    );

};

export default Display;