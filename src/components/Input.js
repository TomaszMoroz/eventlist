import React, { Component} from 'react';

class Input extends Component{



 

    render(){
        return(
            <div className="taskForm">
             <button className="btn-floating btn-large waves-effect waves-light green" onClick={this.props.handleAdd}>Add</button>
             <button className="waves-effect waves-light btn red" onClick={this.props.handleRemoveLast}>Remove</button>
             <button className="waves-effect waves-light btn red" onClick={this.props.handleClearAll}>Clear</button>
            
            </div>
        );
    }
}


export default Input