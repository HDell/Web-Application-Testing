import React, {useEffect, useState} from 'react';
import Display from "./Display";

const Dashboard = () => {
    const [strikes, setStrikes] = useState(0);
    const [balls, setBalls] = useState(0);

    useEffect(() => {

    }, [strikes, balls]);

    const resets = () => {
        setStrikes(0);
        setBalls(0);
    };

    const handleFoul = () => {
        if (strikes < 2) {
            setStrikes(strikes + 1);
        }
    };

    const handleStrike = () => {
        if (strikes < 2) {
            setStrikes(strikes + 1);
        } else {
            resets();
        }
    };

    const handleBall = () => {
        if (balls < 3) {
            setBalls(balls + 1);
        } else {
            resets();
        }
    };

    const handleHit = () => {
        resets();
    };

    return(
        <div>
            <Display strikeDisplay={strikes} ballDisplay={balls}/>
            <button data-testid="strike-button" onClick={handleStrike}>Strike</button>
            <button data-testid="ball-button" onClick={handleBall}>Ball</button>
            <button data-testid="foul-button" onClick={handleFoul}>Foul</button>
            <button data-testid="hit-button" onClick={handleHit}>Hit</button>
        </div>
    );
};

export default Dashboard;