import React, { Component } from "react";
import "./additem.css"
class AddItem extends Component{

    state={

        name:"",
        age:""
    }
     changevalue=(e)=>{

        this.setState({[e.target.id]:e.target.value})
    }

    render(){

        return (<div className="additem-container">


                    <input placeholder="Enter Name" className="input-field" onChange={this.changevalue} id="name"/>
                    <input placeholder="Enter The Age" className="input-field" onChange={this.changevalue} id="age"/>
                    <button className="button-todo" onClick={this.props.additem.bind(this,this.state.name,this.state.age)}>Add Item</button>
                
                
                
                </div>);
    
    }
    


}




export default AddItem;