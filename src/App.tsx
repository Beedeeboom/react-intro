import React from "react"
import Greeting from "./Greeting"
import "./App.scss"
import AppTwo from "./CommentApp"

//This is a comment outside of a component
export default () => {
    const styles: React.CSSProperties = {
        color: "blue"
    }
    return (
        <div className="container">
            <h1 style={ styles}>Hello!</h1>
            {/* This is a comment inside a component */}
            <p>Testing</p>
            <Greeting/>
        </div>
    )
}