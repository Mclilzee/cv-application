import React from "react";
import deleteButton from "../assets/buttons/delete-button.svg"

export default function PersonalDetail(props) {

    const [displayButton, setDisplayButton] = React.useState(false);

    function handleMouseEnter() {
        setDisplayButton(true)
    }

    function handleMouseOut() {
        setDisplayButton(false)
    }

    const style = {
        visibility: displayButton ? "visible" : "hidden"
    }

    return (
        <div onMouseOver={handleMouseEnter} onMouseOut={handleMouseOut}
             className={"personal-detail"}>
            <img style={style} src={deleteButton} alt="delete button"/>
            <input placeholder={"Title"} onChange={props.onChange} className={"title"} value={props.title}/>
            <input placeholder={"Detail"} onChange={props.onChange} className={"detail"} value={props.detail}/>
        </div>
    )
}