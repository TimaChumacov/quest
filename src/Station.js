import React from "react";
import Modal from "./Modal"
import './App.css';
import {Link} from 'react-router-dom';
 
export default class Station extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.state =
    {
        modalActive: false,
        wasUnlocked: false
    }
    this.setModalActive = this.setModalActive.bind(this);
    this.clearUp = this.clearUp.bind(this);
    this.checkEnd = this.checkEnd.bind(this);
  }

  clearUp () {
    this.setState({modalActive: false});
    this.setState({wasUnlocked: false});
  }

  setModalActive = bool => {
    this.setState({modalActive: bool})
  }

  checkEnd(link) {
    if(link === "/")
    {
      return (
        <Link className = "Link" onClick = {this.clearUp} to = {this.props.nextLink}>
          <h1>{"<"}-- К началу квеста</h1>
        </Link>
      )
    } else 
    {
      return (
        <div>
        <h2 onClick = {() => this.setModalActive(true)}>Следущая станция -{">"}</h2>
        <Modal active = {this.state.modalActive} setActive = {this.setModalActive}>
          <input className = {this.state.wasUnlocked ? "disabled" : ""} onChange={(e) => this.input(e)} type = "text"/>
          <p>Между станиями можно передвигатся написав кодовое слово. Его мы тебе скажем только когда ты закончишь с предыдущей станцией :)</p>
          <Link onClick = {this.clearUp} className = {this.state.wasUnlocked ? "Link" : "Link disabled"} to = {this.props.nextLink}><h1>К следущей станции!</h1></Link>
        </Modal>
        </div>
      )
    }
  }

  input = e => {
    if(e.target.value === this.props.pin)
    {
      this.setState({wasUnlocked: true})
      e.target.value = ""
    }
  }

  render () 
  {
    return (
      <div className="Station1 Station">
        <div className="title"><h1>{this.props.h1}</h1></div>
        <div className={"pic "+this.props.pic}></div>
        {this.checkEnd(this.props.nextLink)}
      </div>
    );
  }
  
}
/*
<h3>{input}</h3>
        <div className="wrapp">
        <div onClick={() => {input += 1}} className="btn">1</div>
        </div>
*/