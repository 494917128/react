import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MyRouter from './router';
import store from './store';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render((
<Provider store={store}>
	<MyRouter></MyRouter>
</Provider>
), document.getElementById('root'));
registerServiceWorker();
