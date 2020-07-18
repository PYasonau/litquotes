import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import connect from '@vkontakte/vkui-connect';
import './index.css';

connect.send('VKWebAppInit', {});

ReactDOM.render(<App />, document.getElementById('root'));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
