import axios from 'axios';
const baseURL = "http://localhost:3001";


 const fetchingScheduleSuccess=schedules=>{
  return  {
  type: "FETCHSCHEDULESSUCCESS",
  payload:schedules
}
};

 const fetchingScheduleFailure=error=>({
  type:"FETCHSCHEDULESFAILURE",
  payload:error
})

//handle schedule name fields
export const handleScheduleNameChange=(e)=>({
  type:"ADDSCHEDULENAME",
  payload:e.target.value
});
//handle schedule duration field
export const handleDurationChange=(e)=>({
  type:"ADDDURATION",
  payload:e.target.value
});
//handle frequency select button
export const handleFrequencyChange=(e)=> ({
  type:"ADDFREQUENCY",
  payload:e.target.value
});
const scheduleSavedSuccess=()=>({
  type:"SCHEDULESAVEDSUCCESS"
})
const scheduleSavedFail=()=>({
  type:"SCHEDULESAVEDFAIL"
})

//clear form after saving
const clearScheduleForm=()=>({
  type:"CLEARSCHEDULEFORM"
})


// save schedule to the server
export const handleStoreSchedule=(schedule)=>{
  return async dispatch=>{
  axios
     .post(baseURL+"/addschedule", schedule)
     .then((response) => {
       response=response.data;
       if(response.status===200){
         //saving was successful

       dispatch(scheduleSavedSuccess())
       dispatch(clearScheduleForm());
       }else{
         //error experienced
    
      dispatch(scheduleSavedFail());
       }

   }).catch(error => {
     //error experienced....update with error message
     dispatch(scheduleSavedFail());
   });


}
}



export const fetchSchedules=()=>{
  return async dispatch=>{

  axios.get(baseURL+"/schedules").then((response) => {
       response=response.data;
       if(response.status===200){
         //saving was successful

       dispatch ( fetchingScheduleSuccess(response.schedules));

       }else{
         //error experienced
       dispatch( fetchingScheduleFailure(response.message));
       }
     }).catch(error => {
       //error experienced....update with error message
       dispatch(fetchingScheduleFailure(error.message));
     });

}
}
