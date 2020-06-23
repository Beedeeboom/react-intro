import React from "react"
import "./App.scss"

export interface Person {
    name: string
    age: number
}

export default (): JSX.Element => {
    const message: Person = { name: "John", age: 30 } 
    const styles: React.CSSProperties = {
        color: "red"
    }

    return (
        <div style={styles} className="container">
                {message.name} is {message.age} years old.
        </div>
    )
}