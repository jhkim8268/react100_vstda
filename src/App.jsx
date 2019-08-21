import React, { Component } from 'react';
import Subject from "./components/Subject"
import Writing from "./components/Writing"
import WelcomeContent from "./components/WelcomeContent"
import TodoContent from "./components/TodoContent"
import EditContent from "./components/EditContent"
import update, { extend } from 'immutability-helper';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      mode:'welcome',
      lists: [],
      id: 0,
      board: "",
      priority: "Select a Priority",
      editedNumber: null,
      checked: false,
    }
    this.chooseContent = this.chooseContent.bind(this)
  }
  
  // handleClickChecked(e){
  //   e.preventDefault;
  //   e.target.value=<br>e.target.value</br>
  // }

  chooseContent(){
    var _content = null;
  
    if(this.state.mode==='welcome'){
      _content = 
      <WelcomeContent       
        title= 'Welcome to Very Simple Todo App!'
        desc= 'Get started now by adding a new todo on the left.'
      />
    } else if (this.state.mode==='submit'){
      // if(this.state.edited !== true){
        _content = 
        <TodoContent       
          data={this.state.lists}

          handleChangeCheck={function(e){
            // e.preventDefault();
            var i=0;
            while(i<this.state.lists.length){
              var _lists = Array.from(this.state.lists);  
              // var _board="";
              if(e.target.id == _lists[i].id){
                if(_lists[i].checked === false){
                  _lists[i].className = 'checked'
                  console.log(_lists[i])
                  _lists[i].checked = !_lists[i].checked
                } else{
                  _lists[i].className = 'notChecked'
                  _lists[i].checked = !_lists[i].checked
                }     
              }
              i=i+1   
              this.setState({
              // checked: !this.state.checked,
              lists: _lists,
            });
          }}.bind(this)}
          
          handleClickDelete={function(e){
            e.preventDefault();
            var _lists = Array.from(this.state.lists);  
            var _removed = [];        
            var i=0;
            while(i<this.state.lists.length){
              if(e.target.id == _lists[i].id){
                var _removed = _lists.splice(i, 1)
                break;
              }
              i=i+1   
            }
            this.setState({
              lists: _lists,
            });
          }.bind(this)}
          
          handleClickEdit={function(e){
            e.preventDefault();
            var _lists=Array.from(this.state.lists);
            var i=0;
            while(i<this.state.lists.length){
              if(e.target.id == _lists[i].id){
                break;
                  }
                  i = i+1;
            }
            this.setState({
              mode: 'edit',
              editedNumber: _lists[i].id,
              lists: _lists,
            })
          }.bind(this)}

          />
      } else if (this.state.mode==='edit'){
          _content = 
          <EditContent 
          data={this.state.lists}
          editedNumber={this.state.editedNumber}
          
          handleChangeBoard={function(e){
            let i = 0;
            let _lists = JSON.parse(JSON.stringify(this.state.lists))
            while(i<_lists.length){
              if(_lists[i].id == e.target.id){
                _lists[i].board = e.target.value
              break;
              }
              i++
            }
            this.setState({
              lists: _lists,
            })
          }.bind(this)}

          handleChangePriority={function(e){
            let i = 0;
            let _lists = JSON.parse(JSON.stringify(this.state.lists))
            while(i<_lists.length){
              if(_lists[i].id == e.target.id){
                _lists[i].priority = e.target.value
              break;
              }
              i++
            }
            this.setState({
              lists: _lists,
            })
          }.bind(this)}

          handleClickSave={function(e){
            e.preventDefault();
            this.setState({
              mode: 'submit', 
            });
          }.bind(this)}

          handleClickDelete={function(e){
            e.preventDefault();
            var _lists = Array.from(this.state.lists);  
            var _removed = [];        
            var i=0;
            while(i<this.state.lists.length){
              if(e.target.id == _lists[i].id){
                var _removed = _lists.splice(i, 1)
                break;
              }
              i=i+1   
            }
            this.setState({
              lists: _lists,
            });
          }.bind(this)}

          handleClickEdit={function(e){
            e.preventDefault();
            var _lists=Array.from(this.state.lists);
            var i=0;
            while(i<this.state.lists.length){
              if(e.target.id == _lists[i].id){
                break;
                  }
                  i = i+1;
            }
            this.setState({
              mode: 'edit',
              editedNumber: _lists[i].id,
              lists: _lists,
            })
          }.bind(this)}
          />
        }
      return _content

    } 
  // }

  render() {
    
    return (
      <div className='container'>
        
        <div className='row'>
          <Subject />

          <Writing className ='form-control'
          board={this.state.board}
          handleChangeBoard={function(e){
            this.setState({board: e.target.value});
          }.bind(this)}
          
          priority={this.state.priority}
          handleChangePriority={function(e){
            this.setState({priority: e.target.value});
          }.bind(this)}ƒd

          handleClickSubmit={function(e){
            e.preventDefault();
            var _lists = Array.from(this.state.lists);
            _lists.push({
              id: this.state.id, 
              board: this.state.board, 
              priority: this.state.priority,
              checked: this.state.checked,

            });
            this.setState({
              lists: _lists,
              mode: 'submit', 
              board: "", 
              priority: "Select a Priority",
              id: this.state.id+1
            });
          }.bind(this)}
          />
          {/* <div className ='col-sm-8 form-control'> */}
            {this.chooseContent()}
          {/* </div> */}

        </div>
      </div>

    );
  }
}


export default App;
