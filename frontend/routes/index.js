import CoreLayout from 'layouts/CoreLayout';
import { GameSetupView, GameView, HomeView } from 'components';

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: {
    component: HomeView
  },
  childRoutes: [
    {
      path: 'new',
      component: GameSetupView
    },
    {
      path: 'game',
      component: GameView
    }
  ]
});

export default createRoutes;