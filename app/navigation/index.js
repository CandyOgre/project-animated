import { DrawerNavigator } from 'react-navigation';
import screens from '../constants/screens';

import {
  Page1,
  Page2,
} from '../screens';

const RootRoutes = {
  [screens.Page1]: {
    screen: Page1,
  },
  [screens.Page2]: {
    screen: Page2,
  },
};

export default DrawerNavigator(RootRoutes);
