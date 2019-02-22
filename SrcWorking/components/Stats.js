import React from "react";
const Stats = (props) => {
 
    const totalPlayers = props.players.length;
    const totalPoints = props.players.reduce((total, player) => {
        return total + player.score;
    }, 0);

    return (
        <table className="Stats">
        <tbody>
            <tr>
                <td>Players:</td>
                <td>{ totalPlayers }</td>
            </tr>
            <tr>
                <td>Total Points:</td>
                <td>{ totalPoints }</td>
                <td></td>
            </tr>
        </tbody>
        </table>
    );
}

export default Stats;