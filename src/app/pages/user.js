import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { View } from 'react-native';
import { Link } from 'react-router-dom';

export class AutoIndex extends React.Component {
  render = () => {
    return (
      <View>
        <div>
          hohoho
        </div>
        <button>
        <Link to={{pathname: "/", state: {url: "home"}}} className="dropdown-item" key={7 * (1+6)} > Home </Link>
        </button>
      </View>
   );
  }

}

export default AutoIndex;
