import React, { Component } from 'react';

class WelcomeContent extends Component {

  render() {
    return (
			<div className="col-sm-8">
        <div className="card">
          <div className="card-header">View Todos</div>
          <div className="card-body text-secondary bg-light">
            <h6 className='card-title'>{this.props.title}</h6>
            <p className='card-text'>{this.props.desc}</p>
          </div>
        </div>
			</div>    
    );
  }
}

export default WelcomeContent;


