import React, {Component} from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  state ={
    values : []
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/values')
    .then((response) =>{
      console.log(response);
      this.setState({
        values: response.data
      })
    })  
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            {this.state.values.map((values:any) =>(
              <li key={values.id}>{values.name}</li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
 
}

export default App;
