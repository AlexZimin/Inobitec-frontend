import './App.css';
import Tree from '@naisutech/react-tree';
import { Component } from 'react';
import nodeService from './services/nodeService';



class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  async componentDidMount() {
    await fetch("http://localhost:8080/api/node")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    console.log('Print items from didMount');
    console.log(this.state.items);
  }

  render() {
    const { error, isLoaded, items } = this.state;
    console.log('Print items from component');
    console.log(items);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default App;