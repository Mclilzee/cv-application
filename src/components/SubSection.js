import React from "react";

export default function SubSection(props) {

    return (
        <div>
            <h4>{props.date}</h4>
            <h4>{props.title}</h4>
            <h4>{props.detail}</h4>
        </div>
    )
}