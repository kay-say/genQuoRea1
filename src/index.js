import React from "react";
import ReactDOM from "react-dom";
import "./dist/styles.css"
import Header from "./components/Header"; 
import Footer from "./components/Footer";

function App(){
    const [r, setR] = React.useState(0)
    const [g, setG] = React.useState(0)
    const [b, setB] = React.useState(0)
    const [quote,setQuote] = React.useState("sweet quote")
    const [author,setAuthor] = React.useState("this author")
    React.useEffect(()=>{
        setR(Math.floor(Math.random()*255))
        setG(Math.floor(Math.random()*255))
        setB(Math.floor(Math.random()*255))
    },[quote])
    return(
        <div className="container flex" style={{background:`rgb(${r},${g},${b})`}}>
            <div className="app">
                <Header quote={quote} author={author} r={r} g={g} b={b} />
                <Footer setQuote={setQuote} setAuthor={setAuthor} r={r} g={g} b={b} />
            </div>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))