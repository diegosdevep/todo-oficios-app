import { Icon } from 'react-native-elements';
import { screen } from './screen';

export function iconOptions(route, color, size) {
  let iconName;

  if (route.name === screen.home.tab) iconName = 'home';
  else if (route.name === screen.demands.tab) iconName = 'text-box-outline';
  else if (route.name === screen.account.tab) iconName = 'account';
  else iconName = 'alert-circle-outline';

  return (
    <Icon type='material-community' name={iconName} color={color} size={size} />
  );
}
