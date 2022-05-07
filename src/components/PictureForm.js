import React from "react";

export default function PictureForm(props) {

    const [profilePicture, setProfilePicture] = React.useState(() => "placeHolderImage")
    const [pasteImageUrlMessage, setPasteImageUrlMessage] = React.useState(() => "Paste Image URL");

    function chooseImageURL(event) {
        event.preventDefault()
        const imageUrl = event.target.url.value;

        console.log(new Image())
        if (imageUrl.match(/\.(jpeg|jpg|png)$/)) {
            setProfilePicture(imageUrl)
        } else {
            setPasteImageUrlMessage("Invalid Link, Please choose a valid image link.")
        }

    }


    return (
        <div className={"picture-container"}>
            <form onSubmit={chooseImageURL}>
                <label form={"url-input"}>{pasteImageUrlMessage}</label>
                <input id="url-input" type="url" name="url"/>
                <button type="submit">Select</button>
                <a href={"https://imgur.com"} target={"_blank"} rel="noreferrer">Upload your Image using Imgur</a>
            </form>

        </div>
    )
}