import React from "react"
import "./App.scss"
import Comment from "./Comment"
import faker from "faker"

export default (): JSX.Element => {
    return (
        <div className="comments">
            <Comment
                author="Mary Smith"
                avatar={faker.image.avatar()}
                date="11/12 6:00pm"
                text="I think you are really cool!"
            />
            <Comment
                // author="Jude Henry"
                avatar={faker.image.avatar()}
                date="09/12 1:30pm"
                text="Hey this is great!"
            />
            <Comment
                author="Bobby Miller"
                avatar={faker.image.avatar()}
                date="07/12 9:10am"
                text="Simply spectacular."
            />
        </div>
    )
}