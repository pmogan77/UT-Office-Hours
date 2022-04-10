import React from "react";

function Block(props) {
    return (
        <div className="block">
            <h3> {props.place}. {props.name}</h3>
        </div>
    );
}

export default Block;