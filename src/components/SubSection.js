import React from "react";
import EditableText from "./EditableText";

export default function SubSection(props) {

    function handleChange(event) {
        props.onChange(event, props.index);
    }

    return (
        <div>
            <EditableText placeholder="Date Information" onChange={handleChange} className={"date"} text={props.date}/>
            <EditableText placeholder="Title Information" onChange={handleChange} className={"title"}
                          text={props.title}/>
            <textarea placeholder="Explain in details" onChange={handleChange} className={"detail"}
                      value={props.detail}/>
        </div>
    )
}