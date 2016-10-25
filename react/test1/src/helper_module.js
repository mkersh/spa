import React from 'react';
import * as d3 from "d3";

var curBG = "white"

// ES6 class syntax; 'export' makes this symbol public
export class PersonComponent extends React.Component {
  fadeBG() {
  	//console.log("Fade pressed")
  	//console.log(d3)
  	switch (curBG){
  		case "white":
  			curBG = "black"
  			break;
		default: 
			curBG = "white"
  	}
  	d3.select("body").transition().style("background-color", curBG);
  	
  }
  render() {
    return (
      <div>
      <h1>First REACT test</h1>
      <div>
        <div>Name: {this.props.myName}</div>
        <div>Age: {this.props.myAge}</div>
        <div>Sex: {this.props.sex}</div>
      </div>
      <button onClick={this.fadeBG}>Fade BG</button>
      </div>
    );
  }
}

