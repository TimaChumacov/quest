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
  }

  clearUp () {
    this.setState({modalActive: false});
    this.setState({wasUnlocked: false});
  }

  setModalActive = bool => {
    this.setState({modalActive: bool})
  }

  input = e => {
    if(e.target.value === this.props.pin)
    {
      this.setState({wasUnlocked: true})
    }
  }

  render () 
  {
    return (
      <div className="Station1 Station">
        <h1>{this.props.h1}</h1>
        <div className="pic">карта с локацией станции</div>
        <h2 onClick = {() => this.setModalActive(true)}>Следущая станция</h2>
        <Modal active = {this.state.modalActive} setActive = {this.setModalActive}>
          <input placeholder="____" onChange={(e) => this.input(e)} type = "number"/>
          <p>Между станиями можно передвигатся написав пароль. Пароль Святу скажет тот кто его встретит. Это всё для того чтоб он знал только след станцию а не все сразу. А так, ему по одной будет открыватся станция. Кстати пароль {this.props.pin}</p>
          <Link onClick = {this.clearUp} className = {this.state.wasUnlocked ? "Link active" : "Link"} to = {this.props.nextLink}><h1>К второй станции!</h1></Link>
        </Modal>
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