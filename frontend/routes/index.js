import CoreLayout from 'layouts/CoreLayout';
import { GameSetupView, GameView, HomeView, Success, Pass } from 'components';

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
    },
    {
      path: 'success',
      component: Success
    },
    {
      path: 'pass',
      component: Pass
    }
  ]
});

export default createRoutes;