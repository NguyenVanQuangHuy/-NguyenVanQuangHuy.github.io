import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

=======
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
>>>>>>> be836bb42ecf2490af0bc7a16adf19f28b0e1079
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Context from './Context';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>

    <Router>
      <Context>
        <App />
      </Context>
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
