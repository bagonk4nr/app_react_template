import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { View } from 'react-native';
import ApiUser from '../_services/ApiUser';
import ApiNavBarHeader from '../_services/ApiNavBarHeader';
import ApiNavBarBottom from '../_services/ApiNavbarBottom';

export class AutoIndex extends React.Component {

  

  render = () => {
    return (
      <View style = {
        { flex: 1 }
    } >
        
        <div className="container">
        <
        ApiNavBarHeader / >
        
          <
        ApiUser / >
        
        <
        ApiNavBarBottom / >

        
        </div>
      </View>
   );
  }

}

export default AutoIndex;
