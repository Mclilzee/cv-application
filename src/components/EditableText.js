import React from "react";

export default function EditableText(props) {

    const [isSelected, setIsSelected] = React.useState(false);

    function handleClick() {
        setIsSelected(true);
    }

    function handleBlur() {
        setIsSelected(false);
    }

    function getInputType() {
        if (isSelected) {
            return <input autoFocus={true} onBlur={handleBlur} className={props.className} type={"text"} value={props.data.text} id={props.data.id}
                          name={"inputText"}/>;
        } else {
            return <div onClick={handleClick} onBlur={handleBlur} className={props.className} id={props.data.id}>{props.data.text}</div>;
        }
    }

    return getInputType();
}

