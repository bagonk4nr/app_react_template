import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { View } from 'react-native';
import ApiMenu from '../_services/ApiMenu';
import ApiNavBarHeader from '../_services/ApiNavBarHeader';
import ApiNavBarBottom from '../_services/ApiNavbarBottom';


class Index extends React.Component {


    render = () => {
        return ( <
            View style = {
                { flex: 1 }
            } >
            <div className="container  pa0 flex justify-center">

            <
            ApiNavBarHeader / >

            <
            ApiMenu / >

            <
            ApiNavBarBottom / >

            </div>

            <
            /View>
        );
    }
}

export default Index;