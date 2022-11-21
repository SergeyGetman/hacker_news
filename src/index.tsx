import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store';
import {BrowserHistory, createBrowserHistory} from "history";
import {Router} from "react-router-dom";


const history: BrowserHistory = createBrowserHistory()

export interface DefaultValue {
  name: string;
  age: number;
  sex: string;
  summary: Object;
  country:? string[];
  city:? Array<Object>;
  namesImages:? Array<Object>;

}

const objName: DefaultValue = {
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

    <Router history={history}>
    <Provider store={store} >
      <App props={objName}/>
    </Provider>
    </Router>,
  document.getElementById('root')
);

