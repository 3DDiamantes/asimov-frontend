import React, { Component } from "react";
//import Pong from "./components/Pong";
import "./App.css";

class App extends Component {
    
    constructor(){
        super();
        this.state= {
            url: "http://localhost:9090/ping",
            message: ""
        }
    }
    
    // componentDidMount(){
    //     //var myHeaders = new Headers();

    //     // var myInit = { 
    //     //     method: 'GET',
    //     //     headers: {
    //     //         'Access-Control-Allow-Origin':"*",
    //     //         'Vary': 'Origin'
    //     //     },
    //     //     mode: 'no-cors',
    //     //     cache: 'default' };
        
        
    //     // var myRequest = new Request(this.state.url, myInit);

    //     fetch(this.state.url, { credentials : "omit", mode: "no-cors"})
    //     .then((response) => {
    //           { message:"pong"}
    //           })
    //     .then(res => console.log(res));
    // }

    componentDidMount(){
        setTimeout(()=>{this.setState({message: "pong"})}, 5000)
    }

    render(){
        const { message } = this.state;
        
        return !message ? <h1>Loading</h1> : <h1>{message}</h1>
        //<Pong text={message}></Pong>
    }
}

export default App;