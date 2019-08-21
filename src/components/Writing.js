import React, { Component } from 'react';

class Writing extends Component {

  render() {
    return (
			<div className="col-sm-4">
              <div className ='card'>
				<div className="card-header">Add New Todo</div>
					<form action="/" method='post'>
						<div className='card-body'>
							<h6 className='card-title'>I want to..</h6>
							<textarea 
							className='create-todo-text' 
							required 
							name='board' 
							value={this.props.board} 
							onChange={this.props.handleChangeBoard}
							></textarea>
						{/* </div>
						<div className='card-body'> */}
						<div>
							<br></br>
						</div>
							<h6 className='card-title'>How much of a priority is this?</h6>
							<select 
							className='create-todo-priority form-control'
							value={this.props.priority}
							onChange={this.props.handleChangePriority}>	
								<option>Select a Priority</option>
								<option value='1'>Low</option>
								<option value='2'>Medium</option>
								<option value='3'>High</option>
							</select>
						</div>	
						<div className='card-footer'>
							<button value="Add" type='submit' className="btn btn-success btn-block create-todo" onClick={this.props.handleClickSubmit}>Add</button>
						</div>
					</form>
				</div>
			</div>    
    );
  }
}

export default Writing;


