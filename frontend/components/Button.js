import { Component, PropTypes } from 'react';

class Button extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
  };

  render () {
    const { children, onClick } = this.props;

    return (
      <a className="btn btn-primary" href="#"
         onClick={e => {
           e.preventDefault()
           onClick()
         }}
      >
        {children}
      </a>
    );
  }
}

export default Button;