import React, { Component } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { timingSafeEqual } from 'crypto';



class TodoContent extends Component {

  render() {
    var newLists = [];
    var data = this.props.data;
    var i = 0;
    var backGround = null;
    while(i<data.length){ 
      if(data[i].priority == 1){
        backGround= "alert alert-success alert-dismissible mb-0"
      } else if(data[i].priority == 2){
        backGround= "alert alert-warning alert-dismissible mb-0"
      } else {
        backGround= "alert alert-danger alert-dismissible mb-0"
      }

      newLists.push(
        <li className={backGround + ' ' + data[i].className} key={data[i].id}>
          <input type='checkbox' id={data[i].id} onChange={this.props.handleChangeCheck} />
          {data[i].board}

          <a href='/' className='delete-todo' 
           onClick={this.props.handleClickDelete}
          >
            <i id={data[i].id} className="fa fa-trash icon"></i>
          </a>

          <a href='/' className='edit-todo' 
          id={data[i].id} 
          onClick={this.props.handleClickEdit}
          >
            <i id={data[i].id} className="fa fa-edit icon"></i>
          </a>
        </li>
      )
      i = i+1;
    }
    // console.log(newLists);
    
    return (
      <div className='col-sm-8'>
        <div className="list-group">
          <div className="list-group-item">View Todos</div>
          {newLists}
        </div>    
      </div>
    );
  }
}

export default TodoContent;
