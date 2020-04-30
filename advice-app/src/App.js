import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  state={
    advice:''
  }
  componentDidMount(){
  this.setState({advice: "Hi there,  I'am Mustufa"})
  }
  getadvice=()=>{
    fetch("	https://api.adviceslip.com/advice")
    .then(res=> res.json())
    .then(result=>{
      this.setState({advice:result.slip.advice})
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  render(){
    const {advice} = this.state
    return(
      <div className="App">
        <div className="card">       
           <h1>{advice }</h1>
        </div>
        <button onClick={this.getadvice }> Want My Advice?</button>

      </div>
    )
  }
}

export default App;
