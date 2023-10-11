// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Appのパスに注意
import './index.css'; // 必要に応じてスタイルもインポート

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
