import axios from 'axios';
const baseURL = "http://localhost:3001";

export const fetchingProductSuccess=products=>{
  return  {
  type: "FETCHPRODUCTSUCCESS",
  payload:products
}
};

export const fetchingProductFailure=error=>({
  type:"FETCHINGPRODUCTFAILURE",
  payload:error
})
const productSavedSuccess=()=>({
 type :"PRODUCTSAVEDSUCCESS"
})

const productSavedFail=()=>({
 type :"PRODUCTSAVEDFAIL"

})


export const storeProduct=(product)=>{
  return async dispatch=>{
  axios
     .post(baseURL+"/addproduct", product)
     .then((response) => {
       response=response.data;
       if(response.status===200){
         //saving was successful
      // this.setState({savedSuccess:1});
       dispatch(productSavedSuccess())
       dispatch(clearProductForm());
       }else{
         //error experienced
      // this.setState({savedSuccess:2});
      dispatch(productSavedFail());
       }

   }).catch(error => {
     //error experienced....update with error message
     dispatch(productSavedFail());
   });


}
}
 //clear add product form after a save
  const clearProductForm=()=>({
  type:"CLEARPRODUCTFORM"

})
 //handle product name field
export const  handleNameChange=(e)=>({
  type:"ADDPRODUCTNAME",
  payload:e.target.value
})
//handle product title field
export const handleTitleChange=(e)=>({
  type:"ADDPRODUCTTITLE",
  payload:e.target.value
});
//handle description field
export const handleDescriptionChange=(e)=>({
  type:"ADDDESCRIPTION",
  productDescription:e.target.value
});
//handle price field
export const handlePriceChange=(e)=>({
  type:"ADDPRICE",
  payload:e.target.value
});

//handle schedule checkboxes
export const handleCheckboxes=(e)=>({
  type:"ADDPRODUCTSCHEDULES",
  payload:e.target.value
})





export const fetchProducts=()=>{
  return async dispatch=>{

  axios.get(baseURL+"/products").then((response) => {
       response=response.data;
       if(response.status===200){
         //saving was successful

       dispatch ( fetchingProductSuccess(response.products));

       }else{
         //error experienced
       dispatch( fetchingProductFailure(response.message));
       }
     }).catch(error => {
       //error experienced....update with error message
       dispatch(fetchingProductFailure(error.message));
     });

}
}
