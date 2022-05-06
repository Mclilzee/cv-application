import React from "react";

export default function EditableText(props) {

    const [isSelected, setIsSelected] = React.useState(() => false);
    const [containsText, setContainsText] = React.useState(() => false);

    React.useEffect(() => {
        setContainsText(props.text.length > 0);
    }, [props.text])

    function handleClick() {
        setIsSelected(true);
    }

    function handleBlur() {
        setIsSelected(false);
    }

    const style = {
        color: props.text.length
    }

    function getInputType() {
        if (isSelected) {
            return <input autoFocus={true} onChange={props.onChange} onBlur={handleBlur} className={props.className}
                          type={"text"} value={props.text} placeholder={props.placeholder}/>;
        } else {
            return <div onClick={handleClick} onBlur={handleBlur}
                        className={props.className}>{props.text.length > 0 ? props.text : props.placeholder}</div>;
        }
    }

    return getInputType();
}

