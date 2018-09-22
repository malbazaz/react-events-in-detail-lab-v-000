// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {
  constructor(prop){
  onReceiveCoordinates: prop
}
render(){
  return (
    <button onClick = {this.onReceiveCoordinates}>Hello</button>
  )
}
}

