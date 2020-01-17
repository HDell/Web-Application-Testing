import React, {useState} from 'react';

const Dashboard = () => {
    const [strikes, setStrikes] = useState(0);
    const [balls, setBalls] = useState(0);

    const resets = () => {
        setStrikes(0);
        setBalls(0);
    };

    const handleFoul = () => {
        if (strikes === 0) {
            setStrikes(1);
        } else if (strikes === 1) {
            setStrikes(2);
        }
    };

    const handleStrike = () => {
        if (strikes < 2) {
            setStrikes(strikes + 1);
        }
        resets();
    };

    const handleBall = () => {
        if (balls < 3) {
            setBalls(balls + 1);
        }
        resets();
    };

    const handleHit = () => {
        resets();
    };

    return(
        <div>
            <button onClick={handleStrike}>Strike</button>
            <button onClick={handleBall}>Ball</button>
            <button onClick={handleFoul}>Foul</button>
            <button onClick={handleHit}>Hit</button>
        </div>
    );
};

export default Dashboard;