import React from "react";
import "../../assets/fontawesome/css/all.min.css"
import "./list.css"
const List = function(props) {

    let persons=props.persons;

    return (
        <div>


             <div className="thead">
                    <div className="header-table">
                        <div className="btn-header">Age</div>
                        <div className="btn-header">Name</div>
                        <div className="btn-header">Operation</div>
                    </div>
                    
                    

                    
                    {persons.map((value)=>{

                            return (    
                                            <div className="list-item" key={value.id}><div className="inner-item">{value.name}</div><div className="inner-item">{value.age}</div><div className="inner-item" onClick={props.deleteitem.bind(this,value.id)} ><i className="fas fa-trash"></i></div></div>
                                    );


                    })}

                 
                 
            </div>   



        </div>

    );



}




export default List;