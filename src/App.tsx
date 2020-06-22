import React from "react"
import Greeting from "./Greeting"

//This is a comment outside of a component
export default () => {
    return (
        <>
            <h1>Hello!</h1>
            {/* This is a comment inside a component */}
            <Greeting/>
        </>
    )
}