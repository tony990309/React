import React from 'react';
import ReactDOM from "react-dom";

function Block(props){
    return(
       <div>
          <div>
             <p>這是放在top屬性的部分：</p>
             {props.top}
          </div>
          <div>
             <p>這是放在bottom屬性的部分：</p>
             {props.bottom}
          </div>
       </div>
    );
}
 
function Composition(){
    return(
        <div>
            <h1>Composition</h1>
            <Block
                top={ <h1>This is Header</h1> }
                bottom={ <p>這是內容</p> }
            />
            <hr />
        </div>
    );
}

export default Composition; 

class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Component</h1>
                <Block
                    top={ <h1>This is Header</h1> }
                    bottom={ <p>這是內容</p> }
                />
            </div>
        );
    }
} 

ReactDOM.render(<App />, document.getElementById("component"));