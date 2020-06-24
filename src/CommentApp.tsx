import React from "react"
import "./App.scss"
import Comment from "./Comment"
import faker from "faker"
import Card from "./Card"

export default (): JSX.Element => {
    return (
        <div className="comments">
            <Card>
            <Comment
                author="Mary Smith"
                avatar={faker.image.avatar()}
                date="11/12 6:00pm"
                text="I think you are really cool!"
            />
            </Card>
            <Card>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, fugiat? Explicabo porro unde ipsum quae illo optio aliquam repellat blanditiis.</p>
            </Card>
            <Card heading="Last Comment!">
            <Comment
                // author="Jude Henry"
                avatar={faker.image.avatar()}
                date="09/12 1:30pm"
                text="Hey this is great!"
            />
            </Card>
            <Card>
            <Comment
                author="Bobby Miller"
                avatar={faker.image.avatar()}
                date="07/12 9:10am"
                text="banana"
            />
            </Card>
        </div>
    )
}