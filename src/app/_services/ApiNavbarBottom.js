import NavBarBottom from '../_models/NavBarBottom';
import { api } from '../app.json';
import * as React from 'react';
import axios from 'axios';
import { withRouter, Redirect } from 'react-router-dom';

class ApiNavbarBottom extends React.Component {

        menus;
        apiUrl;
        ElementMenu;

        constructor(props) {
            super(props);
            this.apiUrl = 'http://192.168.100.100:8081/navbarbottom';
            this.menus = new NavBarBottom(this);
            this.state = {
                asyncData: < > < />};
                this.newArr = [];

            }

            getDataSelect = async() => {

                let dt = await new Promise((resolve, done) => {
                    axios.post(this.apiUrl, {})
                        .then(response => {
                            console.log(response.status + ' rsp');
                            if (response.status === 200) {
                                resolve(response.data);
                                // this.setGet._setData = response.data;
                                done();
                            }

                        });
                });
                console.log(dt);
                // this.menus = dt;
                return dt;
            };

            getData = async() => {
                let dt = await this.getDataSelect();
                // console.log(dt + ' getData');
                this.menus.dataForMenu(dt);
                const Elem = this.menus.htmlMenu();
                const reElem = Elem.getHtml;
                // console.log(this.menus.htmlMenu());
                return reElem;
            }

            FetchData = async() => {
                // if (this.setGet._getData === undefined) {
                this.ElementMenu = await this.getData();
                // console.log(dt + ' dataFetch');
                return this.ElementMenu;

            }

            async componentDidMount() {
                await this.dtMount();
            }

            dtMount = async() => {
                let asyncDatas = await this.FetchData();
                return this.setState({ asyncData: asyncDatas, });
            }



            render() {

                if (this.state.asyncData) {
                    return (
                        this.state.asyncData
                    );
                }
            }
        }

        export default withRouter(ApiNavbarBottom);