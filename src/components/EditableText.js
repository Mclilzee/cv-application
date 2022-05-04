import React from "react";

export default function EditableText(props) {

    function getInputType() {
        if (props.data.isSelected) {
            return <input className={props.className} type={"text"} value={props.data.text} id={props.data.id}
                          name={"inputText"}/>;
        } else {
            return <div className={props.className} id={props.data.id}>{props.data.text}</div>;
        }
    }

    return getInputType();
}

