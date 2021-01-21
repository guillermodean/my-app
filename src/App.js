import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//data
import { todos } from "./todos.json";


//subcomponents
import TodoForm from './components/TodoForm';

class App extends Component {
  /* se ejecuta antes que el rendereizado */
  constructor() {
    super();
    this.state = {
      todos
    };
    this.handleAddTodo=this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo){
    this.setState({
      todos:[...this.state.todos,todo]
    })
  }
  removeTodo(index){
    if (window.confirm('Estas seguro de borrar la tarea?')) {
      this.setState({
        todos:this.state.todos.filter((e,i)=>{
          return i !== index
        })
      })
    }
  }

  render() {
    /*Map recorre todos los todos*/
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className='col-md-4' key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-info">{todo.priority}</span> 
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsible}</mark></p>
              
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removeTodo.bind(this,i)}>Delete</button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="#" className="text-white">
            Tasks  
            <span className="badge badge-danger ml-8">{this.state.todos.length}</span>
          </a>
          
        </nav>
        <div className='container'>
          <div className='row mt-4'>
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>
            <div className="col">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
