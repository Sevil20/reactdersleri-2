 import React, { Component } from 'react'
 
class Wine extends Component {
   render() {
     return (
      <div style={{color:'blueviolet',marginLeft:'500px',fontSize:'30px',padding:'20px'}}>
          <p>Title:  {this.props.title}</p>
          <p>Description:  {this.props.description}</p>
          <p>Rating:  {this.props.rating}</p>
        </div>
     )
   }
 }
 export default Wine