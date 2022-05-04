import React from "react";

export default function EditableText(props) {


    function getInputType() {
        if (props.isSelected) {
            return <input type={"text"} value={props.text} name={"props"}/>;
        } else {
            return <div className={props.className}>{props.text}</div>;
        }
    }

    return getInputType();
}

