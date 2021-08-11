import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StartScreen from './StartScreen';
import Station from './Station';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route path = '/st1' render = {(props) => (
          <Station pin = {4321} h1 = {"Станция фотика"} nextLink={"/st2"}/>
        )}/>
        <Route path = '/st2' render = {(props) => (
          <Station pin = {2345} h1 = {"Станция аймака"} nextLink={"/st3"}/>
        )}/>
        <Route path = '/st3' render = {(props) => (
          <Station pin = {8585} h1 = {"Станция приставки"} nextLink={"/st4"}/>
        )}/>
        <Route path = '/st4' render = {(props) => (
          <Station pin = {6666} h1 = {"Финальный ресторанчик"} nextLink={"/"}/>
        )}/>
        <Route exact path = '' component = {StartScreen}/>
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
