/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter
} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import '../assets/css/app.css';
import 'bootstrap/dist/css/bootstrap.css';
// import 'jquery';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle';
import { View } from 'react-native';

class Routenya extends React.Component < any > {

    idTarget: any;

    constructor(props) {
        super(props);
        // console.log(this.idTarget);
    }


    _useFunc = () => {

        if (this.props.location.state !== undefined) {
            this.idTarget = this.props.location.state.url;
        }
        console.log(this.idTarget);
        if (this.idTarget !== undefined && this.idTarget !== 'home' && this.idTarget !== 'login') {

            const modl = this.idTarget;

            const mod = modl.replace("'", '');
            // let str1 = './pages/';
            // let fullStr = str1.concat(this.idTarget);

            const { AutoIndex } = require('./pages/' + mod);
            // const  { AutoIndex }
            // return <AutoIndex />;
            return ( <
                React.StrictMode >
                <
                View style = {
                    { flex: 1 }
                } >
                <div className="container  pa0 flex justify-center">
                <
                AutoIndex / >
                </div>
                <
                /View> </
                React.StrictMode >
            );

        } else if (this.idTarget === 'home') {

            return ( < React.StrictMode >
                <
                View style = {
                    { flex: 1 }
                } > <div className="container  pa0 flex justify-center"> < Home / > </div> < /View> < /React.StrictMode >
            );


        } else {
            localStorage.clear();
            return ( < React.StrictMode >
                <
                View style = {
                    { flex: 1 }
                } >
                <div className="container  pa0 flex justify-center">
                <
                Login / >
                </div>
                < /View>
                <
                /React.StrictMode >
            );
        }
    }

    render() {
        // console.log('uhuy render');
        return this._useFunc();
    }

}

const App = () => (

    <
    Router >
    <
    Switch >
    <
    Route exact path = "/"
    component = { withRouter(Routenya) }
    /> < /
    Switch > <
    /Router>

);

export default App;