import { Component } from 'react';
import { Link } from 'react-router';

class HomeView extends Component {
  render () {
    return (
      <div>
        <h1>About Face!</h1>
        <Link to="new" className="btn btn-outline-primary">
          Start
          &nbsp;
          <i className="fa fa-chevron-right" />
        </Link>
      </div>
    )
  }
}

export default HomeView;