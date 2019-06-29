import React from 'react';
import parser from './parser';
require('./Home.css');
export default class OutputComponent extends React.PureComponent{
    render(){
        let result = parser.doParse(this.props.inputVal);
        return(
            <div className='ioComp' id='outputComp'>
                <div className='displayClass'>
                    {result}
                </div>
            </div>
        );
    }
}