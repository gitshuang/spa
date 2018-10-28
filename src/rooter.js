import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route, Link,Switch } from 'react-router-dom';
import App from './index/index.js';





ReactDOM.render((
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	), document.getElementById('app'));
