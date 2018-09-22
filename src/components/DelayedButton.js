// Code DelayedButton Component Here
import React, {Component} from 'react'
export default class DelayedButton extends Component {
  constructor(funct, delaynumber){
    onDelayedClick: funct, 
    delay: delaynumber
  }
}