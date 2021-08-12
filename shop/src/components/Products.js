import React, { Component } from "react";
import Product from "./Product";
import PropTypes from "prop-types";
import {fetchProducts } from '../redux/actions/productActions';
import {connect} from 'react-redux';





class Products extends Component{

state={
products:[],


}

//fetch products on starting
componentDidMount() {
 this.props.fetchProducts();
}


 render(){

  console.log(this.props);
  return(
     <div className="testbox">
     <form>
     <h3>Available Products</h3>
      <hr/>

     {this.props.prods.products.map((product,index)=>

     <Product key={index} product={product}/>



     )}

   </form>
     </div>

  );

 }
}

const mapStateToProps=state=>{
  return{
    prods:state.productReducer
  };
}
export default connect(mapStateToProps,{fetchProducts} )(Products);
