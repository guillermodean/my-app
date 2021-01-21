import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(){
      super();
      this.state={
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    };
    this.handleInput=this.handleInput.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
   }  

   handleInput(e){
    const {name,value}=e.target;
    this.setState({
      [name]:value
    })
   }

   handleSubmit(e){
     e.preventDefault();
    this.props.onAddTodo(this.state);
   }

   render() {
     return (
       <div className="card">
  
       <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
           <input type="text" onChange={this.handleInput} name="title" className="form-control" placeholder="Title"></input>
          </div>

          <div className="form-group">
           <input 
           type="text" 
           onChange={this.handleInput} 
           name="responsible" 
           className="form-control" 
           placeholder="Responsible"></input>
          </div>

          <div className="form-group">
           <input type="text" onChange={this.handleInput} name="description" className="form-control" placeholder="Description"></input>
          </div>

          <div className="form-group">
           <select name="priority" onChange={this.handleInput}  className="form-control" placeholder="Description">
                <option>low</option>
                <option>medium</option>
                <option>high</option>
           </select>
          </div>

          <div className="form-group">
          <button type="submit" className="btn btn-primary">Save</button>
          </div>

          </form>
         
       </div>
    )
  }
}export default TodoForm;