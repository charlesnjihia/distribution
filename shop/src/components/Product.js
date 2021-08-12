import React from "react";
import PropTypes from "prop-types";

function Product(props) {

return (
  <div >
  <b>Name:</b>  {props.product.name}<br/>
  <b>Title:</b>  {props.product.title}<br/>
  <b>Description:</b>  {props.product.description}<br/>
  <b>Unit price:</b>  {props.product.unitprice}<br/>
  <b>Schedules:</b> <br/>
      <ul>
       {
         props.product.schedules.map((schedule)=>
       <li> {schedule.schedulename+", "+schedule.frequency+" duration "+schedule.duration}</li>


       )}
      </ul>
  <hr/>
   </div>

);


}
Product.propTypes={
  product:PropTypes.object.isRequired

}
export default Product;
