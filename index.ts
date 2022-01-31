import server, { port } from './server';

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('server on');
});
