import * as React from 'react';
import CheckIsInt from '../_lib/CheckIsInt';
import 'bootstrap/dist/css/bootstrap.css';
import './user.css';
// import 'jquery';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';


class User extends React.Component {
        dataMenu;
        valueFromJson;
        jmlhButton;
        newArr;

        checkIsInt = new CheckIsInt();

        constructor(props) {
            super(props);
            this.newArr = [];
            this.disabledButton = false;
            this.fetchMoreData = this.fetchMoreData.bind(this)
            this.handleChange = this.handleChange.bind(this);
            this.htmlMenu = this.htmlMenu.bind(this);
        }
        
        state = {
                items: Array.from({ length: 1 }),
                dataUHtml: '<>',
            };

        fetchMoreData = () => {
            // a fake async api call like which sends
            // 20 more records in 1.5 secs
            setTimeout(() => {
            this.setState({
                items: this.state.items.concat(Array.from({ length: 1 }))
            });
            }, 5000);
        };

        dataForMenu = (value) => {
            // console.log(value);
            // let result = value.find(o => o.name === 'data');
            // console.log(value.length);
            this.dataMenu = JSON.parse(JSON.stringify(value));
            // console.log(this.dataMenu[0].jmlhbutton);
            // this.jmlhButton = this.dataMenu[0].jmlhbutton; //tempat merubah jumlah Button
            // this.countMenu();

        }

        handleChange = (event) => {
            event.preventDefault();
            console.log(event)
            this.disabledButton = true;
            event.target.value = '';
            // console.log(event.target.value)
            
        }

        componentWillMount() {
            this.handleChange();
            this.htmlMenu();
            this.fetchMoreData();
        }

        componentDidUpdate = () => {
            this.handleChange();
            this.htmlMenu();
            this.fetchMoreData();
        }

        htmlMenu = () => {
                let k = 0;
                let f = 0;
                let t = 0;
                let s = 2;
                let d = 3;
                let dataHtml = [];
                var getHtml = [];
                let captions = '';
                let captions1 = '';
                var submenu = [];
                var submenu1 = [];
                // console.log(this.newArr);
                // console.log(this.newArr.length);

                    
                    dataHtml.push( <
                        div key = { 1 * (f + 3) }
                        className = "card boxphoto main" >  <
                        div className = "dropdown  front" >
                        <
                        img className = "img-thumbnail rounded-circle photo"
                         / > < i className = "fa fa-pencil pencil-bottom"
                         id = "dropdownMenuButton"
                        data-toggle = "dropdown"
                        aria-haspopup = "true"
                        aria-expanded = "false" > < /i> <
                        div className = "dropdown-menu"
                        aria-labelledby = "dropdownMenuButton" >
                        <
                        a className = "dropdown-item " data-toggle = "modal"
                        data-target = "#exampleModal" 
                        href = "#" > Upload < /a> <
                        a className = "dropdown-item"
                        href = "#" > Delete < /a> < /
                        div > < /div>< div className = "card-body"
                        key = { 3 * (f + 5) } > < /
                        div >
                        <
                        /div>
                    );

                    dataHtml.push(
                        <div className="box-bio"> 
                            <form>
                            <div className="form-group row">
                                <label htmlFor="bioEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" id="bioEmail" 
                                disabled={this.disabledButton}  
                                onClick={
                                    (e) => this.handleChange(e)
                                }
                                />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword" />
                                </div>
                            </div>
                            </form>
                        </div>
                    );

                    this.state.dataUHtml = dataHtml;

                    getHtml.push(
                        <div id="scrollableDiv" className="scrollable">
                        <InfiniteScroll
                        dataLength={this.state.items.length}
                        next={this.fetchMoreData}
                        inverse={true} //
                        hasMore={true}
                        loader={<h4>Loading...</h4>}
                        scrollableTarget="scrollableDiv"
                        >
                       
                        {this.state.items.map((i, index) => (
                            
                            this.state.dataUHtml.map( (dataElem, andex) => {
                               
                                if (andex === index) return dataElem;
                                else return dataElem;
                            })
                            
                        ))}
                    </InfiniteScroll>
                    </div>
                    );

                    getHtml.push( <
                        div className = "modal fade modal-backdrop"
                        id = "exampleModal" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
                        >
                        <
                        div className = "modal-dialog modal-dialog-centered "
                        role = "document" >
                        <
                        div className = "modal-header"
                         >
                        <
                        /div> <
                        div className = "modal-content" >
                        <
                        div className = "modal-body" >
                        <
                        form >
                        <
                        div className = "form-group" >
                        <
                        label
                        htmlFor = "exampleFormControlFile1" > Example file input < /label> <
                        input type = "file"
                        className = "form-control-file"
                        id = "exampleFormControlFile1" />
                        <
                        /div> < /
                        form > < /
                        div > < /
                        div > < /
                        div > <
                        /div>
                    );

                                            
                    return { getHtml };
        }
                    };

                    export default User;
