import React, { Component } from "react";
import "../App.css";
import { connect } from 'react-redux';
import fetchWeather from '../action/index'
import {bindActionCreators} from 'redux';
import Search from '@material-ui/icons/Search';
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term:''
    };
  }
  onInputChange = event => {
    console.log(this.state.term)  
    this.setState({term:event.target.value});
      
  };
  onInputSubmit=event=>{
    console.log(this)
      event.preventDefault();
      this.props.fetchWeather(this.state.term);
      this.setState({term:''});
  }
  render() {
    return (
      <form onSubmit={this.onInputSubmit}>
        <div className="search">
        <input className="form-control input-sm" value={this.state.term} id="inputsm" type="text" placeholder="Enter the name of the city to get the forecast" onChange={this.onInputChange} />
          <span>
          <input type="submit" className="btn btn-info btn" value="Submit"/>
          </span>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( {fetchWeather},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);