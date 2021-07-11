import './App.css';
import Tree from '@naisutech/react-tree';
import { Component } from 'react';
import nodeService from './services/nodeService';
import NodeDetailed from './components/nodeDetailed';


function convertData(data) {
  const convertedData = [];
  console.log('Print data from func')
  console.log(data)
  for (let i=0; i<data.length; i++){
    const tmp = {
      "id": data[i].id,
      "parentId": data[i].parent_id,
      "label": data[i].name,
      "items": null
    }
    convertedData.push(tmp)
  }
  console.log(convertedData)
  return convertedData;
}

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
    const convData = convertData(items);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div style={{ display: 'flex', flexWrap: 'nowrap', flexGrow: 1 }}>
          <div style={{ width: '50%', display: 'flex',}}>
            <Tree nodes={convData} showEmptyItems size="half" theme={'light'}/>
          </div>
          <div>
            <NodeDetailed/>
          </div>
        </div>
      );
    }
  }
}

export default App;