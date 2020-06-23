import React from "react"
import faker from "faker"

interface CommentProps {
    author?: string
    avatar: string
    date: string
    text: string
}

export default ({ avatar, author = "Anonymous", date, text }: CommentProps): JSX.Element => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={ avatar } />
            </a>
            <div className="content">
                <a href="/" className="author">{ author }</a>
                <p className="date">{ date }</p>
                <p className="text">{ text }</p>
            </div>
        </div>
    )
}