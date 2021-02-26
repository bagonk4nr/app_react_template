import * as React from 'react';
import { View } from 'react-native';
// import NavBar from  './_incl/navbar';
import Index from './pages/Index';
// import './_incl/footer';
// import Heading from './heading/heading';

class Home extends React.Component {

    render() {
        return ( <
            View style = {
                { flex: 1 }
            } >

            <
            Index / >
            <
            /View>
        );
    }
}

export default Home;