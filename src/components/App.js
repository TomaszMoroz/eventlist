import React, { Component } from 'react';
import '../App.css';
import Input from './Input';
import EventList from './EventList';


class App extends Component {
  state={
    events: []
}

handleAdd = () => {
 const newTask = {msg: "Event number "}
 const events = this.state.events
 events.push(newTask)
 this.setState({
   events
 })
  
}

handleRemoveLast = () => {
  const events = this.state.events
  events.pop()
  this.setState({
    events
  })
}

handleClearAll = () => {
  const events = this.state.events
  events.length = 0
  this.setState({
    events
  })
}

  render() {
    return (
      <div className="App">
        <Input 
        state={this.state} 
        handleAdd={this.handleAdd}
        handleRemoveLast={this.handleRemoveLast}
        handleClearAll={this.handleClearAll}
        />
        <EventList events={this.state.events}/>
        
      </div>
    );
  }
}

export default App;
