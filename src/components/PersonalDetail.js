import React from "react";
import deleteButton from "../assets/buttons/delete-button.svg"
import EditableText from "./EditableText";

export default function PersonalDetail(props) {

    const [displayButton, setDisplayButton] = React.useState(false);

    function handleChange(event) {
        props.onChange(event, props.id);
    }

    function handleMouseEnter() {
        setDisplayButton(true)
    }

    function handleMouseOut() {
        setDisplayButton(false)
    }

    function handleDelete() {
        props.onDelete(props.id);
    }

    return (
        <div onMouseOver={handleMouseEnter} onMouseOut={handleMouseOut}
             className={"personal-detail"}>
            <img className={`delete-button ${displayButton ? "visible" : "hidden"}`} onClick={handleDelete} src={deleteButton} alt="delete button"/>
            <EditableText type={"text"} placeholder={"Title"} onChange={handleChange} className={"title"} text={props.title}/>
            <EditableText type={"text"} placeholder={"Detail"} onChange={handleChange} className={"detail"} text={props.detail}/>
        </div>
    )
}