import { Component } from 'react';
import { Link } from 'react-router';

class AboutView extends Component {
  render () {
    return (
      <div>
        <h1>About Face</h1>
        <p>Created by Aaron Lerch, for fun</p>
        <Link to="/">Home</Link>
      </div>
    )
  }
}

export default AboutView;