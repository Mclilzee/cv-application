import React from "react";
import placeHolderImage from "../assets/images/photo-placeholder.jpg"
import closeButton from "../assets/buttons/close-button.svg"


export default function Picture(props) {

    const [profilePicture, setProfilePicture] = React.useState(() => {
      return localStorage.getItem("profilePicture") || placeHolderImage
    })
    const [pasteImageUrlMessage, setPasteImageUrlMessage] = React.useState(() => "Paste Image URL");
    const [showForm, setShowForm] = React.useState(() => false);

    React.useEffect(() => {
        localStorage.setItem("profilePicture", profilePicture);
    }, [profilePicture])

    function chooseImageURL(event) {
        event.preventDefault()
        const imageUrl = event.target.url.value;

        console.log(new Image())
        if (imageUrl.match(/\.(jpeg|jpg|png)$/)) {
            setProfilePicture(imageUrl)
            setShowForm(false)
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


    return (
        <div className={"picture-container"}>
            {showForm &&
                <div className={"form-container"}>
                    <form onSubmit={chooseImageURL}>
                        <img src={closeButton} alt={"close form button"} onClick={handleCloseFormButton}
                             className={"close-button"}/>
                        <label form={"url-input"}>{pasteImageUrlMessage}</label>
                        <input placeholder={"https//i.imgur.com/example.jpeg"} id="url-input" type="url"
                               name="url"/>
                        <button type="submit">Select</button>
                        <a href={"https://imgur.com/upload"} target={"_blank"} rel="noreferrer">Upload using Imgur</a>
                    </form>
                </div>
            }
            <img onClick={handleImageClick} className={"profile-picture"} src={profilePicture} alt={"person"}/>
        </div>
    )
}