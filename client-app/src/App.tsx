import React, { Component } from "react";
import "./App.css";
import { Header, Icon, List } from "semantic-ui-react";
import axios from "axios";

class App extends Component {
  state = {
    values: [],
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/values").then((response) => {
      console.log(response);
      this.setState({
        values: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <Header as="h2">
          <Icon name="user" />
          <Header.Content>Baru</Header.Content>
        </Header>
          <List>
          {this.state.values.map((values: any) => (
          <List.Item  key={values.id}>{values.name}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
