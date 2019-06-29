import React from 'react';
import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';
export default class Home extends React.Component{
    state = {
        val : ''
    };
    render(){
        return (
            <div id='home'>
                <InputComponent setVal={(val) => this.setState({val})}/>
                <OutputComponent inputVal={this.state.val}/>
            </div>
        );
    }
}
