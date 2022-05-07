import React from "react";
import placeHolderImage from "../assets/images/photo-placeholder.jpg"
import closeButton from "../assets/buttons/close-button.svg"


export default function Picture(props) {

    const [profilePicture, setProfilePicture] = React.useState(() => placeHolderImage)
    const [pasteImageUrlMessage, setPasteImageUrlMessage] = React.useState(() => "Paste Image URL");
    const [showForm, setShowForm] = React.useState(() => false);

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

    function handleImageClick() {
        setShowForm(true);
        setPasteImageUrlMessage("Paste Image URL")
    }

    function handleCloseFormButton() {
        setShowForm(false);
    }

    const formStyle = {
        visibility: showForm ? "" : "hidden"
    }


    return (
        <div className={"picture-container"}>
            <div style={formStyle} className={"form-container"}>
                <form onSubmit={chooseImageURL}>
                    <img src={closeButton} alt={"close form button"} onClick={handleCloseFormButton}
                         className={"close-button"}/>
                    <label form={"url-input"}>{pasteImageUrlMessage}</label>
                    <input id="url-input" type="url" name="url"/>
                    <button type="submit">Select</button>
                    <a href={"https://imgur.com"} target={"_blank"} rel="noreferrer">Upload your Image using Imgur</a>
                </form>
            </div>
            <img onClick={handleImageClick} className={"profile-picture"} src={profilePicture} alt={"person"}/>
        </div>
    )
}