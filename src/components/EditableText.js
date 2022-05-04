import React from "react";

export default function EditableText(props) {

    function getInputType() {
        if (props.data.isSelected) {
            return <input type={"text"} value={props.text} name={"props"}/>;
        } else {
            return <div className={props.className} id={props.data.id}>{props.data.text}</div>;
        }
    }

    return getInputType();
}

