import * as React from 'react';
import CheckIsInt from '../_lib/CheckIsInt';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import '@popperjs/core';
// import 'bootstrap/dist/js/bootstrap.bundle';
import { Dropdown } from 'react-bootstrap';
import '../../assets/css/app.css';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
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
            // console.log(this.dataMenu[0]);
            this.jmlhButton = this.dataMenu[0].jmlhbutton; //tempat merubah jumlah Button
            this.countMenu();

        }

        countMenu() {
            // console.log(this.dataMenu.length + ' dtmenu');
            let s = 0;
            for (let i = 0; i < this.dataMenu.length; i++) {
                // console.log(i + ' ioi');
                if (this.checkIsInt.isInt(i / this.jmlhButton) === 1) {
                    // console.log(i + ' - ' + s + ' iee1');
                    this.newArr[s] = i;
                    s++;
                } else {
                    // console.log(i + ' - ' + s + ' iee');
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


                            if (this.dataMenu[k].idsubmenu != null) {

                                submenu1.push( < Link to = {
                                        { pathname: "/", state: { url: this.dataMenu[k].links } }
                                    }
                                    className = "dropdown-item"
                                    key = { 7 * (k + 6) } > < i className = { this.dataMenu[k].icons } > < /i> { this.dataMenu[k].submenu } < /Link > );


                                if (this.dataMenu[k].idsubmenu != null && captions1 !== this.dataMenu[k].captions) {
                                    submenu.push( < Dropdown.Menu className = "dropdown-menu"
                                        key = { 6 * (k + d) } > { submenu1 } < /Dropdown.Menu>);
                                    }

                                }


                                // tslint:disable-next-line:max-line-length
                                if (this.dataMenu[k].idsubmenu != null && captions !== this.dataMenu[k].captions) {
                                    // console.log({submenu});
                                    btnx.push( < Dropdown key = { 5 * (k + d) } > < Dropdown.Toggle key = { 8 * (k + d) }
                                        className = "btnmenu" > < i className = { this.dataMenu[k].icon + " iconchangers" } > < /i> <div className="lineheight"> </div > { this.dataMenu[k].captions } { submenu } < /Dropdown.Toggle > < /Dropdown > );
                                    btnx.push( < span key = { 2 * (k + s) }
                                        className = "spaces" > < /span>  );
                                    }
                                    else if (this.dataMenu[k].idsubmenu == null) {

                                        btnx.push( < button key = { 3 * (k + 5) }
                                            className = "btnmenu"
                                            id = { this.dataMenu[k].links } > < i className = { this.dataMenu[k].icon + " iconchangers" } > < /i> { this.dataMenu[k].captions } < /button > );
                                        // btnx.push(<Link to='/users' className="btn btn-secondary" key={2 * (k+6)} >{ this.dataMenu[k].captions } </Link>);
                                        btnx.push( < span key = { 4 * (k + s) }
                                            className = "spaces" > < /span> );
                                        }
                                        captions = this.dataMenu[k].captions;
                                        if (this.checkIsInt.isInt(f / this.jmlhButton) === 1) {
                                            // console.log({ btnx });
                                            getHtml.push( < div key = { 1 * (f + 3) }
                                                className = "card rbodycorners" > < div className = "card-body"
                                                key = { 3 * (f + 5) } > < div className = "btn-group"
                                                key = { 5 * (f + 7) } > { btnx } < /div></div > < /div>);

                                                if (this.jmlhButton === 1) { this.jmlhButton = 2; }

                                                t = (this.newArr.length * this.jmlhButton);

                                            }
                                            else if ((t - this.newArr[a]) < this.jmlhButton && f === this.newArr[a]) {
                                                // console.log({ btnx });
                                                getHtml.push( < div key = { 2 * (f + 4) }
                                                    className = "card rbodycorners" > < div className = "card-body"
                                                    key = { 4 * (f + 6) } > < div className = "btn-group"
                                                    key = { 6 * (f + 9) } > { btnx } < /div></div > < /div>);

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

                            export default Menu;