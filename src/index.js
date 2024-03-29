import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style/style.less';
import './style/common.less';
import App from './router/App';
import * as serviceWorker from './serviceWorker';
import "echarts/echarts.all"
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
console.log(process.env.NODE_ENV)
