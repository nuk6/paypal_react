import React from 'react';

export default class InputComponent extends React.Component{

    handleChange = (e) => {
        this.props.setVal(e.target.value);
    }

    render(){
        return(
            <div className='ioComp' id='inputComp'>
                <input id='inputDiv' spellCheck='false' className='displayClass' onChange={this.handleChange}/>
            </div>
        );
    }
}