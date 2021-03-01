import * as React from 'react';
import ApiMenu from '../_services/ApiMenu';
import ApiNavBarHeader from '../_services/ApiNavBarHeader';
import ApiNavBarBottom from '../_services/ApiNavbarBottom';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import '@popperjs/core';
import 'react-bootstrap';
import { View } from 'react-native';

class Index extends React.Component {


    render = () => {
        return ( <
            View style = {
                { flex: 1 }
            } >
            <
            ApiNavBarHeader / >
            <
            p > < /p > <
            ApiMenu / >
            <
            ApiNavBarBottom / >

            <
            /View>
        );
    }
}

export default Index;