import React from 'react';



class Reactbox extends React.Component {
  constructor(props){
    super(props);
    this.state = {color: "orange"};
    this.switchColor = this.switchColor.bind(this);
    this.clickTime = 0;      
  }
Increment = () => {
  this.setState({clickTime: this.state.clickTime + 1 });
}
  
  switchColor(){
    let yellow = Math.floor(Math.random()*200)
    let blue = Math.floor(Math.random()*155)
    let red = Math.floor(Math.random()*75)
    this.setState ({color: `rgb(${yellow},${blue},${red})`})
  }
  
render() {
  return (
    <div className="App">
      <div  className ="div" style={{backgroundColor: this.state.color}}>
        </div> 
        <div className="counter">{this.state.clickTime}</div>
      <button className="btn" onClick={this.Increment} onClick={this.switchColor} ><h2 class="text">Click Button to Change Color</h2></button> 
    </div>
  );
}
}


export default Reactbox;
