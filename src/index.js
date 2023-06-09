import React from 'react';  
import ReactDOM from 'react-dom/client';
import './assets/styles/common/main.scss';
import Main from './components/layout/main/Main';
import Login from './components/login/Login'
import { Provider } from 'react-redux';
import store from './redux/store/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <Provider store={store}>
    <Main/>
    {/* <Login/> */}
    </Provider>
</React.StrictMode>
);

