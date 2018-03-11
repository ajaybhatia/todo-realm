import React from 'react';
import { RealmProvider } from 'react-native-realm';

import realm from '../utils/Realm';
import PersonForm from '../components/PersonForm';

class Home extends React.Component {
  state = {
    isLoading: true,
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({ isLoading: false });
  }

  render() {
    if(this.state.isLoading) {
      return (<Expo.AppLoading />);
    } else {
      return (
        <RealmProvider realm={realm}>
          <PersonForm />
        </RealmProvider>
      );
    }
  }
}

export default Home;
