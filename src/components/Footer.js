import React from "react"
import axios from "axios";

export default function Footer(props){
    function handleClick(){
        fetchQuote()
    }
    React.useEffect(()=>{
        fetchQuote()
    },[])
    function fetchQuote(){
        const options = {
            method: 'GET',
            url: 'https://quotes15.p.rapidapi.com/quotes/random/',
            headers: {
                'x-rapidapi-host': 'quotes15.p.rapidapi.com',
                'x-rapidapi-key': '65748579a8msh0f80d7db17667f8p165c7djsn7967c9cd96d6'
            }
        };
        axios.request(options).then(function (response) {
           props.setQuote(response.data.content)
           props.setAuthor(response.data.originator.name)
        }).catch(function (error) {
            console.error(error);
        });
    }
    return(
        <div className="footer flex">
            <div className="social">
                <i className="flex fab fa-twitter"></i>
                <i className="flex fab fa-tumblr"></i>
            </div>
            <button className="btn" onClick={handleClick}  style={{background:`rgb(${props.r},${props.g},${props.b})`}}>
                new quote
            </button>
        </div>
    )
}