import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './redux/store';
import {createBrowserHistory} from "history";
import {Router} from "react-router-dom";


const history = createBrowserHistory()

const objName = {
  name : "Sergo",
  age : 33,
  sex : 'man',
  summary : {
    point : 1,
    jobs : true,
    experience : "2 year old"

  },
  country : ['Africa', 'Ukraine', 'Afganistan'],
  city : ['Sumy', 'Lebedin', 'Ahturka', 'Bezdrik'],

  namesImages : [{name : "Bando"}, {name : "Lando"}, {name : "Condo"}, {name : "Bastad"}]

}


ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
    <Provider store={store} >
      <App props={objName}/>
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
