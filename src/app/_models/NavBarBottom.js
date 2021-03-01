import * as React from 'react';
import CheckIsInt from '../_lib/CheckIsInt';
import 'bootstrap/dist/css/bootstrap.css';
// import 'jquery';
// import '@popperjs/core';
// import 'bootstrap/dist/js/bootstrap.bundle';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbarbottom.css';
import '../../assets/lineawesome/css/line-awesome.css';

class NavBarBottom extends React.Component {
        dataMenu;
        valueFromJson;
        jmlhButton;
        newArr;

        checkIsInt = new CheckIsInt();

        constructor(props) {
            super(props);
            this.newArr = [];
        }

        dataForMenu = (value) => {
            // console.log(value);
            // let result = value.find(o => o.name === 'data');
            // console.log(value.length);
            this.dataMenu = JSON.parse(JSON.stringify(value));
            // console.log(this.dataMenu[0].jmlhbutton);
            this.jmlhButton = this.dataMenu[0].jmlhbutton; //tempat merubah jumlah Button
            this.countMenu();

        }

        countMenu() {
            // console.log(this.dataMenu.length + ' dtmenu');
            let s = 0;
            for (let i = 0; i < this.dataMenu.length; i++) {
                // console.log(i + ' ioi');
                if (this.checkIsInt.isInt(i / this.jmlhButton) === 1) {
                    // console.log(i + '-' + s + ' iee1');
                    this.newArr[s] = i;
                    s++;
                } else {
                    // console.log(i + '-' + s + ' iee');
                    this.newArr[s] = i;

                }
            }

            return this.newArr;
        }

        htmlMenu = () => {
                let k = 0;
                let f = 0;
                let t = 0;
                let s = 2;
                let d = 3;
                var btnx = [];
                var getHtml = [];
                let captions = '';
                let captions1 = '';
                var submenu = [];
                var submenu1 = [];
                // console.log(this.newArr);
                // console.log(this.newArr.length);
                for (let a = 0; a < this.newArr.length; a++) {

                    for (let b = 0; b < this.dataMenu.length; b++) {

                        if (k >= this.newArr[a]) {
                            f = k;
                        } else {
                            f = b;
                        }
                        s++;
                        d++;
                        if (f <= this.newArr[a]) {
                            // console.log(this.dataMenu[k]);
                            if (this.dataMenu[k].idsubnavbarheader != null) {

                                submenu1.push( < Link to = {
                                        { pathname: "/", state: { url: this.dataMenu[k].links } }
                                    }
                                    className = "dropdown-item"
                                    key = { 7 * (k + 6) } > < i className = {
                                        this.dataMenu[k].icons
                                    } > < /i> { this.dataMenu[k].submenu } < /Link > );


                                if (this.dataMenu[k].idsubnavbarheader != null && captions1 !== this.dataMenu[k].captions) {
                                    submenu.push( < Dropdown.Menu className = "dropdown-menu no-color"
                                        key = { 6 * (k + d) } > { submenu1 } < /Dropdown.Menu > );
                                    }

                                }

                                // tslint:disable-next-line:max-line-length
                                if (this.dataMenu[k].idsubnavbarheader != null && captions !== this.dataMenu[k].captions) {
                                    // console.log({submenu});
                                    btnx.push( < Dropdown key = { 5 * (k + d) }
                                            className = "no-color" > < Dropdown.Toggle key = { 8 * (k + d) }
                                            // variant = "info"
                                            className = "btn-bottom no-color" >
                                            <
                                            i className = {
                                                this.dataMenu[k].icon + " iconchangers"
                                            } > < /i> { submenu } </
                                            Dropdown.Toggle > < / Dropdown> );
                                            if (this.jmlhButton === 3) {
                                                btnx.push( < span key = { 4 * (k + s) }
                                                    className = "spaces3" > < /span>);
                                                }
                                                else if (this.jmlhButton === 3) {
                                                    btnx.push( < span key = { 4 * (k + s) }
                                                        className = "spaces4" > < /span>);
                                                    }
                                                    else if (this.jmlhButton === 3) {
                                                        btnx.push( < span key = { 4 * (k + s) }
                                                            className = "spaces5" > < /span>);
                                                        }
                                                        else if (this.jmlhButton === 3) {
                                                            btnx.push( < span key = { 4 * (k + s) }
                                                                className = "spaces6" > < /span>);
                                                            }
                                                        } else if (this.dataMenu[k].idsubnavbarheader == null) {
                                                            btnx.push( < Link key = { 3 * (k + 5) }
                                                                className = "btn btn-bottom no-color"
                                                                to = { this.dataMenu[k].links } > < i className = { this.dataMenu[k].icon + " iconchangers" } > < /i> < /
                                                                Link > );
                                                            // btnx.push(<Link to='/users' className="btn btn-secondary" key={2 * (k+6)} >{ this.dataMenu[k].captions } </Link>);
                                                            if (this.jmlhButton === 3) {
                                                                btnx.push( < span key = { 4 * (k + s) }
                                                                    className = "spaces3" > < /span>);
                                                                }
                                                                else if (this.jmlhButton === 3) {
                                                                    btnx.push( < span key = { 4 * (k + s) }
                                                                        className = "spaces4" > < /span>);
                                                                    }
                                                                    else if (this.jmlhButton === 3) {
                                                                        btnx.push( < span key = { 4 * (k + s) }
                                                                            className = "spaces5" > < /span>);
                                                                        }
                                                                        else if (this.jmlhButton === 3) {
                                                                            btnx.push( < span key = { 4 * (k + s) }
                                                                                className = "spaces6" > < /span>);
                                                                            }
                                                                        }
                                                                        captions = this.dataMenu[k].captions;
                                                                        if (this.checkIsInt.isInt(f / this.jmlhButton) === 1) {
                                                                            // console.log({ btnx });
                                                                            getHtml.push( <
                                                                                nav className = "navbar fixed-bottom navbar-expand-lg navbar-light bg-bottom main" > { btnx } < /nav>
                                                                            );

                                                                            if (this.jmlhButton === 1) { this.jmlhButton = 2; }

                                                                            t = (this.newArr.length * this.jmlhButton);

                                                                        } else if ((t - this.newArr[a]) < this.jmlhButton && f === this.newArr[a]) {
                                                                            // console.log({ btnx });
                                                                            getHtml.push( <
                                                                                nav className = "navbar fixed-bottom navbar-expand-lg navbar-light bg-bottom main" > { btnx } < /nav>
                                                                            );

                                                                        }
                                                                        k++;
                                                                    }
                                                                }

                                                            }

                                                            // console.log({ btnx });
                                                            // console.log({ getHtml });
                                                            return { getHtml };
                                                        }
                                                    }

                                                    export default NavBarBottom;