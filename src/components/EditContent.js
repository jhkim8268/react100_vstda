import React, { Component } from 'react';

class EditContent extends Component {

  render() {
    var data = this.props.data;
    var _editedNumber = this.props.editedNumber;
    // var editedData = data.map(data => {
      //   if(data.id == _editedNumber){
        //     <div className="list-group-item" key={data.id} >
        //         <input type='checkbox'/>
        //         {data.board}
        //         {data.priority}
        //         {/* data[i].priority defines color */}
        //     </div> 
        //   }
        // }  )
        var newLists = [];
        var i = 0;
        var backGround = null;
        
        while(i<data.length){
          if(data[i].priority == 3){
            backGround= "alert alert-danger alert-dismissible mb-0"
          } else if(data[i].priority == 2){
            backGround= "alert alert-warning alert-dismissible mb-0"
          } else {
            backGround= "alert alert-success alert-dismissible mb-0"
          }

          newLists.push(
            data[i].id===_editedNumber
            ? 
                <form action="/" method='post' key={data[i].id}>
                <div className={backGround} >
                  <p>Description</p>
                  <textarea 
                  className='update-todo-text' 
                  required 
                  name='board' 
                  id={data[i].id}
                  onChange={this.props.handleChangeBoard}
                  value={data[i].board} 
                  ></textarea>
                  <div>
                    <br></br>
                  </div>                  
                  <p>Priority</p>
                  <select 
                  className='update-todo-priority form-control col-sm-4'
                  id={data[i].id}
                  value={data[i].priority}
                  onChange={this.props.handleChangePriority}>	
                    <option value='1'>Low</option>
                    <option value='2'>Medium</option>
                    <option value='3'>High</option>
                  </select>
                  <div>
                    <br></br>
                  </div>                  
                  <button className="btn btn-success update-todo" value="Add" type='submit' onClick={this.props.handleClickSave}>Save</button>
                </div>
              </form>
              
            : 
              <li className={backGround} key={data[i].id} >
                  <input type='checkbox' id={data[i].id} onChange={this.props.handleChangeCheck} />
                  {data[i].board}
                  {data[i].priority}
                  
                  <a href='/' className='delete-todo float-right' 
                  id={data[i].id} 
                  onClick={this.props.handleClickDelete}
                  >
                    <i id={data[i].id} className="fa fa-trash"></i>
                  </a>
                  
                  <a href='/' className='edit-todo float-right' 
                  id={data[i].id} 
                  onClick={this.props.handleClickEdit}
                  >            
                    <i id={data[i].id} className="fa fa-edit"></i>
                  </a>
              </li>
              
            )
            i = i+1;
          }
          return (
            <div className="list-group col-sm-8">
              <div className="list-group-item">View Todos</div>
              {newLists}
            </div>    
          );
          }
        }

//   }
// }

export default EditContent;
