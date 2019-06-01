import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.getCats = this.getCats.bind(this);
    this.state = {
      image: ""
    }
  }

  getCats = ()=>{
    // console.log("teste");
    axios.get('https://api.thecatapi.com/v1/images/search', {
      headers: {                  
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization", 
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
        "Content-Type": "application/json;charset=UTF-8"                   
      }
    })
    .then(res => {
      // console.log(res.data[0].url);
      let src = res.data[0].url;
      this.setState({
        image: res.data[0].url
      });
      // console.log(this.state.main_image);
    })
      .catch(error =>
        console.log(error));
  }

  render(){
    return (
      <div className="App text-center">
        <h2>Hi!</h2>
        <div className="text-center">
          <button type="button" className="btn-catch" onClick={this.getCats}>Catch a cat</button>
        </div>
        <div className="App_image">
          <img src={this.state.image} />
        </div>
      </div>
    );
  }
}

export default App;
