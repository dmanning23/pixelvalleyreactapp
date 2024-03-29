import React from 'react';
import OverworldChibi from './OverworldChibi';

const OverworldChibis = (props) => {

    //Create a list of the x and y for each chibi
    let chibis = [];
    let createChibi = function(agent, x, y) {
        chibis.push({agent: agent, x: x, y:y});
    };

    //add the chibi heads for characters that are inside
    if (props.location.allAgents.length > 0) {
        let chibiWidth = (96 * props.widthMultiplier);
        let chibiHeight = (96 * props.heightMultiplier);
        let totalWidth = (chibiWidth * props.location.allAgents.length);
        let chibiX = ((0 + (props.width / 2)) - (totalWidth / 2));
        let chibiY = 0 + (chibiHeight / 2);
        for (let i = 0; i < props.location.allAgents.length; i++) {
            createChibi(props.location.allAgents[i], chibiX, chibiY);
            chibiX += chibiWidth;
        }
    }

    const listChibis = chibis.map((chibi) => 
        <OverworldChibi 
            key={chibi.agent._id}
            agent={chibi.agent} 
            x={chibi.x}
            y={chibi.y}
            widthMultiplier={props.widthMultiplier}
            heightMultiplier={props.heightMultiplier}/>
    );

    return (
        <>
            {listChibis.length > 0 ? ( 
                <>{listChibis}</>
            ):(
                <></>
            )}
        </>
    );
}

export default OverworldChibis;