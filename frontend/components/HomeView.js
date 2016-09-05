import { Component } from 'react';
import { Link } from 'react-router';

class HomeView extends Component {
  render () {
    return (
      <div className="title-screen">
        <div className="row">
          <div className="col-sm-12">
            <h1>About Face!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 offset-sm-4">
            <Link to="new" className="btn btn-primary btn-block start-button">Start</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeView;