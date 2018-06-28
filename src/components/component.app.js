import React from 'react';

export default class App extends React.Component {
    constructor(props){
        super(props);   
    }
    render() {
        return(
            <div className={this.props.className}>
               <pre>Hi!, I am App Component</pre>
            </div>
        );
    }
}