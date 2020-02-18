import React, {Component} from 'react';
import Users from './Users';
import {FetchUser} from '../actions/UserActions'
import{connect} from 'react-redux'
  class App extends Component{
    render(){
      return(
        <div>
          <Users/>
        </div>
      )
    }
  }

export default App;
