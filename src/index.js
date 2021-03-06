import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import "./sass/index.scss";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import { rootReducer } from './Reducers/index';

const store = createStore(rootReducer, composeWithDevTools());

const router = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(router, document.getElementById('root'));

serviceWorker.unregister();
