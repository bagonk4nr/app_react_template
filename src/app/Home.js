import * as React from 'react';
import { View } from 'react-native';
// import NavBar from  './_incl/navbar';
import Index from './pages/Index';
import 'bootstrap/dist/css/bootstrap.css';

class Home extends React.Component {

    render() {
        return ( <
            View style = {
                { flex: 1 }
            } >
            <div className="container pa0 flex justify-center">
            <
            Index / >
            </div>
            <
            /View>
        );
    }
}

export default Home;