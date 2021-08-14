import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StartScreen from './StartScreen';
import Station from './Station';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path = '/st1' render = {(props) => (
          <Station pin = {"cat"} h1 = {"Начни день с кофейка!"} pic={"st1"} nextLink={"/st2"}/>
        )}/>
        <Route path = '/st2' render = {(props) => (
          <Station pin = {"mouse"} h1 = {"В доме кошки двойной сюрприз!"} pic={"st2"} nextLink={"/st3"}/>
        )}/>
        <Route path = '/st3' render = {(props) => (
          <Station pin = {"mini"} h1 = {"Вернись на базу и увидь сюрприз от мышки!"} pic={"st3"} nextLink={"/st4"}/>
        )}/>
        <Route path = '/st4' render = {(props) => (
          <Station pin = {"fan"} h1 = {"The Дядя подготовил мини купер для мега драйва!"} pic={"st4"} nextLink={"/st5"}/>
        )}/>
        <Route path = '/st5' render = {(props) => (
          <Station pin = {"eat"} h1 = {"And now, just BELIEVE YOU CAN FLYYYYY!"} pic={"st5"} nextLink={"/st6"}/>
        )}/>
        <Route path = '/st6' render = {(props) => (
          <Station pin = {"6666"} h1 = {"Финальный босс: ресторан сюрприз!"} pic={"st6"} nextLink={"/"}/>
        )}/>
        <Route exact path = '' component = {StartScreen}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
