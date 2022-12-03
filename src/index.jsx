import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store';
import { createBrowserHistory } from "history";
import {Router} from "react-router-dom";


const history = createBrowserHistory()

ReactDOM.render(
    <Router history={history}>
    <Provider store={store} >
      <App props={[]}/>
    </Provider>
    </Router>,
  document.getElementById('root')
);

