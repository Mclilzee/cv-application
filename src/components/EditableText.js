import React from "react";

export default function EditableText(props) {

    const [notSelected, setNotSelected] = React.useState(() => true);
    const [containsText, setContainsText] = React.useState(() => false);

    React.useEffect(() => {
        setContainsText(props.text.match(/\S/gm));
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
                        className={props.className}>{containsText ? props.text : props.placeholder}</div>;
        } else if (props.type === "textarea") {
            return <textarea
                autoFocus={true}
                onChange={props.onChange}
                onBlur={handleBlur}
                className={props.className}
                value={props.text}
                placeholder={props.placeholder ? props.placeholder : ""}
            />;
        } else {
            return <input
                autoFocus={true}
                onChange={props.onChange}
                onBlur={handleBlur}
                className={props.className}
                type={props.type}
                value={props.text}
                placeholder={props.placeholder ? props.placeholder : ""}
            />;
        }
    }

    return getInputType();
}

