import React from 'react';
import {View, Text} from 'react-native';

const URL =
  'https://www.maiia.com/api/pat-public/hcd?limit=500&locality=75001-PARIS&page=0&speciality.shortName=pharmacie';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: [], totalLoaded: 0};
    this.isMount = null;
  }

  componentDidMount() {
    this.isMount = true;

    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        this.setState({data: json.items});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.data.length !== prevState.data.length) {
      this.setState({totalLoaded: this.state.data.length});
    }
  }

  componentWillUnmount() {
    this.isMount = false;
  }

  render() {
    return (
      <View>
        <Text>Nombre de résultat :</Text>
        <Text>{this.state.totalLoaded}</Text>
        {this.state.data.map((item) => (
          <Text>{item.center.name}</Text>
        ))}
      </View>
    );
  }
}

export default Page;
