import React from "react";
import EditableText from "./EditableText";
import deleteButton from "../assets/buttons/delete-button.svg"

export default function SubSection(props) {

    function handleChange(event) {
        props.onChange(event, props.index);
    }

    function handleDeleteButtonClick() {
        props.onDelete(props.index);
    }

    return (
        <div className={"subsection-container"}>
            <img onClick={handleDeleteButtonClick} className={"delete-button"} src={deleteButton}
                 alt={"delete button"}/>
            <EditableText placeholder="Date Information" onChange={handleChange} className={"date"} text={props.date}/>
            <EditableText placeholder="Title Information" onChange={handleChange} className={"title"}
                          text={props.title}/>
            <textarea placeholder="Explain in details" onChange={handleChange} className={"detail"}
                      value={props.detail}/>
        </div>
    )
}