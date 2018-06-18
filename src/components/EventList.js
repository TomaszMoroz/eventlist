import React, { Component } from 'react';
import Event from './Event';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';



class EventList extends Component{
    


    render(){
        const items = this.props.events.map((event, index)=><Event 
            key={index} 
            index={index}
            event={event}
            />)

        return(
            <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={700}
            transitionEnterTimeout={700}
            transitionLeaveTimeout={700}>
  
            {items}
          </ReactCSSTransitionGroup>
        
        );
    }
}

export default EventList