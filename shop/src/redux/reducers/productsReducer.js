
let  initialState={
products:[],
productName:"",
productTitle:"",
productDescription:"",
productUnitPrice:0,
savedSuccess:0,
productSchedules:[]
}
const productReducer=(state=initialState,action)=>{
    switch(action.type){
    case "FETCHPRODUCTSUCCESS":
        return {...state,products:action.payload }
    case "ADDPRODUCTNAME":
        return {...state,productName:action.payload}
    case "ADDPRODUCTTITLE":
        return {...state,productTitle:action.payload}
    case "ADDDESCRIPTION":
        return {...state,productDescription:action.payload}
    case "ADDPRICE":
        return {...state,productUnitPrice:action.payload}
    case "ADDPRODUCTSCHEDULES":
          let schedule=action.payload;
          let schedules= state.productSchedules;
          let index=schedules.indexOf(schedule);
          if(index<0){
            schedules.push(schedule);
          }else{
            schedules.splice(index,1);
          }
          return{...state,productSchedules:schedules}
    case "CLEARPRODUCTFORM":
        return {...state,productName:"",productTitle:"",productDescription:"",roductUnitPrice:0}
    case "PRODUCTSAVEDSUCCESS":
         return {...state,savedSuccess:1}
    case "PRODUCTSAVEDFAIL":
         return {...state,savedSuccess:2}
    default:
      return state;
  }
}
export default productReducer;
