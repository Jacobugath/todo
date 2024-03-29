import React, {Component} from 'react';
import axios from 'axios';



export default class CreateTodo extends Component{
    constructor(props){
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this)
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this)
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    onChangeTodoDescription(e){
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible(e){
        this.setState({
            todo_responsible: e.target.value
        });
    }
    onChangeTodoPriority(e){
        this.setState({
            todo_priority: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        }
        axios.post('/todos/add', newTodo).then(res => console.log(res.data));
        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        });
        this.props.history.push('/');
        window.location.reload();
    }
    render(){
        return(
            <div>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text" className='form-control'
                        value={this.state.todo_description}
                        onChange={this.onChangeTodoDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Responsible:</label>
                        <input type="text" className='form-control'
                        value={this.state.todo_responsible}
                        onChange={this.onChangeTodoResponsible}
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input type="radio"
                                className='form-check-input'
                                name='priority options'
                                id='prioritylow'
                                value='Low'
                                checked={this.state.todo_priority==='Low'}
                                onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio"
                                className='form-check-input'
                                name='priority options'
                                id='prioritymedium'
                                value='Medium'
                                checked={this.state.todo_priority==='Medium'}
                                onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio"
                                className='form-check-input'
                                name='priority options'
                                id='priorityhigh'
                                value='High'
                                checked={this.state.todo_priority==='High'}
                                onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value='Create Todo' className='btn-primary'/>
                    </div>
                </form>
            </div>
        )
    }
}
