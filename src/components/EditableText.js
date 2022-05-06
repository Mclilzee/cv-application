import React from "react";

export default function EditableText(props) {

    const [notSelected, setNotSelected] = React.useState(() => true);
    const [containsText, setContainsText] = React.useState(() => false);

    React.useEffect(() => {
        setContainsText(props.text.length > 0);
    }, [props.text])

    function handleClick() {
        setNotSelected(false);
    }

    function handleBlur() {
        setNotSelected(true);
    }

    const style = {
        color: containsText ? "" : "gray"
    }

    function getInputType() {
        if (notSelected) {
            return <div style={style} onClick={handleClick} onBlur={handleBlur}
                        className={props.className}>{props.text.length > 0 ? props.text : props.placeholder}</div>;
        } else if (props.type === "textarea") {
            return <textarea
                autoFocus={true}
                onChange={props.onChange}
                onBlur={handleBlur}
                className={props.className}
                value={props.text}
                placeholder={props.placeholder}/>;
        } else {
            return <input
                autoFocus={true}
                onChange={props.onChange}
                onBlur={handleBlur}
                className={props.className}
                type={props.type}
                value={props.text}
                placeholder={props.placeholder}/>;
        }
    }

    return getInputType();
}

