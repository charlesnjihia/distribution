import React, { Component } from "react";
import Product from "./Product";
import PropTypes from "prop-types";
import axios from 'axios';
const baseURL = "http://localhost:3001";

class  Products extends Component {

state={
products:[],
fetcherror:false;



}

//fetch schedules on starting
componentDidMount() {
  axios.get(baseURL+"/products").then((response) => {
       response=response.data;
       if(response.status===200){
         //saving was successful

       this.setState({products:response.products});

       }else{
         //error experienced
         this.setState({fetcherror:true});
       
       }
     }).catch(error => {
       //error experienced....update with error message
        this.setState({fetcherror:true});

     });


 }

 render(){
  return(
     <div className="testbox">
     <form>
     <h3>Available Products</h3>
      <hr/>

     {this.state.products.map((product,index)=>

     <Product key={index} product={product}/>



     )}

   </form>
     </div>

  );

 }


}
export default Products;
