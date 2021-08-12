import React, { Component} from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {handleStoreSchedule, handleScheduleNameChange,handleDurationChange,handleFrequencyChange } from '../redux/actions/scheduleActions';

import axios from 'axios';
const baseURL = "http://localhost:3001";

class AddSchedule extends Component {


    //handle add schedule onSubmit

    handleAddSchedule=(e)=>{
      e.preventDefault();
      let newSchedule={
        schedulename:this.props.scheds.scheduleName,
        frequency:this.props.scheds.frequencyValue,
        duration:this.props.scheds.scheduleDuration
      }
      //persist the schedule to the schedule to db on server
       this.props.handleStoreSchedule(newSchedule);


     }


  render(){
      var message="";
      if(this.props.scheds.savedSuccess===1){
        message=<span> Saved Successfully</span>;
      }
      if(this.props.scheds.savedSuccess===2){
        message=<span>Failed.try again</span>;
      }


  return (
    <form action="/" onSubmit={this.handleAddSchedule}>
      <h3>Add Schedule</h3>
      <center>{message}</center>
      <h4>Schedule Name:<span>*</span></h4>
      <input type="text" value={this.props.scheds.scheduleName} onChange={this.props.handleScheduleNameChange}/>
      <h4>Frequency:</h4>
      <select onChange={this.props.handleFrequencyChange}>
      <option>---</option>
      {
        this.props.scheds.frequency.map((freq)=>
         freq.value===
         this.props.scheds.frequencyValue ? (
         <option value={freq.name} selected="selected" >{freq.name}</option>
       ):(
        <option value={freq.name} >{freq.name}</option>
       )



       )

      }


      </select>
      <h4>Duration</h4>
      <input type="text" value={this.props.scheds.scheduleDuration} onChange={this.props.handleDurationChange}/>
      <div className="btn-block">
        <button type="submit" href="/">Add Schedule</button>
      </div>
    </form>

   );
  }

}

const mapStateToProps=state=>{
  return{
    scheds:state.scheduleReducer
  };

}

  export default connect (mapStateToProps,{handleStoreSchedule,handleScheduleNameChange,handleDurationChange,handleFrequencyChange})(AddSchedule);
