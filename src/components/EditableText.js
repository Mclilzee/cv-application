import React from "react";

export default function EditableText(props) {

    const [isSelected, setIsSelected] = React.useState(false);

    function handleClick() {
        setIsSelected(true);
    }

    function handleBlur() {
        setIsSelected(false);
    }

    function handleChange(event) {
        props.onChange(event.target.value, props.index);
    }

    function getInputType() {
        if (isSelected) {
            return <input onChange={handleChange} autoFocus={true} onBlur={handleBlur} className={props.className}
                          type={"text"} value={props.text}/>;
        } else {
            return <div onClick={handleClick} onBlur={handleBlur} className={props.className}
            >{props.text}</div>;
        }
    }

    return getInputType();
}

