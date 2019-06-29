import React from 'react';


const parser = {
    getTaggedJsx : function(val){
        let result = val;
        if(/^[A-Z]+[a-zA-Z]*/.test(val)) 
            result = <strong>{val}</strong>;
        else if(/^(http(s?)):(\/{2})[a-z]+.[a-z]{2,}/.test(val)) { 
            val = val.replace(/^(http(s?)):(\/{2})/,'');
            result = <a href={val}>{val}</a>;
        } else if(/^@[a-zA-Z]+[a-zA-Z0-9]*/.test(val)){
            val = val.replace('@','');
            result = <a className='twitter' href={`twitter.com/${val}`}>{val}</a>;
        }
        return result;
    },

    doParse : function(val){
        let li = [];
        val.split(/[\s]+/).forEach(element => {
            li.push(<span className='words-span'>{this.getTaggedJsx(element)}</span>);
        });
        return li;
    }

};

export default parser;