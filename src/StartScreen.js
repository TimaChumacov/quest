
import './App.css';
import {Link} from 'react-router-dom';

function StartScreen() {
  return (
    <div className="StartScreen">
       <Link className = "Link" to = "/st1"><h1>Начать Квест!</h1></Link>
    </div>
  );
}

export default StartScreen;
//<div>Свят, если ты это читаешь, ради тебя самого выключи, тебе нельзя видеть что тут будет. А вот остальным привет</div>