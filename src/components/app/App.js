import React, { Component } from "react";
import List from "../list/list";
import AddItem from "../additem/additem";
import "./App.css";
class App extends Component {

    state = {
        persons: [
            { id: 1, name: "ali", age: 20 },
            { id: 2, name: "ahmed", age: 22 },
            { id: 3, name: "ibrahim", age: 30 },
        ]
    }


     deleteitem=(id)=>{

        let array=[];
        this.state.persons.forEach(element => {
            if(element.id!=id){
                array.push(element)
            }
        });



        this.setState({
            persons:array
        })

    }


    additem=(name,age)=>{

      let  array=this.state.persons;
        array.push({id:Math.round(Math.random()*100000),name:name,age:age})
        this.setState({
            persons:array
        })

    }


    render() {

        return (<div className="container">

            <h1 className="headertodo">To Do List</h1>
            <List persons={this.state.persons} deleteitem={this.deleteitem} ></List>
            <br/>
            <AddItem additem={this.additem}></AddItem>
            
            </div>
        );


    }

}
    export default App;