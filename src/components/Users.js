import React,{Component} from 'react';
import {FetchUser} from '../actions/UserActions';
import {connect} from 'react-redux'
class Users extends Component{
  componentDidMount(){
    this.props.FetchUser()
  }
  render(){
    return(
      <div>{this.props.user}</div>
    )
  }
}
const MapStateToProps=(state)=>{
  return {
    user:state.userReducer.user
  }
}
const MapDispatchToProps=(dispatch)=>{
  return{
    FetchUser:()=>{
      dispatch(FetchUser())
    }
  }
}
export default Users = connect(MapStateToProps, MapDispatchToProps) (Users);
