import React from 'react';
import ReactDOM from 'react-dom';

//Import Components
import App from './src/components/component.app.js'

//Import style
import './src/styles/index.css';

class Root extends React.Component {
    constructor(props){
        super(props);   
    }
    render() {
        return(
            <div className='parent'>
                <pre>Hi!, I am Root [Parent] Component</pre>
               <App className='app'/>
            </div>
        );
    }
}

ReactDOM.render(
    <Root/>,
    document.querySelector('#root')
);