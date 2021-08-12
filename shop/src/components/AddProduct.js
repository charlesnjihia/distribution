import React,{Component} from "react";
import PropTypes from "prop-types";
import {handleNameChange,handleTitleChange,handleDescriptionChange,handlePriceChange,handleCheckboxes,storeProduct} from '../redux/actions/productActions';
import { fetchSchedules } from '../redux/actions/scheduleActions';
import {connect} from 'react-redux';

class AddProduct extends Component {

  //fetch schedules on starting
  componentDidMount() {
    this.props.fetchSchedules();

   }

   //handle  add product form submit
   handleAddProduct=(e)=>{
     e.preventDefault();
     let schedules=[];
     for(let schedule of this.props.prods.productSchedules){
      schedules.push(JSON.parse(schedule));
     }
     var newProduct={
      name:this.props.prods.productName,
      title:this.props.prods.productTitle,
      description:this.props.prods.productDescription,
      unitprice:this.props.prods.productUnitPrice,
      schedules:schedules

     }
     //persist the product into the db
     this.props.storeProduct(newProduct);

   }


  render(){

     var message="";
     if(this.props.prods.savedSuccess===1){
       message=<span> Saved Successfully</span>;
     }
     if(this.props.prods.savedSuccess===2){
       message=<span>Failed.try again</span>;
     }

  return (
    <form action="/" onSubmit={this.handleAddProduct}>
      <h3>Add Product</h3>
      <center>{message}</center>
      <h4>Product Name:<span>*</span></h4>
      <input type="text" value={this.props.prods.productName} onChange={this.props.handleNameChange}/>
      <h4>Title:</h4>
      <input type="text" value={this.props.prods.productTitle} onChange={this.props.handleTitleChange}/>
      <h4>Description</h4>
      <textarea rows="5" value={this.props.prods.productDescription} onChange={this.props.handleDescriptionChange} > </textarea>
      <h4>Unit Price:</h4>
      <input type="text" value={this.props.prods.productUnitPrice} onChange={this.props.handlePriceChange}/>
       <h4>Select Schedules</h4>
     {this.props.scheds.schedules.map((schedule)=>
      <div className="title-block"><input  type="checkbox" value={JSON.stringify(schedule)} onChange={this.props.handleCheckboxes}/>{schedule.schedulename+":"+schedule.frequency+", duration "+schedule.duration}</div>

     )}


      <div className="btn-block">
        <button type="submit" href="/">Add Product</button>
      </div>
    </form>

   );
  }
}
const mapStateToProps=state=>{
  return{
    prods:state.productReducer,
    scheds:state.scheduleReducer
  };
}



  export default connect(mapStateToProps,{fetchSchedules,handleNameChange,handleTitleChange,handleDescriptionChange,handlePriceChange,handleCheckboxes,storeProduct}) (AddProduct);
