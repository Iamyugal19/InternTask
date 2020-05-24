import React, { Component } from 'react';
import classes from './SearchBar.module.css'

class SearchBar extends Component{
    state = {
        suggestion: ' ',
        text: ' '
    }
    
    onChangeHandler  = (e) => {
            const value = e.target.value;
            console.log(value);
            this.setState({text: value});
            let suggestion = " ";
            if(value > 0 && value  <= this.props.data.length){
                suggestion = this.props.data[value-1].name;
            }else if(value > this.props.data.length){
                suggestion = "Not Found";
            }
            this.setState({suggestion: suggestion});
    }    
    renderSuggestion = () => {
        const {suggestion} = this.state;
        if(suggestion === " "){
            return null;
        }
        else if(suggestion === 'Not Found'){
            return "Not Found" ;
        }
        else{
            return suggestion;
        }
    }
    render(){
        return(
            <div className = {classes.SearchBar}>
            <form autoComplete="on">
            <div className={classes.autocomplete}>
            <input  type="text" placeholder ="Enter Id" value = {this.state.text} onChange = {(e) => this.onChangeHandler(e)} className = {classes.Input}/>
                <div className = {classes.Suggestion} >{this.renderSuggestion()}</div>
            </div>
            </form>
            </div>
        );
    }
}

export default SearchBar;