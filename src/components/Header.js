import React from "react"

export default function Header(props){
    return(
        <div className="header"  style={{color:`rgb(${props.r},${props.g},${props.b})`}}>
            <div className="quote">{props.quote}</div>
            <div className="author">{props.author}</div>
        </div>
    )
}