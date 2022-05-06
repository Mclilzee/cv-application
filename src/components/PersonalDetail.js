import React from "react";
import deleteButton from "../assets/buttons/delete-button.svg"

export default function PersonalDetail(props) {

    const [displayButton, setDisplayButton] = React.useState(false);

    function handleChange(event) {
        props.onChange(event, props.index);
    }

    function handleMouseEnter() {
        setDisplayButton(true)
    }

    function handleMouseOut() {
        setDisplayButton(false)
    }

    function handleDelete() {
        props.onDelete(props.index);
    }

    const style = {
        visibility: displayButton ? "visible" : "hidden"
    }

    return (
        <div onMouseOver={handleMouseEnter} onMouseOut={handleMouseOut}
             className={"personal-detail"}>
            <img onClick={handleDelete} style={style} src={deleteButton} alt="delete button"/>
            <input placeholder={"Title"} onChange={handleChange} className={"title"} value={props.title}/>
            <input placeholder={"Detail"} onChange={handleChange} className={"detail"} value={props.detail}/>
        </div>
    )
}