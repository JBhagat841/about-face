import CoreLayout from 'layouts/CoreLayout';
import { GameSetupView, GameView, GameOverView, HomeView } from 'components';

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
      path: 'done',
      component: GameOverView
    }
  ]
});

export default createRoutes;