import { registerRoutes } from 'foremanReact/routes/RoutingService';
import Routes from './src/Router/routes';
import { registerLegacy } from './legacy';

registerRoutes('ForemanGoogle', Routes);
registerLegacy();
