import { Component, PropTypes } from 'react';

class Card extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

  render () {
    const { image, title } = this.props;

    return (
      <div className="card">
        <img width="200px" className="card-img-top" src={image} />
        <div className="card-block">
          <h1 className="card-title">{title}</h1>
        </div>
      </div>
    );
  }
}

export default Card;