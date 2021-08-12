
let initialState={
  frequency:[
    {
     value:1,
     name:"Weekly"
    },
    {
     value:2,
     name:"Bi-Weekly"
    },
    {
     value:4,
     name:"Monthly"
    }
  ],
  frequencyValue:"",
  scheduleName:"",
  scheduleDuration:"",
  schedules:[],
  savedSuccess:0
}

const scheduleReducer=(state=initialState,action)=>{
  switch(action.type){
    case "FETCHSCHEDULESSUCCESS":
       return {...state,schedules:action.payload }
    case "ADDSCHEDULENAME":
       return {...state,scheduleName:action.payload}
    case "ADDDURATION":
        return {...state, scheduleDuration:action.payload}
    case "ADDFREQUENCY":
        return {...state,frequencyValue:action.payload}
    case "CLEARSCHEDULEFORM":
        return {...state,scheduleName:"",frequencyValue:"",scheduleDuration:""}
    case "SCHEDULESAVEDSUCCESS":
        return {...state,savedSuccess:1}
    case "SCHEDULESAVEDFAIL" :
        return {...state, savedSuccess:2}

    default:
       return state;
  }
}
export default scheduleReducer;
