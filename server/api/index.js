import publicApi from './public';
import adminApi from './admin';
import customerApi from './customer';

export default function api(server) {
  server.use('/api/v1/public', publicApi);
  server.use('/api/v1/admin', adminApi);
  server.use('/api/v1/customer', customerApi);
}
