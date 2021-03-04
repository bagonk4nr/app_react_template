import * as React from 'react';
import { View } from 'react-native';
import {
    Redirect,
    withRouter
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './login.css';

const inputParsers = {
    date(input) {
        const [month, day, year] = input.split('/');
        return `${year}-${month}-${day}`;
    },
    lowercase(input) {
        return input.toLowerCase();
    },
    number(input) {
        return parseFloat(input);
    },
};

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { username: '', password: '' };
    }

    handleChange = (event) => {
        event.preventDefault();
        // console.log(event)
        // console.log(event.target.value)
        // this.setState({
        //     [event.target.id]: event.target.value,
        //     [event.target.id]: event.target.value
        // });
    }

    handleSubmit(event) {
        event.preventDefault();
        // console.log(event.target);
        const form = event.target;
        const data = new FormData(form);
        // data.append(form);
        // console.log(data);
        // for (let name of data.keys()) {
        //     const input = form.elements[name];
        //     const parserName = input.dataset.parse;

        //     if (parserName) {
        //         // const parser = inputParsers[parserName];
        //         const parsedValue = data.get(name); // parser(data.get(name));
        //         data.set(name, parsedValue);
        //     }
        // }

        if (data !== null) {
            console.log('uhuuy');

            return this.props.history.push({
                pathname: '/',
                state: { url: 'home' }
            });

        }
    }

    render() {
        return ( <
            View style = {
                { flex: 1 }
            } >
            <
            div className = "centers" > <
            div className = "justify-content-center w-100 w-0 p-0 login-h" >
            <
            div className = "card" >
            <
            div className = "card-header" >
            <
            h3 > Sign In < /
            h3 > <
            div className = "d-flex justify-content-end social_icon " >
            <
            span > < i className = "fa fa-facebook-square" >
            <
            /i></span >
            <
            span > < i className = "fa fa-google-plus-square" > < /i>  < /span > <
            span > < i className = "fa fa-twitter-square" >
            <
            /i></span >
            <
            /div> < /
            div > <
            div className = "card-body" >
            <
            form onSubmit = {
                (e) => this.handleSubmit(e)

            }
            id = "login" >
            <
            div className = "input-group form-group w-100 h-100 p-0 w-0 h-0" >
            <
            div className = "input-group-prepend" >
            <
            span className = "input-group-text" > < i className = "fa fa-user" > < /i></span >
            <
            /div> <
            input type = "text"
            className = "form-control"
            placeholder = "username"
            id = "username"
            // value = { this.state.value }
            onChange = {
                (e) => this.handleChange(e)
            }
            required / >
            <
            /div> <
            div className = "input-group form-group w-100 h-100 p-0 w-0 h-0" >
            <
            div className = "input-group-prepend" >
            <
            span className = "input-group-text" > < i className = "fa fa-key" > < /i></span >
            <
            /div> <
            input type = "password"
            className = "form-control"
            placeholder = "password"
            id = "password"
            // value = { this.state.value }
            onChange = {
                (e) => this.handleChange(e)
            }
            required / >
            <
            /div> <
            div className = "row align-items-center remember w-100 h-100 p-0 w-0 h-0" >
            <
            input id = "rememberme"
            type = "checkbox" / > Remember Me <
            /div> <
            div className = "form-group" >
            <
            input type = "submit"
            id = "submit"
            value = "Login"
            className = "btn float-right login_btn" / > < /
            div > < /
            form > <
            /div> <
            div className = "card-footer" >
            <
            div className = "d-flex justify-content-center links w-100 h-100 p-0 w-0 h-0" >
            Dont have an account ?
            <
            a href = "#" > Sign Up < /a>  < /
            div > <
            div className = "d-flex justify-content-center" >
            <
            a href = "#" > Forgot your password ? < /a>  < /
            div > <
            /div>  < /
            div > < /
            div >
            <
            /div>  < /
            View >
        );
    }
}

export default withRouter(Login);