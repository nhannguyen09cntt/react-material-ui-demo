import React, { Component } from 'react';
import LeftPanel from './components/left-panel/LeftPanel';
import BodyPanel from './components/body-panel/BodyPanel';
 
class App extends Component {
    render() {
        return (
            <div className="App">
                <LeftPanel></LeftPanel>
                <BodyPanel></BodyPanel>
            </div>
        );
    }
}
 
export default App;
