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
 import '../assets/css/app.css';
 import 'bootstrap/dist/css/bootstrap.css';

 class Routenya extends React.Component<any> {

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
     if (this.idTarget !== undefined && this.idTarget !== 'home') {

         const modl = this.idTarget;

         const mod = modl.replace("'", '');
         // let str1 = './pages/';
         // let fullStr = str1.concat(this.idTarget);

         const { AutoIndex } = require('./pages/' + mod);
         // const  { AutoIndex }
         // return <AutoIndex />;
         return (

               <AutoIndex />

           );

     } else if (this.idTarget === 'home' || this.idTarget === undefined) {

         return  (
           <Home />
       );


     }
   }

     render() {
       // console.log('uhuy render');
       return this._useFunc();
     }

 }

 const App = () => (

   <Router>
       <Switch>
         <Route exact path="/" component={withRouter(Routenya)} />
       </Switch>
   </Router>

 );

 export default App;
