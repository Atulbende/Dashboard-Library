import React from 'react';  
import ReactDOM from 'react-dom/client';
import './assets/styles/common/main.scss';
import Main from './components/layout/main/Main';
import Login from './components/login/Login'
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import Loader from './components/common/loader/Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <Provider store={store}>
    {/* <Main/> */}
    <Login/>
    </Provider>
    <ToastContainer/>
    <Loader/>
</React.StrictMode>
);

