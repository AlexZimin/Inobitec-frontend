import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TreeView from './components/treeView/TreeView';
import NodeDetails from './components/nodeDetails/NodeDetails';
import AddDeleteButtons from './components/AddDeleteButton/AddDeleteButtons';

function App () {
    return (
        <div className="App-content">
          <TreeView/>
          <AddDeleteButtons/>
          <NodeDetails/>
        </div>
    );
  }


export default App;