import React from "react"
import foo from "./Greeting.module.scss"

const styles: React.CSSProperties = {
    color: "red",
    fontSize: "30px",
    backgroundColor: "black",
    border: "5px solid yellow"
}

export default (): JSX.Element  => {
    let name: string = 'Steph'
    return <p className={ foo.under } style={ styles }>Bonjour, {name.toUpperCase()}</p>
}