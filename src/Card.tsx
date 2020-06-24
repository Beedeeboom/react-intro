import React from "react"

const styles: React.CSSProperties = {
    backgroundColor: "grey",
    border: "4px solid red",
    width: "100%",
    margin: "auto",
}

type CardProps = {
    children?: JSX.Element
    heading?: string
}

export default (props: CardProps): JSX.Element => {
    return (
        <div style={styles}>
            <h2>{props.heading}</h2>
            {props.children}
        </div>
    )
}