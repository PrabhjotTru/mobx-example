import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from "./TodoStore"
import TodoList from "./TodoList"

const app = document.getELementById("app")

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();


