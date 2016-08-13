// We only need to import the modules necessary for initial render
import CoreLayout from 'layouts/CoreLayout/CoreLayout';
import HomeRoute from './Home';
import GameSetup from './GameSetup';
import Game from './Game';

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: HomeRoute,
  childRoutes: [
    GameSetup,
    Game
  ]
});

export default createRoutes;