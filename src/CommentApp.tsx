import React from "react"
import "./App.scss"
import Comment from "./Comment"
import faker from "faker"
import Card from "./Card"
import comments from "./comments.json"

export default (): JSX.Element => {
    console.log(comments)
    return (
        <div className="comments">
            {comments.map(comment =>
                <Card>
                    <Comment
                        avatar={faker.image.avatar()}
                        {...comment}
                    />
                </Card>
        )}
        </div>
    )    
}
