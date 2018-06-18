import React, { Component } from 'react';

class Event extends Component{
    render(){
        return(
            <div className="Task">
                {this.props.event.msg}
                { this.props.index + 1}
            </div>
        );
    }
}

export default Event