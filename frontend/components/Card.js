import { Component, PropTypes } from 'react';

class Card extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };

  render () {
    const { image, text, result, className, children } = this.props;

    let cardClasses = "card game-card";

    if (className) {
      cardClasses += ` ${className}`;
    }

    if (result == 'success') {
      cardClasses += ' card-outline-success';
    } else if (result == 'pass') {
      cardClasses += ' card-outline-danger';
    }

    return (
      <div className={cardClasses}>
        <img width="100%" className="card-img-top" src={image} />
        <div className="card-block">
          <p className="card-text">{text}</p>
          {children}
        </div>
      </div>
    );
  }
}

export default Card;
