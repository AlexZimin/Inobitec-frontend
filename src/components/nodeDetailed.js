import { Component } from "react";

class NodeDetailed extends Component{
    
    constructor(props){
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    render(){
        return(
            <form>
                <label>
                    Name:
                    <input type='text'></input>
                </label>
                <br />
                <label>
                    IP:
                    <input type='text'></input>
                </label>
                <br />
                <label>
                    Port:
                    <input type='text'></input>
                </label>
                <br />
                <label>
                    Parent node (ID):
                    <input type='text'></input>
                </label>
            </form>
        )
    }
}
export default NodeDetailed;