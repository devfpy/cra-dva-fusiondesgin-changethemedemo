import React from 'react';
import dva from 'dva';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Layout from './Layout';
import LayoutModel from './Models/Layout';
import ThemeModel from './Models/Theme';
import './App.scss';

const app = dva();
app.model(LayoutModel);
app.model(ThemeModel);
app.router(() => <Layout />);
app.start('#root');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
