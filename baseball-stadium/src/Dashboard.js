import React, {useState} from 'react';

class Dashboard extends React.Component {
    state = {
        strikes: 0,
        balls: 0
    };

    resets = () => {
        this.setState({strikes: 0});
        this.setState({balls: 0});
    };

    handleFoul = () => {
        if (this.strikes === 0) {
            this.setState({strikes: 1});
        } else if (this.strikes === 1) {
            this.setState({strikes: 2});
        }
    };

    handleStrike = () => {
        if (this.strikes < 2) {
            this.setState({strikes: this.strikes + 1});
        }
        this.resets();
    };

    handleBall = () => {
        if (this.balls < 3) {
            this.setState({balls: this.balls + 1});
        }
        this.resets();
    };

    handleHit = () => {
        this.resets();
    };

    render() {
        return (
            <div>
                <button onClick={this.handleStrike()}>Strike</button>
                <button onClick={this.handleBall()}>Ball</button>
                <button onClick={this.handleFoul()}>Foul</button>
                <button onClick={this.handleHit()}>Hit</button>
            </div>
        );
    }
};

export default Dashboard;