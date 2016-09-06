import { Component, PropTypes } from 'react';

class Button extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
  };

  render () {
    const { children, onClick, className } = this.props;

    let classes = className ? className : "btn btn-primary";

    return (
      <a className={classes} href="#"
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