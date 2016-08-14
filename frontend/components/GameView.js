import { Link } from 'react-router';
import Card from './Card';

export const GameView = () => (
  <div>
    <Card image="http://images.clipartpanda.com/cards-20clip-20art-playing-card2.png" title="Cards" />
    <Link to="success" className="btn btn-primary">Got It</Link>
    <Link to="pass" className="btn btn-outline-secondary">Pass</Link>
  </div>
);

export default GameView;