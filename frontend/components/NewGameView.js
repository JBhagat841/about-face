import { Link } from 'react-router';

export const NewGameView = () => (
  <div>
    <h1>New Game - Ready?</h1>
    <Link to="game" className="btn btn-primary">Yes</Link>
    <Link to="/" className="btn btn-outline-secondary">No</Link>
  </div>
);

export default NewGameView;